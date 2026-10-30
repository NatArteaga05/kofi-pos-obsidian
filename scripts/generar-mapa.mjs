// Genera el mapa de Kofi POS en esta bóveda a partir del repositorio real.
//
// Lee el repositorio con git (por defecto, la rama origin/develop), así que no depende de la rama
// que tenga abierta la copia local. Reescribe solo la carpeta «Generado/» y la nota del mapa; las
// notas propias van en «Notas/» y nunca se tocan.
//
// Cada pieza del proyecto es una nota (un nodo del grafo): especificaciones, historias, requisitos,
// decisiones, tareas, archivos de código, rutas, pantallas, tablas, principios y PR. Los enlaces
// salen de las referencias reales entre ellas (RF que cita una tarea, imports entre archivos…).
//
// Uso: node scripts/generar-mapa.mjs [--repo <ruta>] [--ref <rama>] [--fetch]

import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, posix, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const vault = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index === -1 ? fallback : args[index + 1];
};

const repo = resolve(option('--repo', process.env.KOFI_REPO ?? join(vault, '..', '..', 'kofi-pos-v2')));
const ref = option('--ref', 'origin/develop');
const generatedDir = join(vault, 'Generado');
const hubName = 'Kofi POS - mapa del proyecto';

// ---------------------------------------------------------------------------------------------
// Lectura del repositorio

const git = (...gitArgs) =>
  execFileSync('git', ['-C', repo, '-c', 'core.quotepath=false', ...gitArgs], {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });

if (args.includes('--fetch')) git('fetch', 'origin', '--quiet');

const commit = git('rev-parse', '--short', ref).trim();
const commitDate = git('log', '-1', '--format=%ad', '--date=short', ref).trim();
const files = git('ls-tree', '-r', '--name-only', ref).split('\n').filter(Boolean);
const fileSet = new Set(files);
const cache = new Map();
const read = (path) => {
  if (!cache.has(path)) cache.set(path, git('show', `${ref}:${path}`).replace(/\r\n/g, '\n'));
  return cache.get(path);
};
const exists = (path) => fileSet.has(path);
const under = (prefix) => files.filter((file) => file.startsWith(prefix));

const remote = git('remote', 'get-url', 'origin')
  .trim()
  .replace(/\.git$/, '')
  .replace(/^git@github\.com:/, 'https://github.com/');
const branch = ref.replace(/^origin\//, '');
const blobUrl = (path) => `${remote}/blob/${branch}/${path}`;
const treeUrl = (path) => `${remote}/tree/${branch}/${path}`;
const prUrl = (number) => `${remote}/pull/${number}`;

// ---------------------------------------------------------------------------------------------
// Utilidades de Markdown

const frontmatter = (fields) => {
  const lines = ['---'];
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) lines.push(`${key}:`, ...value.map((item) => `  - ${item}`));
    else lines.push(`${key}: ${JSON.stringify(value)}`);
  }
  return [...lines, '---', ''].join('\n');
};
const generatedNotice = `> [!info] Nota generada\n> Generada desde \`${ref}\` (${commit}, ${commitDate}) con \`npm run mapa\`. No la edites: se reescribe en cada ejecución. Lo tuyo va en \`Notas/\`.\n`;
const table = (headers, rows) =>
  rows.length === 0
    ? '_Sin datos._\n'
    : [
        `| ${headers.join(' | ')} |`,
        `| ${headers.map(() => '---').join(' | ')} |`,
        ...rows.map((row) => `| ${row.map((cell) => String(cell).replace(/\|/g, '\\|').replace(/\n/g, ' ')).join(' | ')} |`),
      ].join('\n') + '\n';
const wl = (name, alias) => (alias && alias !== name ? `[[${name}|${alias}]]` : `[[${name}]]`);
const code = (text) => `\`${text}\``;
const list = (items, empty = '_Ninguno._') => (items.length ? items.map((item) => `- ${item}`).join('\n') : empty);
const unique = (items) => [...new Set(items)];
const sectionOf = (markdown, heading) => {
  const start = markdown.search(new RegExp(`^${heading}`, 'm'));
  if (start === -1) return '';
  const rest = markdown.slice(start);
  const level = rest.match(/^#+/)[0].length;
  const firstLineEnd = rest.indexOf('\n') + 1;
  const next = rest.slice(firstLineEnd).search(new RegExp(`^#{1,${level}} `, 'm'));
  return next === -1 ? rest : rest.slice(0, firstLineEnd + next);
};
// Nombres de archivo válidos en Windows y en enlaces de Obsidian.
const safeName = (text) =>
  text
    .replace(/\//g, '∕')
    .replace(/:/g, '꞉')
    .replace(/[\\*?"<>|#^[\]]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
const shorten = (text, max = 55) => (text.length <= max ? text : `${text.slice(0, text.lastIndexOf(' ', max))}…`);
// Quita los enlaces Markdown relativos (a otros archivos del repo) y deja su texto.
const stripRelativeLinks = (text) => text.replace(/\[([^\]]+)\]\((?!https?:)[^)]+\)/g, '$1');
// «RF-3 a RF-5» o «RF-3–RF-5» → RF-3, RF-4, RF-5.
const expandRefs = (text, kind) => {
  const ids = new Set();
  const pattern = new RegExp(`\\b${kind}-(\\d+)(?:\\s*(?:–|a)\\s*${kind}-(\\d+))?`, 'g');
  for (const match of text.matchAll(pattern)) {
    const first = Number(match[1]);
    const last = match[2] ? Math.min(Number(match[2]), first + 40) : first;
    for (let index = first; index <= last; index += 1) ids.add(`${kind}-${index}`);
  }
  return [...ids];
};
const principlesIn = (text) =>
  unique([...text.matchAll(/principios? (\d(?:(?:, | y | e )\d)*)/gi)].flatMap((match) => match[1].match(/\d/g)));

// En las filas de una tabla, el «|» de un enlace con alias se escapa para no partir la celda.
const escapeTableLinks = (content) =>
  content
    .split('\n')
    .map((line) => (line.startsWith('|') ? line.replace(/\[\[([^\]|]*?[^\]|\\])\|([^\]]+)\]\]/g, '[[$1\\|$2]]') : line))
    .join('\n');

const written = new Set();
const write = (relativePath, content) => {
  const target = join(vault, relativePath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, `${escapeTableLinks(content).replace(/\n{3,}/g, '\n\n').trimEnd()}\n`, 'utf8');
  written.add(relativePath);
};

// ---------------------------------------------------------------------------------------------
// Código fuente: un nodo por archivo (sin pruebas unitarias ni de integración)

const sourceFiles = files.filter(
  (file) =>
    /^(apps\/[^/]+\/(src|test)|packages\/[^/]+\/src|e2e)\/.*\.(ts|tsx)$/.test(file) && !/\.test\.tsx?$/.test(file),
);
const sourceSet = new Set(sourceFiles);
const describeFile = (path) => {
  const name = path.split('/').pop();
  let match = path.match(/^apps\/([^/]+)\/src\/modules\/([^/]+)\/(.*)$/);
  if (match) {
    const dirs = match[3].split('/').slice(0, -1);
    return { app: match[1], module: match[2], note: `${name} (${[match[1], match[2], ...dirs].join(' ')})` };
  }
  match = path.match(/^apps\/([^/]+)\/(src|test)\/(.*)$/);
  if (match) {
    const dirs = match[3].split('/').slice(0, -1);
    return { app: match[1], module: null, note: `${name} (${[match[1], ...(match[2] === 'test' ? ['test'] : []), ...dirs].join(' ')})` };
  }
  match = path.match(/^packages\/([^/]+)\/src\/(.*)$/);
  if (match) {
    const dirs = match[2].split('/').slice(0, -1);
    return { app: match[1], module: null, note: `${name} (${[match[1], ...dirs].join(' ')})` };
  }
  return { app: 'e2e', module: null, note: `${name} (e2e)` };
};
const fileMeta = Object.fromEntries(sourceFiles.map((path) => [path, describeFile(path)]));
const fileNote = (path) => fileMeta[path].note;

// Un texto entre comillas invertidas apunta a un archivo si coincide con su ruta o con el final de
// una sola ruta (`menu/index.ts`, `demo-sales.cli.ts`).
const resolveFile = (token) => {
  if (sourceSet.has(token)) return token;
  if (!/\.(ts|tsx)$/.test(token) || /\s/.test(token)) return null;
  const candidates = sourceFiles.filter((file) => file.endsWith(`/${token}`));
  return candidates.length === 1 ? candidates[0] : null;
};

const resolveImport = (from, specifier) => {
  if (specifier === '@kofi/contracts') return 'packages/contracts/src/index.ts';
  if (!specifier.startsWith('.')) return null;
  const base = posix.normalize(posix.join(posix.dirname(from), specifier));
  return [base, base.replace(/\.js$/, '.ts'), `${base}.ts`, `${base}.tsx`, `${base}/index.ts`].find((path) => sourceSet.has(path)) ?? null;
};
const imports = {};
const importedBy = {};
for (const path of sourceFiles) {
  const targets = new Set();
  for (const match of read(path).matchAll(/(?:from|import)\s*\(?\s*['"]([^'"]+)['"]/g)) {
    const target = resolveImport(path, match[1]);
    if (target && target !== path) targets.add(target);
  }
  imports[path] = [...targets].sort();
  for (const target of targets) (importedBy[target] ??= []).push(path);
}

// ---------------------------------------------------------------------------------------------
// Principios de la constitución

const constitution = read('docs/constitution.md');
const principles = [...constitution.matchAll(/^(\d)\. \*\*(.+?)\.\*\* (.+)$/gm)].map((match) => ({
  number: match[1],
  title: match[2],
  text: match[3],
  note: `Principio ${match[1]} — ${match[2]}`,
  specs: [],
  decisions: [],
}));
const principleByNumber = Object.fromEntries(principles.map((principle) => [principle.number, principle]));

// ---------------------------------------------------------------------------------------------
// Especificaciones

const specFolders = unique(under('specs/').map((file) => file.split('/')[1]))
  .filter((folder) => /^\d{3}-/.test(folder))
  .sort();
const moduleNames = unique(under('apps/api/src/modules/').map((file) => file.split('/')[4])).sort();
const codeTokens = (text) => unique([...text.matchAll(/`([^`\n]+)`/g)].map((match) => resolveFile(match[1])).filter(Boolean));

const specs = specFolders.map((folder) => {
  const base = `specs/${folder}`;
  const spec = exists(`${base}/spec.md`) ? read(`${base}/spec.md`) : '';
  const plan = exists(`${base}/plan.md`) ? read(`${base}/plan.md`) : '';
  const tasks = exists(`${base}/tasks.md`) ? read(`${base}/tasks.md`) : '';
  const number = folder.slice(0, 3);
  const id = `SPEC-${number}`;
  const title = spec.match(/^# SPEC-\d+ — (.+)$/m)?.[1]?.trim() ?? folder;
  const header = spec.slice(0, Math.max(0, spec.search(/^## 1\./m)));

  const storiesSection = sectionOf(spec, '## 3\\.');
  const stories = [...storiesSection.matchAll(/^### (HU-\d+) — (.+?) \((P\d+)\)\n\n(.+)$/gm)].map((match) => ({
    id: match[1],
    title: match[2],
    priority: match[3],
    statement: match[4],
    test: sectionOf(storiesSection, `### ${match[1]} `).match(/\*\*Prueba independiente:\*\* (.+)/)?.[1] ?? '',
    note: safeName(`${id} ${match[1]} — ${match[2]}`),
  }));

  const requirements = [];
  let currentStory = '';
  let currentRequirement = null;
  for (const line of sectionOf(spec, '## 4\\.').split('\n')) {
    const story = line.match(/^### (HU-\d+)/);
    if (story) currentStory = story[1];
    if (/^#/.test(line)) {
      currentRequirement = null;
      continue;
    }
    const rf = line.match(/^\*\*(RF-\d+)\. (.+?)\*\*(?: \((HU-[^)]+)\))?/);
    if (rf) {
      const rfTitle = rf[2].replace(/\.$/, '');
      currentRequirement = {
        id: rf[1],
        title: rfTitle,
        stories: rf[3]?.match(/HU-\d+/g) ?? [currentStory].filter(Boolean),
        body: [],
        note: safeName(`${id} ${rf[1]} — ${shorten(rfTitle)}`),
      };
      requirements.push(currentRequirement);
      continue;
    }
    currentRequirement?.body.push(line);
  }
  for (const requirement of requirements) requirement.body = requirement.body.join('\n').trim();

  const nonFunctional = [...sectionOf(spec, '## 5\\.').matchAll(/^- \*\*(RNF-\d+)\. (.+?)\*\*\s*(.*)$/gm)].map((match) => {
    const rnfTitle = match[2].replace(/\.$/, '');
    return { id: match[1], title: rnfTitle, body: match[3], note: safeName(`${id} ${match[1]} — ${shorten(rnfTitle)}`) };
  });

  const decisions = [...plan.matchAll(/^\| (D-\d+) \| (.+) \|$/gm)].map((match) => {
    const cells = match[2].split(/(?<!\\) \| /);
    const decision = cells[0] ?? '';
    const decisionTitle = (decision.match(/\*\*(.+?)\*\*/)?.[1] ?? decision).replace(/[:.]$/, '').replace(/`/g, '');
    return {
      id: match[1],
      title: decisionTitle,
      decision,
      why: cells[1] ?? '',
      alternative: cells[2] ?? '',
      rfs: expandRefs(cells[3] ?? '', 'RF'),
      rnfs: expandRefs(cells[3] ?? '', 'RNF'),
      principles: principlesIn(match[2]),
      files: codeTokens(match[2]),
      note: safeName(`${id} ${match[1]} — ${shorten(decisionTitle)}`),
    };
  });

  const phases = [];
  const taskList = [];
  let phase = null;
  for (const line of tasks.split('\n')) {
    const heading = line.match(/^## (Fase .+)$/);
    if (heading) {
      phase = { name: heading[1], tasks: [] };
      phases.push(phase);
      continue;
    }
    if (/^## /.test(line)) phase = null;
    const task = line.match(/^\s*- \[( |x)\] \*\*(T\d+)([^*]*)\*\*\s*(.*)$/);
    if (!task || !phase) continue;
    const storyNumber = (task[3].match(/US(\d+)/) ?? phase.name.match(/US(\d+)/))?.[1];
    const item = {
      id: task[2],
      done: task[1] === 'x',
      labels: task[3].trim(),
      text: task[4],
      phase: phase.name,
      story: storyNumber ? `HU-${storyNumber}` : null,
      rfs: expandRefs(task[4], 'RF'),
      rnfs: expandRefs(task[4], 'RNF'),
      decisions: expandRefs(task[4], 'D'),
      dependsOn: task[4].match(/Depende de:? (.+)$/)?.[1]?.match(/T\d{3}/g) ?? [],
      files: codeTokens(task[4]),
      e2e: unique([...task[4].matchAll(/e2e\/[A-Za-z0-9-]+\.spec\.ts/g)].map((match) => match[0])).filter((path) => sourceSet.has(path)),
      note: `${id} ${task[2]}`,
    };
    phase.tasks.push(item);
    taskList.push(item);
  }

  const docText = `${plan}\n${tasks}`;
  const moduleMentions = Object.fromEntries(
    moduleNames.map((name) => [name, (docText.match(new RegExp(`modules/${name}/`, 'g')) ?? []).length]),
  );
  const modules = moduleNames.filter((name) => moduleMentions[name] > 0).sort((a, b) => moduleMentions[b] - moduleMentions[a]);

  const compliance = [...sectionOf(plan, '## 2\\. Control').matchAll(/^\| (\d)\. [^|]+ \| ([^|]+) \|/gm)].map((match) => ({
    principle: match[1],
    answer: match[2].trim(),
  }));

  return {
    folder,
    number,
    id,
    title,
    note: `${id} ${title}`,
    dir: `Generado/Especificaciones/${id}`,
    status: spec.match(/^Estado: ([^·\n]+)/m)?.[1]?.trim() ?? 'sin estado',
    date: spec.match(/Fecha: (\d{4}-\d{2}-\d{2})/)?.[1] ?? '',
    objective: (spec.match(/^Objetivo: (.+)$/m)?.[1] ?? '').replace(/^./, (letter) => letter.toUpperCase()),
    dependsOn: unique([...header.matchAll(/\.\.\/(\d{3})-[^/]+\/spec\.md/g)].map((match) => match[1])),
    stories,
    requirements,
    nonFunctional,
    decisions,
    phases,
    tasks: taskList,
    done: taskList.filter((task) => task.done).length,
    total: taskList.length,
    modules,
    primaryModule: modules[0],
    compliance,
    planText: plan,
    extraFiles: under(`${base}/`).filter((file) => !/\/(spec|plan|tasks)\.md$/.test(file)),
    pullRequests: [],
  };
});
const specByNumber = Object.fromEntries(specs.map((spec) => [spec.number, spec]));

// Índice de notas por especificación: «RF-7» de SPEC-003 → nombre de su nota.
const noteIndex = {};
for (const spec of specs) {
  const index = (noteIndex[spec.number] = {});
  for (const item of [...spec.stories, ...spec.requirements, ...spec.nonFunctional, ...spec.decisions, ...spec.tasks]) index[item.id] = item.note;
  for (const answer of spec.compliance) principleByNumber[answer.principle]?.specs.push(spec);
  for (const decision of spec.decisions) for (const number of decision.principles) principleByNumber[number]?.decisions.push(decision);
}
const idLink = (number, id) => (noteIndex[number]?.[id] ? wl(noteIndex[number][id], id) : null);
const idLinks = (number, ids) => ids.map((id) => idLink(number, id)).filter(Boolean);

// ---------------------------------------------------------------------------------------------
// Historial de develop: cada commit es un PR fusionado con squash

const history = git('log', ref, '--format=%h%x1f%ad%x1f%s%x1f%b%x1e', '--date=short')
  .split('\x1e')
  .map((record) => record.trim())
  .filter(Boolean)
  .map((record) => {
    const [hash, date, subject, body = ''] = record.split('\x1f');
    const pr = subject.match(/\(#(\d+)\)$/)?.[1] ?? subject.match(/pull request #(\d+)/)?.[1];
    const specNumber = subject.match(/\[SPEC-(\d{3})\]/)?.[1];
    const type = subject.match(/^(\w+)(?:\(([^)]+)\))?:/);
    const spec = specByNumber[specNumber];
    return {
      hash,
      date,
      subject,
      title: subject.replace(/ \(#\d+\)$/, ''),
      pr,
      specNumber,
      type: type?.[1] ?? 'merge',
      scope: type?.[2] ?? '',
      tasks: spec ? unique(body.match(/\bT\d{3}\b/g) ?? []).filter((task) => noteIndex[specNumber][task]) : [],
      note: pr ? `PR ${pr}` : null,
    };
  });
for (const entry of history) if (entry.specNumber && specByNumber[entry.specNumber]) specByNumber[entry.specNumber].pullRequests.push(entry);
const prsByTask = {};
for (const entry of history) for (const task of entry.tasks) (prsByTask[`${entry.specNumber} ${task}`] ??= []).push(entry);

// ---------------------------------------------------------------------------------------------
// Módulos, rutas, pantallas y base de datos

const businessRules = read('docs/business-rules.md');
const moduleTitles = {};
for (const row of businessRules.matchAll(/^\| \d+ \| ([^|]+) \| ([^|]+) \| `specs\/(\d{3})-/gm)) {
  const spec = specByNumber[row[3]];
  if (spec?.primaryModule) moduleTitles[spec.primaryModule] = { title: row[1].trim(), summary: row[2].trim() };
}
const moduleNote = (name) => `Módulo ${moduleTitles[name]?.title ?? name} (${name})`;
const groupNote = (path) => {
  const meta = fileMeta[path];
  if (meta.module) return moduleNote(meta.module);
  if (meta.app === 'contracts') return 'Contratos';
  if (meta.app === 'e2e') return 'Pruebas de punta a punta';
  if (meta.app === 'api') return 'Código compartido de la API';
  if (meta.app === 'web') return 'Código compartido de la interfaz';
  return 'Código compartido';
};
const routeName = (path) => safeName(path.replace(/:(\w+)/g, '{$1}').replace(/\*/g, '{resto}'));

const apiRoutes = [];
for (const file of under('apps/api/src/modules/').filter((path) => /\.routes\.ts$/.test(path))) {
  const module = file.split('/')[4];
  const source = read(file);
  for (const match of source.matchAll(/app\.(get|post|put|patch|delete)(?:<[^>]*>)?\(\s*(['`])(\/api[^'`]*)\2/g)) {
    const method = match[1].toUpperCase();
    const paths = [];
    if (match[3].includes('${action}')) {
      // Rutas declaradas en un bucle `for (const [action, …] of [['deactivate', …], …])`.
      const loop = source.slice(source.lastIndexOf('for (const', match.index), match.index);
      const actions = [...loop.matchAll(/\['(\w+)',/g)].map((m) => m[1]);
      for (const action of actions.length ? actions : ['{acción}']) paths.push(match[3].replace('${action}', action));
    } else paths.push(match[3]);
    for (const path of paths) apiRoutes.push({ method, path, module, file, note: `${method} ${routeName(path)}` });
  }
}
for (const route of apiRoutes)
  route.specs = specs.filter((spec) => spec.planText.includes(`${route.method} ${route.path}`) || spec.planText.includes(`\`${route.path}\``));

const roleConstants = {};
for (const file of under('packages/contracts/src/').filter((path) => !path.endsWith('.test.ts')))
  for (const match of read(file).matchAll(/export const (\w+_ROLES) = \[([^\]]*)\]/g)) roleConstants[match[1]] = match[2];
const roleList = (raw) => (roleConstants[raw] ?? raw).replace(/[[\]'"]/g, '').trim();

const routesSource = read('apps/web/src/routes.tsx');
const componentModule = {};
for (const imported of routesSource.matchAll(/import \{([^}]+)\} from '\.\/modules\/([a-z-]+)\//g))
  for (const name of imported[1].split(',').map((part) => part.trim()).filter(Boolean)) componentModule[name] = imported[2];
// Cada definición va desde su `path:` hasta el siguiente o el cierre de la lista.
const webRoutes = [...routesSource.matchAll(/path: '([^']+)'([\s\S]*?)(?=path: '|\];)/g)].map((match) => {
  const page = match[2].match(/element: <(\w+)/)?.[1] ?? '';
  const isPublic = routesSource.lastIndexOf('publicRoutes', match.index) > routesSource.lastIndexOf('protectedRouteDefinitions', match.index);
  return {
    path: match[1],
    page,
    module: componentModule[page] ?? '',
    file: sourceFiles.find((file) => file.startsWith('apps/web/') && new RegExp(`export (?:function|const) ${page}\\b`).test(read(file))),
    roles: isPublic ? 'pública' : roleList(match[2].match(/roles: (\[[^\]]*\]|\w+)/)?.[1] ?? 'owner, cashier'),
    homeLink: match[2].match(/homeLink: '([^']+)'/)?.[1] ?? '',
    note: `Pantalla ${routeName(match[1])}`,
  };
});

const migrations = under('apps/api/src/shared/database/migrations/').filter((file) => file.endsWith('.sql')).sort();
const tables = [];
for (const file of migrations) {
  for (const match of read(file).matchAll(/CREATE TABLE (\w+) \(([\s\S]*?)\n\);/g)) {
    const columns = match[2]
      .split('\n')
      .map((line) => line.trim().match(/^(\w+) (\w+(?: \w+)?)/))
      .filter((column) => column && !/^(CONSTRAINT|PRIMARY|UNIQUE|CHECK|FOREIGN|EXCLUDE)$/.test(column[1]))
      .map((column) => `${column[1]} ${column[2]}`);
    const references = [...match[2].matchAll(/^\s*(\w+)[^\n]*REFERENCES (\w+) \((\w+)\)/gm)].map((m) => ({ column: m[1], table: m[2] }));
    tables.push({ name: match[1], migration: file, columns, references, files: [], note: `Tabla ${match[1]}` });
  }
}
for (const file of sourceFiles.filter((path) => path.startsWith('apps/api/src/'))) {
  const source = read(file);
  for (const table of tables)
    if (new RegExp(`\\b(FROM|INTO|UPDATE|JOIN)\\s+${table.name}\\b`, 'i').test(source)) table.files.push(file);
}

// ---------------------------------------------------------------------------------------------
// Texto con enlaces: RF-7, D-4, T012, SPEC-002 (RF-15), `sales.service.ts`, `POST /api/sales`

const resolveRoute = (token) => {
  const match = token.match(/^(?:(GET|POST|PUT|PATCH|DELETE) )?(\/api\/\S+)$/);
  if (!match) return null;
  const found = apiRoutes.filter((route) => route.path === match[2] && (!match[1] || route.method === match[1]));
  return found.length === 1 ? found[0] : null;
};

const linkify = (text, number) =>
  stripRelativeLinks(text).replace(
    /`([^`\n]+)`|SPEC-(\d{3})(?:(,? \()([^)]*)\)| (RNF-\d+|RF-\d+|D-\d+|T\d{3})\b)?|\b(RNF|RF|D)-(\d+)\b|\b(T\d{3})\b/g,
    (match, codeText, specNumber, parenOpen, parenBody, specId, kind, num, taskId, offset, whole) => {
      if (codeText !== undefined) {
        const file = resolveFile(codeText);
        if (file) return wl(fileNote(file), codeText);
        const route = resolveRoute(codeText);
        return route ? wl(route.note, codeText) : match;
      }
      if (specNumber !== undefined) {
        const target = specByNumber[specNumber];
        if (!target) return match;
        let result = wl(target.note, `SPEC-${specNumber}`);
        if (parenOpen) result += `${parenOpen}${parenBody.replace(/\b(?:RNF|RF|D)-\d+\b|\bT\d{3}\b/g, (id) => idLink(specNumber, id) ?? id)})`;
        else if (specId) result += ` ${idLink(specNumber, specId) ?? specId}`;
        return result;
      }
      const id = taskId ?? `${kind}-${num}`;
      const after = whole.slice(offset + match.length, offset + match.length + 30);
      if (/^ de esa especificación/.test(after)) return match;
      const other = after.match(/^ de SPEC-(\d{3})/);
      return idLink(other ? other[1] : number, id) ?? match;
    },
  );

// ---------------------------------------------------------------------------------------------
// Índices inversos para las notas

const push = (map, key, value) => (map[key] ??= []).push(value);
const tasksByFile = {};
const tasksByE2e = {};
const specsByFile = {};
for (const spec of specs)
  for (const task of spec.tasks) {
    for (const file of task.files) push(tasksByFile, file, task), push(specsByFile, file, spec);
    for (const file of task.e2e) push(tasksByE2e, file, task);
  }
const decisionsByFile = {};
for (const spec of specs) for (const decision of spec.decisions) for (const file of decision.files) push(decisionsByFile, file, decision);

// ---------------------------------------------------------------------------------------------
// Escritura

rmSync(generatedDir, { recursive: true, force: true });

const statusLabel = (spec) => (spec.total > 0 && spec.done === spec.total ? 'completa' : spec.total > 0 ? 'en curso' : 'sin tareas');
const usedBy = (spec) => specs.filter((other) => other.dependsOn.includes(spec.number));
const taskIcon = (task) => (task.done ? '✅' : '⬜');

for (const spec of specs) {
  const n = spec.number;
  const specLink = wl(spec.note, spec.id);

  // Nota de la especificación
  write(
    `Generado/Especificaciones/${spec.note}.md`,
    [
      frontmatter({
        tags: ['especificacion', ...spec.modules.map((name) => `modulo/${name}`)],
        spec: spec.id,
        estado: spec.status,
        fecha: spec.date,
        tareas: `${spec.done}/${spec.total}`,
        avance: statusLabel(spec),
      }),
      `# ${spec.id} — ${spec.title}`,
      '',
      generatedNotice,
      `**Estado:** ${spec.status} · **Fecha:** ${spec.date} · **Tareas:** ${spec.done}/${spec.total} (${statusLabel(spec)})`,
      '',
      spec.objective ? `> [!abstract] Objetivo\n> ${spec.objective}\n` : '',
      '## Relaciones',
      '',
      `- **Depende de:** ${spec.dependsOn.map((number) => wl(specByNumber[number]?.note ?? `SPEC-${number}`)).join(', ') || '—'}`,
      `- **La usan:** ${usedBy(spec).map((other) => wl(other.note)).join(', ') || '—'}`,
      `- **Módulos del código:** ${spec.modules.map((name) => wl(moduleNote(name), name)).join(', ') || '—'}`,
      `- **Principios:** ${spec.compliance.map((item) => wl(principleByNumber[item.principle]?.note ?? item.principle, `${item.principle} (${item.answer})`)).join(', ') || '—'}`,
      `- **Documentos:** ${wl('Reglas de negocio')} · ${wl('Arquitectura')} · ${wl('Constitución')}`,
      '',
      '## Historias de usuario',
      '',
      list(spec.stories.map((story) => `${wl(story.note, `${story.id} — ${story.title}`)} (${story.priority})`)),
      '',
      '## Requisitos funcionales',
      '',
      table(['RF', 'Requisito', 'Historia'], spec.requirements.map((rf) => [wl(rf.note, rf.id), rf.title, idLinks(n, rf.stories).join(', ')])),
      spec.nonFunctional.length ? '## Requisitos no funcionales\n' : '',
      spec.nonFunctional.length ? table(['RNF', 'Requisito'], spec.nonFunctional.map((rnf) => [wl(rnf.note, rnf.id), rnf.title])) : '',
      '## Decisiones técnicas',
      '',
      table(['#', 'Decisión', 'RF'], spec.decisions.map((decision) => [wl(decision.note, decision.id), decision.title, idLinks(n, decision.rfs).join(', ')])),
      '## Tareas',
      '',
      ...spec.phases.flatMap((phase) => [
        `### ${phase.name} (${phase.tasks.filter((task) => task.done).length}/${phase.tasks.length})`,
        '',
        list(phase.tasks.map((task) => `${taskIcon(task)} ${wl(task.note, task.id)} ${task.labels} — ${shorten(stripRelativeLinks(task.text).replace(/`/g, ''), 110)}`), '_Sin tareas._'),
        '',
      ]),
      '## Pull requests',
      '',
      list(spec.pullRequests.map((entry) => `${entry.note ? wl(entry.note) : entry.hash} — ${entry.title} (${entry.date})`)),
      '',
      '## Archivos de la especificación',
      '',
      ...['spec.md', 'plan.md', 'tasks.md']
        .filter((name) => exists(`specs/${spec.folder}/${name}`))
        .map((name) => `- [${name}](${blobUrl(`specs/${spec.folder}/${name}`)})`),
      ...spec.extraFiles.map((file) => `- [${file.replace(`specs/${spec.folder}/`, '')}](${blobUrl(file)})`),
    ].join('\n'),
  );

  for (const story of spec.stories) {
    const storyTasks = spec.tasks.filter((task) => task.story === story.id);
    write(
      `${spec.dir}/Historias/${story.note}.md`,
      [
        frontmatter({ tags: ['historia'], spec: spec.id, prioridad: story.priority }),
        `# ${spec.id} ${story.id} — ${story.title} (${story.priority})`,
        '',
        `Especificación: ${specLink}`,
        '',
        linkify(story.statement, n),
        '',
        story.test ? `> [!example] Prueba independiente\n> ${linkify(story.test, n)}\n` : '',
        '## Requisitos',
        '',
        list(spec.requirements.filter((rf) => rf.stories.includes(story.id)).map((rf) => wl(rf.note))),
        '',
        `## Tareas (${storyTasks.filter((task) => task.done).length}/${storyTasks.length})`,
        '',
        list(storyTasks.map((task) => `${taskIcon(task)} ${wl(task.note, task.id)}`)),
        '',
        '## Pruebas de punta a punta',
        '',
        list(unique(storyTasks.flatMap((task) => task.e2e)).map((file) => wl(fileNote(file)))),
      ].join('\n'),
    );
  }

  for (const rf of spec.requirements) {
    const decisions = spec.decisions.filter((decision) => decision.rfs.includes(rf.id));
    const rfTasks = spec.tasks.filter((task) => task.rfs.includes(rf.id));
    write(
      `${spec.dir}/Requisitos/${rf.note}.md`,
      [
        frontmatter({ tags: ['requisito'], spec: spec.id }),
        `# ${spec.id} ${rf.id} — ${rf.title}`,
        '',
        `Especificación: ${specLink} · Historia: ${idLinks(n, rf.stories).join(', ') || '—'}`,
        '',
        linkify(rf.body, n),
        '',
        '## Decisiones que lo resuelven',
        '',
        list(decisions.map((decision) => wl(decision.note))),
        '',
        '## Tareas que lo cubren',
        '',
        list(rfTasks.map((task) => `${taskIcon(task)} ${wl(task.note, task.id)}`)),
      ].join('\n'),
    );
  }

  for (const rnf of spec.nonFunctional) {
    write(
      `${spec.dir}/Requisitos/${rnf.note}.md`,
      [
        frontmatter({ tags: ['rnf'], spec: spec.id }),
        `# ${spec.id} ${rnf.id} — ${rnf.title}`,
        '',
        `Especificación: ${specLink}`,
        '',
        linkify(rnf.body, n),
        '',
        '## Tareas que lo cubren',
        '',
        list(spec.tasks.filter((task) => task.rnfs.includes(rnf.id)).map((task) => `${taskIcon(task)} ${wl(task.note, task.id)}`)),
      ].join('\n'),
    );
  }

  for (const decision of spec.decisions) {
    write(
      `${spec.dir}/Decisiones/${decision.note}.md`,
      [
        frontmatter({ tags: ['decision'], spec: spec.id }),
        `# ${spec.id} ${decision.id} — ${decision.title}`,
        '',
        `Especificación: ${specLink} · Requisitos: ${idLinks(n, [...decision.rfs, ...decision.rnfs]).join(', ') || '—'}`,
        decision.principles.length ? `\nPrincipios: ${decision.principles.map((number) => wl(principleByNumber[number]?.note ?? number)).join(', ')}` : '',
        '',
        '## Decisión',
        '',
        linkify(decision.decision, n),
        '',
        '## Por qué',
        '',
        linkify(decision.why, n),
        '',
        '## Alternativa descartada',
        '',
        linkify(decision.alternative, n),
        '',
        '## Tareas que la aplican',
        '',
        list(spec.tasks.filter((task) => task.decisions.includes(decision.id)).map((task) => `${taskIcon(task)} ${wl(task.note, task.id)}`)),
      ].join('\n'),
    );
  }

  for (const task of spec.tasks) {
    const prs = prsByTask[`${n} ${task.id}`] ?? [];
    write(
      `${spec.dir}/Tareas/${task.note}.md`,
      [
        frontmatter({ tags: ['tarea', task.done ? 'tarea/hecha' : 'tarea/pendiente'], spec: spec.id, hecha: task.done, etiquetas: task.labels || undefined }),
        `# ${spec.id} ${task.id} ${task.labels}`,
        '',
        `${taskIcon(task)} ${task.done ? 'Hecha' : 'Pendiente'} · ${specLink} · ${task.phase}${task.story ? ` · ${idLink(n, task.story) ?? task.story}` : ''}`,
        '',
        linkify(task.text, n),
        '',
        task.dependsOn.length ? `**Depende de:** ${idLinks(n, task.dependsOn).join(', ')}\n` : '',
        prs.length ? `**PR:** ${prs.map((entry) => wl(entry.note)).join(', ')}\n` : '',
      ].join('\n'),
    );
  }
}

// Principios
for (const principle of principles) {
  write(
    `Generado/Principios/${principle.note}.md`,
    [
      frontmatter({ tags: ['principio'] }),
      `# Principio ${principle.number} — ${principle.title}`,
      '',
      `De la ${wl('Constitución', 'constitución')}.`,
      '',
      `> ${principle.text}`,
      '',
      '## Especificaciones que lo controlan',
      '',
      list(principle.specs.map((spec) => wl(spec.note))),
      '',
      '## Decisiones que lo citan',
      '',
      list(principle.decisions.map((decision) => wl(decision.note))),
    ].join('\n'),
  );
}

// Archivos de código
for (const path of sourceFiles) {
  const meta = fileMeta[path];
  const routes = apiRoutes.filter((route) => route.file === path);
  const pages = webRoutes.filter((route) => route.file === path);
  const usedTables = tables.filter((table) => table.files.includes(path));
  const tasks = unique([...(tasksByFile[path] ?? []), ...(tasksByE2e[path] ?? [])]);
  write(
    `Generado/Código/${meta.app}/${meta.note}.md`,
    [
      frontmatter({ tags: ['archivo', `archivo/${meta.app}`], ruta: path }),
      `# ${path.split('/').pop()}`,
      '',
      `${code(path)} · [GitHub](${blobUrl(path)}) · ${wl(groupNote(path))}`,
      '',
      routes.length ? `## Rutas que declara\n\n${list(routes.map((route) => wl(route.note)))}\n` : '',
      pages.length ? `## Pantallas\n\n${list(pages.map((route) => wl(route.note)))}\n` : '',
      usedTables.length ? `## Tablas que usa\n\n${list(usedTables.map((table) => wl(table.note)))}\n` : '',
      '## Importa',
      '',
      list(imports[path].map((target) => wl(fileNote(target)))),
      '',
      '## Lo importan',
      '',
      list((importedBy[path] ?? []).map((source) => wl(fileNote(source)))),
      '',
      '## Tareas y decisiones que lo mencionan',
      '',
      list([...tasks.map((task) => `${taskIcon(task)} ${wl(task.note)}`), ...(decisionsByFile[path] ?? []).map((decision) => wl(decision.note))]),
    ].join('\n'),
  );
}

// Rutas de la API
for (const route of apiRoutes) {
  write(
    `Generado/Rutas/${route.note}.md`,
    [
      frontmatter({ tags: ['ruta-api'], metodo: route.method, ruta: route.path }),
      `# ${route.method} ${route.path}`,
      '',
      `Módulo: ${wl(moduleNote(route.module), route.module)} · Declarada en ${wl(fileNote(route.file))}`,
      '',
      '## Especificaciones que la definen',
      '',
      list(route.specs.map((spec) => wl(spec.note))),
    ].join('\n'),
  );
}

// Pantallas de la interfaz
for (const route of webRoutes) {
  write(
    `Generado/Pantallas/${route.note}.md`,
    [
      frontmatter({ tags: ['pantalla'], ruta: route.path, roles: route.roles }),
      `# Pantalla ${route.path}`,
      '',
      `Componente ${code(route.page)}${route.file ? ` en ${wl(fileNote(route.file))}` : ''} · Módulo: ${route.module ? wl(moduleNote(route.module), route.module) : '—'}`,
      '',
      `- **Roles:** ${route.roles}`,
      `- **Enlace en la pantalla de inicio:** ${route.homeLink || '—'}`,
    ].join('\n'),
  );
}

// Tablas
for (const table of tables) {
  const referencedBy = tables.filter((other) => other.references.some((reference) => reference.table === table.name));
  write(
    `Generado/Tablas/${table.note}.md`,
    [
      frontmatter({ tags: ['tabla'] }),
      `# Tabla ${table.name}`,
      '',
      `Migración [${table.migration.split('/').pop()}](${blobUrl(table.migration)}) · ${wl('Base de datos')}`,
      '',
      '## Columnas',
      '',
      list(table.columns.map(code)),
      '',
      '## Relaciones',
      '',
      list([
        ...table.references.map((reference) => `${code(reference.column)} → ${wl(`Tabla ${reference.table}`)}`),
        ...referencedBy.map((other) => `${wl(other.note)} la referencia`),
      ]),
      '',
      '## Archivos que la usan',
      '',
      list(table.files.map((file) => wl(fileNote(file)))),
    ].join('\n'),
  );
}

// PR
for (const entry of history.filter((item) => item.note)) {
  const spec = specByNumber[entry.specNumber];
  write(
    `Generado/PRs/${entry.note}.md`,
    [
      frontmatter({ tags: ['pr', `pr/${entry.type}`], fecha: entry.date, spec: spec?.id }),
      `# ${entry.note} — ${entry.title}`,
      '',
      `${entry.date} · [GitHub](${prUrl(entry.pr)}) · commit ${code(entry.hash)} · ${wl('Historial de PRs')}`,
      '',
      spec ? `Especificación: ${wl(spec.note)}\n` : '',
      entry.tasks.length ? `## Tareas\n\n${list(idLinks(entry.specNumber, entry.tasks))}\n` : '',
    ].join('\n'),
  );
}

// Módulos
for (const module of moduleNames) {
  const moduleFiles = sourceFiles.filter((path) => fileMeta[path].module === module);
  const contract = `packages/contracts/src/${module}.ts`;
  const relatedSpecs = specs.filter((spec) => spec.modules.includes(module));
  const moduleTables = tables.filter((table) => table.files.some((file) => fileMeta[file].module === module));
  write(
    `Generado/Módulos/${moduleNote(module)}.md`,
    [
      frontmatter({ tags: ['modulo', `modulo/${module}`] }),
      `# ${moduleNote(module)}`,
      '',
      generatedNotice,
      moduleTitles[module] ? `> [!abstract] Qué hace\n> ${moduleTitles[module].summary}\n` : '',
      '## Especificaciones',
      '',
      list(relatedSpecs.map((spec) => `${wl(spec.note)}${spec.primaryModule === module ? ' — principal' : ''}`)),
      '',
      '## Contrato',
      '',
      sourceSet.has(contract) ? `- ${wl(fileNote(contract))} — ver ${wl('Contratos')}` : '_Sin archivo de contrato propio._',
      '',
      '## Rutas de la API',
      '',
      list(apiRoutes.filter((route) => route.module === module).map((route) => wl(route.note))),
      '',
      '## Pantallas',
      '',
      list(webRoutes.filter((route) => route.module === module).map((route) => wl(route.note))),
      '',
      '## Tablas',
      '',
      list(moduleTables.map((table) => wl(table.note))),
      '',
      `## API — [carpeta](${treeUrl(`apps/api/src/modules/${module}`)})`,
      '',
      list(moduleFiles.filter((path) => fileMeta[path].app === 'api').map((path) => wl(fileNote(path)))),
      '',
      `## Interfaz — [carpeta](${treeUrl(`apps/web/src/modules/${module}`)})`,
      '',
      list(moduleFiles.filter((path) => fileMeta[path].app === 'web').map((path) => wl(fileNote(path)))),
    ].join('\n'),
  );
}

// Grupos de código que no son de un módulo
for (const [group, description] of [
  ['Código compartido de la API', 'Archivos de `apps/api` fuera de los módulos: arranque, base de datos, reloj, calendario y servidor de pruebas.'],
  ['Código compartido de la interfaz', 'Archivos de `apps/web` fuera de los módulos: arranque, rutas y componentes compartidos.'],
  ['Pruebas de punta a punta', 'Pruebas de Playwright en `e2e/`, una por historia.'],
]) {
  write(
    `Generado/Código/${group}.md`,
    [
      frontmatter({ tags: ['modulo'] }),
      `# ${group}`,
      '',
      generatedNotice,
      description,
      '',
      list(sourceFiles.filter((path) => groupNote(path) === group).map((path) => wl(fileNote(path)))),
    ].join('\n'),
  );
}

const erLines = ['```mermaid', 'erDiagram'];
for (const table of tables) for (const reference of table.references) erLines.push(`  ${reference.table} ||--o{ ${table.name} : "${reference.column}"`);
for (const table of tables)
  if (table.references.length === 0 && !tables.some((other) => other.references.some((reference) => reference.table === table.name)))
    erLines.push(`  ${table.name} {}`);
erLines.push('```');
write(
  'Generado/Base de datos.md',
  [
    frontmatter({ tags: ['tabla'] }),
    '# Base de datos',
    '',
    generatedNotice,
    `PostgreSQL (Neon). Solo \`apps/api/src/shared/database\` habla con la base; ver ${wl('Arquitectura')} §6.4.`,
    '',
    erLines.join('\n'),
    '',
    table(
      ['Tabla', 'Migración', 'Referencia a', 'Archivos que la usan'],
      tables.map((item) => [
        wl(item.note),
        `[${item.migration.split('/').pop()}](${blobUrl(item.migration)})`,
        item.references.map((reference) => wl(`Tabla ${reference.table}`)).join(', ') || '—',
        item.files.length,
      ]),
    ),
  ].join('\n'),
);

write(
  'Generado/Rutas.md',
  [
    frontmatter({ tags: ['ruta-api'] }),
    '# Rutas',
    '',
    generatedNotice,
    `Todas las rutas de la API van bajo \`/api\` y se sirven desde el mismo origen que la interfaz (${wl('Arquitectura')} §6.1).`,
    '',
    '## API',
    '',
    table(
      ['Ruta', 'Módulo', 'Especificaciones'],
      apiRoutes.map((route) => [wl(route.note), wl(moduleNote(route.module), route.module), route.specs.map((spec) => wl(spec.note, spec.id)).join(', ') || '—']),
    ),
    '## Interfaz',
    '',
    table(
      ['Pantalla', 'Componente', 'Módulo', 'Roles', 'Enlace de inicio'],
      webRoutes.map((route) => [
        wl(route.note),
        route.file ? wl(fileNote(route.file), route.page) : route.page,
        route.module ? wl(moduleNote(route.module), route.module) : '—',
        route.roles,
        route.homeLink || '—',
      ]),
    ),
  ].join('\n'),
);

const contractFiles = sourceFiles.filter((path) => fileMeta[path].app === 'contracts');
write(
  'Generado/Contratos.md',
  [
    frontmatter({ tags: ['modulo'] }),
    '# Contratos',
    '',
    generatedNotice,
    `Paquete \`@kofi/contracts\`: esquemas de Zod y sus tipos. La API los usa para validar y la interfaz para tipar (${wl('Arquitectura')} §4.4).`,
    '',
    table(
      ['Archivo', 'Módulo', 'Lo importan'],
      contractFiles.map((path) => {
        const name = path.split('/').pop().replace('.ts', '');
        return [wl(fileNote(path), `${name}.ts`), moduleNames.includes(name) ? wl(moduleNote(name), name) : 'compartido', (importedBy[path] ?? []).length];
      }),
    ),
  ].join('\n'),
);

write(
  'Generado/Historial de PRs.md',
  [
    frontmatter({ tags: ['pr'] }),
    '# Historial de PRs',
    '',
    generatedNotice,
    `Commits de \`${branch}\`: cada uno es un PR fusionado con squash.`,
    '',
    table(
      ['Fecha', 'PR', 'Tipo', 'Título', 'Especificación'],
      history.map((entry) => [
        entry.date,
        entry.note ? wl(entry.note) : entry.hash,
        entry.type,
        entry.title.replace(/ \[SPEC-\d{3}\]/, ''),
        entry.specNumber && specByNumber[entry.specNumber] ? wl(specByNumber[entry.specNumber].note, `SPEC-${entry.specNumber}`) : '—',
      ]),
    ),
  ].join('\n'),
);

// Documentos: copia de docs/ y de AGENTS.md con los enlaces adaptados a la bóveda
const documents = [
  { path: 'docs/constitution.md', note: 'Constitución', tags: ['documento', 'constitucion'] },
  { path: 'docs/business-rules.md', note: 'Reglas de negocio', tags: ['documento', 'negocio'] },
  { path: 'docs/architecture.md', note: 'Arquitectura', tags: ['documento', 'arquitectura'] },
  { path: 'AGENTS.md', note: 'Reglas de trabajo (AGENTS)', tags: ['documento', 'flujo'] },
].filter((document) => exists(document.path));
const documentByFile = Object.fromEntries(documents.map((document) => [document.path.split('/').pop(), document.note]));

const adaptLinks = (markdown, sourcePath) => {
  const sourceDir = sourcePath.includes('/') ? sourcePath.slice(0, sourcePath.lastIndexOf('/')) : '';
  const linked = markdown
    .replace(/\[([^\]]+)\]\((?!https?:|#)([^)]+)\)/g, (_, text, target) => {
      const [path, anchor] = target.split('#');
      const spec = path.match(/(?:^|\/)(\d{3})-[^/]+\/(spec|plan|tasks)\.md$/);
      const label = text.replace(/`/g, '');
      if (spec && specByNumber[spec[1]]) return wl(specByNumber[spec[1]].note, label);
      const fileName = path.split('/').pop();
      if (documentByFile[fileName]) return wl(documentByFile[fileName], label);
      return `[${text}](${blobUrl(posix.normalize(posix.join(sourceDir, path)))}${anchor ? `#${anchor}` : ''})`;
    })
    .replace(/`specs\/(\d{3})-[^`/]+\/?`/g, (match, number) => (specByNumber[number] ? wl(specByNumber[number].note) : match));
  // Las menciones «SPEC-NNN (D-4)», archivos y rutas se enlazan fuera de los bloques de código.
  return linked
    .split(/(```[\s\S]*?```|\[\[[^\]]*\]\])/)
    .map((part, index) => (index % 2 === 1 ? part : linkify(part, null)))
    .join('')
    .replace(/^(\d)\. \*\*(.+?)\.\*\*/gm, (match, number, title) =>
      sourcePath === 'docs/constitution.md' && principleByNumber[number] ? `${number}. **${wl(principleByNumber[number].note, title)}.**` : match,
    );
};
for (const document of documents) {
  write(
    `Generado/Documentos/${document.note}.md`,
    [frontmatter({ tags: document.tags, fuente: document.path }), generatedNotice, adaptLinks(read(document.path), document.path)].join('\n'),
  );
}

// Nota central
const dependencyGraph = ['```mermaid', 'graph LR'];
for (const spec of specs) dependencyGraph.push(`  S${spec.number}["${spec.id}<br/>${spec.title}"]`);
for (const spec of specs) for (const number of spec.dependsOn) dependencyGraph.push(`  S${number} --> S${spec.number}`);
dependencyGraph.push('```');

const sum = (pick) => specs.reduce((total, spec) => total + pick(spec).length, 0);
const counts = [
  ['Especificaciones', specs.length, 'especificacion'],
  ['Historias de usuario', sum((spec) => spec.stories), 'historia'],
  ['Requisitos funcionales', sum((spec) => spec.requirements), 'requisito'],
  ['Requisitos no funcionales', sum((spec) => spec.nonFunctional), 'rnf'],
  ['Decisiones técnicas', sum((spec) => spec.decisions), 'decision'],
  ['Tareas', sum((spec) => spec.tasks), 'tarea'],
  ['Archivos de código', sourceFiles.length, 'archivo'],
  ['Rutas de la API', apiRoutes.length, 'ruta-api'],
  ['Pantallas', webRoutes.length, 'pantalla'],
  ['Tablas', tables.length, 'tabla'],
  ['Principios', principles.length, 'principio'],
  ['Pull requests', history.filter((entry) => entry.note).length, 'pr'],
];

write(
  `${hubName}.md`,
  [
    frontmatter({ tags: ['mapa'] }),
    '# Kofi POS — mapa del proyecto',
    '',
    generatedNotice,
    '> [!summary] Qué es',
    `> ${businessRules.match(/## Qué es Kofi\n\n(.+)/)?.[1] ?? ''}`,
    '',
    `Repositorio: [${remote.replace('https://github.com/', '')}](${remote}) · rama \`${branch}\` · commit \`${commit}\` del ${commitDate}.`,
    '',
    '## Documentos base',
    '',
    list(documents.map((document) => `${wl(document.note)} — [${document.path}](${blobUrl(document.path)})`)),
    '',
    `Principios: ${principles.map((principle) => wl(principle.note, principle.title)).join(' · ')}`,
    '',
    '## Especificaciones',
    '',
    table(
      ['Especificación', 'Estado', 'Tareas', 'Avance', 'Depende de', 'PRs'],
      specs.map((spec) => [
        wl(spec.note),
        spec.status,
        `${spec.done}/${spec.total}`,
        statusLabel(spec),
        spec.dependsOn.map((number) => `SPEC-${number}`).join(', ') || '—',
        spec.pullRequests.length,
      ]),
    ),
    '### Dependencias entre especificaciones',
    '',
    dependencyGraph.join('\n'),
    '',
    '## Código',
    '',
    table(
      ['Grupo', 'Qué hace', 'Archivos', 'Rutas API', 'Pantallas'],
      [
        ...moduleNames.map((module) => [
          wl(moduleNote(module)),
          moduleTitles[module]?.summary ?? '—',
          sourceFiles.filter((path) => fileMeta[path].module === module).length,
          apiRoutes.filter((route) => route.module === module).length,
          webRoutes.filter((route) => route.module === module).length,
        ]),
        ...['Contratos', 'Código compartido de la API', 'Código compartido de la interfaz', 'Pruebas de punta a punta'].map((group) => [
          wl(group),
          '—',
          sourceFiles.filter((path) => groupNote(path) === group).length,
          '—',
          '—',
        ]),
      ],
    ),
    '## Vistas transversales',
    '',
    list([
      `${wl('Rutas')} — ${apiRoutes.length} rutas de la API y ${webRoutes.length} pantallas.`,
      `${wl('Base de datos')} — ${tables.length} tablas en ${migrations.length} migraciones.`,
      `${wl('Contratos')} — ${contractFiles.length} archivos en \`packages/contracts\`.`,
      `${wl('Historial de PRs')} — ${history.length} commits en \`${branch}\`.`,
    ]),
    '',
    '## Nodos del grafo',
    '',
    `En el grafo (Ctrl+G), filtra por etiqueta para ver una sola capa, por ejemplo \`tag:#requisito OR tag:#decision\`, o quita las tareas con \`-tag:#tarea\`.`,
    '',
    table(['Tipo', 'Notas', 'Etiqueta'], counts.map(([label, count, tag]) => [label, count, `#${tag}`])),
    '## Notas propias',
    '',
    'Escribe en `Notas/`: el generador no las toca. Enlaza desde ahí a cualquier nota de este mapa.',
  ].join('\n'),
);

console.log(
  `Mapa generado desde ${ref} (${commit}): ${written.size} notas — ${counts.map(([label, count]) => `${count} ${label.toLowerCase()}`).join(', ')}.`,
);
