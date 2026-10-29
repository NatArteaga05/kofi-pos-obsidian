// Genera el mapa de Kofi POS en esta bóveda a partir del repositorio real.
//
// Lee el repositorio con git (por defecto, la rama origin/develop), así que no depende de la rama
// que tenga abierta la copia local. Reescribe solo la carpeta «Generado/» y la nota del mapa; las
// notas propias van en «Notas/» y nunca se tocan.
//
// Uso: node scripts/generar-mapa.mjs [--repo <ruta>] [--ref <rama>] [--fetch]

import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
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
const read = (path) => git('show', `${ref}:${path}`).replace(/\r\n/g, '\n');
const exists = (path) => files.includes(path);
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
const plainLink = (name, alias) => (alias ? `[[${name}|${alias}]]` : `[[${name}]]`);
const code = (text) => `\`${text}\``;
const sectionOf = (markdown, heading) => {
  const start = markdown.search(new RegExp(`^${heading}`, 'm'));
  if (start === -1) return '';
  const rest = markdown.slice(start);
  const level = rest.match(/^#+/)[0].length;
  const next = rest.slice(1).search(new RegExp(`^#{1,${level}} `, 'm'));
  return next === -1 ? rest : rest.slice(0, next + 1);
};

const write = (relativePath, content) => {
  const target = join(vault, relativePath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content.replace(/\n{3,}/g, '\n\n'), 'utf8');
};

// ---------------------------------------------------------------------------------------------
// Especificaciones

const specFolders = [...new Set(under('specs/').map((file) => file.split('/')[1]))]
  .filter((folder) => /^\d{3}-/.test(folder))
  .sort();

const moduleNames = [...new Set(under('apps/api/src/modules/').map((file) => file.split('/')[4]))].sort();

const specs = specFolders.map((folder) => {
  const base = `specs/${folder}`;
  const spec = exists(`${base}/spec.md`) ? read(`${base}/spec.md`) : '';
  const plan = exists(`${base}/plan.md`) ? read(`${base}/plan.md`) : '';
  const tasks = exists(`${base}/tasks.md`) ? read(`${base}/tasks.md`) : '';
  const number = folder.slice(0, 3);
  const title = spec.match(/^# SPEC-\d+ — (.+)$/m)?.[1]?.trim() ?? folder;
  const status = spec.match(/^Estado: ([^·\n]+)/m)?.[1]?.trim() ?? 'sin estado';
  const date = spec.match(/Fecha: (\d{4}-\d{2}-\d{2})/)?.[1] ?? '';
  const header = spec.slice(0, Math.max(0, spec.search(/^## 1\./m)));
  const dependsOn = [...new Set([...header.matchAll(/\.\.\/(\d{3})-[^/]+\/spec\.md/g)].map((m) => m[1]))];
  const objective = (spec.match(/^Objetivo: (.+)$/m)?.[1] ?? '').replace(/^./, (letter) => letter.toUpperCase());

  const stories = [...spec.matchAll(/^### (HU-\d+) — (.+?) \((P\d+)\)\n\n(.+)$/gm)].map((m) => ({
    id: m[1],
    title: m[2],
    priority: m[3],
    statement: m[4].replace(/\*\*/g, ''),
  }));

  let currentStory = '';
  const requirements = [];
  for (const line of spec.split('\n')) {
    const story = line.match(/^### (HU-\d+)/);
    if (story) currentStory = story[1];
    const rf = line.match(/^\*\*(RF-\d+)\. (.+?)\*\*(?: \((HU-[\d, -]+)\))?/);
    if (rf) requirements.push({ id: rf[1], title: rf[2].replace(/\.$/, ''), story: rf[3] ?? currentStory });
  }
  const nonFunctional = [...spec.matchAll(/^- \*\*(RNF-\d+)\. (.+?)\*\*/gm)].map((m) => ({
    id: m[1],
    title: m[2].replace(/\.$/, ''),
  }));

  const decisions = [...plan.matchAll(/^\| (D-\d+) \| \*\*(.+?)\*\*/gm)].map((m) => ({
    id: m[1],
    title: m[2].replace(/[:.]$/, '').replace(/`/g, ''),
  }));

  const phases = [];
  let phase = null;
  for (const line of tasks.split('\n')) {
    const heading = line.match(/^## (Fase .+)$/);
    if (heading) {
      phase = { name: heading[1], done: 0, total: 0, pending: [] };
      phases.push(phase);
      continue;
    }
    if (/^## /.test(line)) phase = null;
    const task = line.match(/^\s*- \[( |x)\] \*\*(T\d+)([^*]*)\*\*\s*(.*)$/);
    if (task && phase) {
      phase.total += 1;
      if (task[1] === 'x') phase.done += 1;
      else phase.pending.push(`${task[2]}${task[3]} — ${task[4].split(' (plan')[0]}`);
    }
  }
  const done = phases.reduce((sum, item) => sum + item.done, 0);
  const total = phases.reduce((sum, item) => sum + item.total, 0);

  const docText = `${plan}\n${tasks}`;
  const moduleMentions = Object.fromEntries(
    moduleNames.map((name) => [name, (docText.match(new RegExp(`modules/${name}/`, 'g')) ?? []).length]),
  );
  const modules = moduleNames.filter((name) => moduleMentions[name] > 0).sort((a, b) => moduleMentions[b] - moduleMentions[a]);

  const e2e = [...new Set([...tasks.matchAll(/e2e\/[A-Za-z0-9-]+\.spec\.ts/g)].map((m) => m[0]))].filter(exists);
  const extraFiles = under(`${base}/`).filter((file) => !/\/(spec|plan|tasks)\.md$/.test(file));

  return {
    folder,
    number,
    id: `SPEC-${number}`,
    title,
    note: `SPEC-${number} ${title}`,
    status,
    date,
    objective,
    dependsOn,
    stories,
    requirements,
    nonFunctional,
    decisions,
    phases,
    done,
    total,
    modules,
    primaryModule: modules[0],
    e2e,
    extraFiles,
    pullRequests: [],
  };
});

const specByNumber = Object.fromEntries(specs.map((spec) => [spec.number, spec]));

// Historial de develop: cada commit es un PR fusionado con squash.
const history = git('log', ref, '--format=%h%x09%ad%x09%s', '--date=short')
  .split('\n')
  .filter(Boolean)
  .map((line) => {
    const [hash, date, subject] = line.split('\t');
    const pr = subject.match(/\(#(\d+)\)$/)?.[1] ?? subject.match(/pull request #(\d+)/)?.[1];
    const specNumber = subject.match(/\[SPEC-(\d{3})\]/)?.[1];
    const type = subject.match(/^(\w+)(?:\(([^)]+)\))?:/);
    return { hash, date, subject, pr, specNumber, type: type?.[1] ?? '', scope: type?.[2] ?? '' };
  });
for (const entry of history) if (entry.specNumber && specByNumber[entry.specNumber]) specByNumber[entry.specNumber].pullRequests.push(entry);

// ---------------------------------------------------------------------------------------------
// Módulos, rutas y base de datos

const businessRules = read('docs/business-rules.md');
const moduleTitles = {};
for (const row of businessRules.matchAll(/^\| \d+ \| ([^|]+) \| ([^|]+) \| `specs\/(\d{3})-/gm)) {
  const spec = specByNumber[row[3]];
  if (spec?.primaryModule) moduleTitles[spec.primaryModule] = { title: row[1].trim(), summary: row[2].trim() };
}
const moduleNote = (name) => `Módulo ${moduleTitles[name]?.title ?? name} (${name})`;

const apiRoutes = [];
for (const file of under('apps/api/src/modules/').filter((path) => /\.routes\.ts$/.test(path))) {
  const module = file.split('/')[4];
  const source = read(file);
  for (const match of source.matchAll(/app\.(get|post|put|patch|delete)(?:<[^>]*>)?\(\s*(['`])(\/api[^'`]*)\2/g)) {
    let path = match[3];
    if (path.includes('${action}')) {
      // Rutas declaradas en un bucle `for (const [action, …] of [['deactivate', …], …])`.
      const loop = source.slice(source.lastIndexOf('for (const', match.index), match.index);
      const actions = [...loop.matchAll(/\['(\w+)',/g)].map((m) => m[1]);
      for (const action of actions.length ? actions : ['{acción}']) apiRoutes.push({ method: match[1].toUpperCase(), path: path.replace('${action}', action), module, file });
      continue;
    }
    apiRoutes.push({ method: match[1].toUpperCase(), path, module, file });
  }
}

const routesSource = read('apps/web/src/routes.tsx');
const componentModule = {};
for (const imported of routesSource.matchAll(/import \{([^}]+)\} from '\.\/modules\/([a-z-]+)\//g))
  for (const name of imported[1].split(',').map((part) => part.trim()).filter(Boolean)) componentModule[name] = imported[2];
// Constantes de roles del contrato (por ejemplo, HISTORY_ROLES = ['owner']).
const roleConstants = {};
for (const file of under('packages/contracts/src/').filter((path) => !path.endsWith('.test.ts')))
  for (const m of read(file).matchAll(/export const (\w+_ROLES) = \[([^\]]*)\]/g)) roleConstants[m[1]] = m[2];
const roleList = (raw) => (roleConstants[raw] ?? raw).replace(/[[\]'"]/g, '').trim();

// Cada definición va desde su `path:` hasta el siguiente o el cierre de la lista.
const webRoutes = [...routesSource.matchAll(/path: '([^']+)'([\s\S]*?)(?=path: '|\];)/g)].map((m) => {
  const page = m[2].match(/element: <(\w+)/)?.[1] ?? '';
  const isPublic = routesSource.lastIndexOf('publicRoutes', m.index) > routesSource.lastIndexOf('protectedRouteDefinitions', m.index);
  return {
    path: m[1],
    page,
    module: componentModule[page] ?? '',
    roles: isPublic ? 'pública' : roleList(m[2].match(/roles: (\[[^\]]*\]|\w+)/)?.[1] ?? 'owner, cashier'),
    homeLink: m[2].match(/homeLink: '([^']+)'/)?.[1] ?? '',
  };
});

const migrations = under('apps/api/src/shared/database/migrations/').filter((file) => file.endsWith('.sql')).sort();
const tables = [];
for (const file of migrations) {
  const sql = read(file);
  for (const match of sql.matchAll(/CREATE TABLE (\w+) \(([\s\S]*?)\n\);/g)) {
    const references = [...match[2].matchAll(/^\s*(\w+)[^\n]*REFERENCES (\w+) \((\w+)\)/gm)].map((m) => ({ column: m[1], table: m[2], target: m[3] }));
    tables.push({ name: match[1], migration: file.split('/').pop(), references, usedBy: [] });
  }
}
const apiSourceFiles = (module) =>
  under(`apps/api/src/modules/${module}/`).filter((file) => file.endsWith('.ts') && !/\.test\.ts$/.test(file));
for (const module of moduleNames) {
  const source = apiSourceFiles(module).map(read).join('\n');
  for (const table of tables)
    if (new RegExp(`\\b(FROM|INTO|UPDATE|JOIN)\\s+${table.name}\\b`, 'i').test(source)) table.usedBy.push(module);
}

const contractFiles = under('packages/contracts/src/').filter((file) => file.endsWith('.ts') && !file.endsWith('.test.ts'));

// ---------------------------------------------------------------------------------------------
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
  const linkTarget = (target) => {
    const [path, anchor] = target.split('#');
    const spec = path.match(/(?:^|\/)(\d{3})-[^/]+\/(spec|plan|tasks)\.md$/);
    if (spec && specByNumber[spec[1]]) return { note: specByNumber[spec[1]].note };
    const fileName = path.split('/').pop();
    if (documentByFile[fileName]) return { note: documentByFile[fileName] };
    const normalized = join(sourceDir, path).replace(/\\/g, '/');
    return { url: blobUrl(normalized) + (anchor ? `#${anchor}` : '') };
  };
  const linked = markdown
    .replace(/\[([^\]]+)\]\((?!https?:|#)([^)]+)\)/g, (_, text, target) => {
      const resolved = linkTarget(target);
      return resolved.note ? plainLink(resolved.note, text.replace(/`/g, '')) : `[${text}](${resolved.url})`;
    })
    .replace(/`specs\/(\d{3})-[^`/]+\/?`/g, (match, number) => (specByNumber[number] ? plainLink(specByNumber[number].note) : match));
  // Las menciones «SPEC-NNN» se enlazan solo fuera del código y de los enlaces ya hechos.
  return linked
    .split(/(```[\s\S]*?```|`[^`\n]*`|\[\[[^\]]*\]\])/)
    .map((part, index) =>
      index % 2 === 1
        ? part
        : part.replace(/\bSPEC-(\d{3})\b/g, (match, number) => (specByNumber[number] ? plainLink(specByNumber[number].note, match) : match)),
    )
    .join('');
};

// ---------------------------------------------------------------------------------------------
// Escritura

rmSync(generatedDir, { recursive: true, force: true });

const statusLabel = (spec) => (spec.total > 0 && spec.done === spec.total ? 'completa' : spec.total > 0 ? 'en curso' : 'sin tareas');
const progress = (spec) => `${spec.done}/${spec.total}`;
const usedBy = (spec) => specs.filter((other) => other.dependsOn.includes(spec.number));

for (const spec of specs) {
  const lines = [
    frontmatter({
      tags: ['especificacion', ...spec.modules.map((name) => `modulo/${name}`)],
      spec: spec.id,
      estado: spec.status,
      fecha: spec.date,
      tareas: progress(spec),
      avance: statusLabel(spec),
    }),
    `# ${spec.id} — ${spec.title}`,
    '',
    generatedNotice,
    `**Estado:** ${spec.status} · **Fecha:** ${spec.date} · **Tareas:** ${progress(spec)} (${statusLabel(spec)})`,
    '',
    spec.objective ? `> [!abstract] Objetivo\n> ${spec.objective}\n` : '',
    '## Relaciones',
    '',
    `- **Depende de:** ${spec.dependsOn.map((number) => plainLink(specByNumber[number]?.note ?? `SPEC-${number}`)).join(', ') || '—'}`,
    `- **La usan:** ${usedBy(spec).map((other) => plainLink(other.note)).join(', ') || '—'}`,
    `- **Módulos del código:** ${spec.modules.map((name) => plainLink(moduleNote(name), name)).join(', ') || '—'}`,
    `- **Reglas globales:** ${plainLink('Reglas de negocio')} · ${plainLink('Arquitectura')} · ${plainLink('Constitución')}`,
    '',
    '## Historias de usuario',
    '',
    ...spec.stories.map((story) => `- **${story.id} — ${story.title}** (${story.priority}): ${story.statement}`),
    '',
    '## Requisitos funcionales',
    '',
    table(['RF', 'Requisito', 'Historia'], spec.requirements.map((rf) => [rf.id, rf.title, rf.story])),
    spec.nonFunctional.length ? '## Requisitos no funcionales\n' : '',
    spec.nonFunctional.length ? table(['RNF', 'Requisito'], spec.nonFunctional.map((rnf) => [rnf.id, rnf.title])) : '',
    '## Decisiones técnicas',
    '',
    table(['#', 'Decisión'], spec.decisions.map((decision) => [decision.id, decision.title])),
    '## Tareas por fase',
    '',
    table(
      ['Fase', 'Hechas', 'Estado'],
      spec.phases.map((item) => [item.name, `${item.done}/${item.total}`, item.total === 0 ? 'sin tareas' : item.done === item.total ? '✅' : '⏳']),
    ),
    ...(spec.phases.some((item) => item.pending.length)
      ? ['### Pendientes', '', ...spec.phases.flatMap((item) => item.pending.map((task) => `- [ ] ${task}`)), '']
      : []),
    '## Pull requests',
    '',
    table(
      ['Fecha', 'PR', 'Título'],
      spec.pullRequests.map((entry) => [entry.date, entry.pr ? `[#${entry.pr}](${prUrl(entry.pr)})` : entry.hash, entry.subject.replace(/ \(#\d+\)$/, '')]),
    ),
    '## Pruebas de punta a punta',
    '',
    ...(spec.e2e.length ? spec.e2e.map((file) => `- [${file}](${blobUrl(file)})`) : ['_Sin pruebas E2E propias._']),
    '',
    '## Archivos',
    '',
    ...['spec.md', 'plan.md', 'tasks.md']
      .filter((name) => exists(`specs/${spec.folder}/${name}`))
      .map((name) => `- [${name}](${blobUrl(`specs/${spec.folder}/${name}`)})`),
    ...spec.extraFiles.map((file) => `- [${file.replace(`specs/${spec.folder}/`, '')}](${blobUrl(file)})`),
    '',
  ];
  write(`Generado/Especificaciones/${spec.note}.md`, lines.join('\n'));
}

for (const module of moduleNames) {
  const apiFiles = under(`apps/api/src/modules/${module}/`);
  const webFiles = under(`apps/web/src/modules/${module}/`);
  const apiSource = apiFiles.filter((file) => !/\.test\.ts$/.test(file));
  const webSource = webFiles.filter((file) => !/\.test\.tsx?$/.test(file));
  const contract = `packages/contracts/src/${module}.ts`;
  const relatedSpecs = specs.filter((spec) => spec.modules.includes(module));
  const webFolders = [...new Set(webSource.map((file) => file.replace(`apps/web/src/modules/${module}/`, '').split('/')))]
    .reduce((groups, parts) => {
      const folder = parts.length > 1 ? `${parts[0]}/` : '(raíz)';
      (groups[folder] ??= []).push(parts.at(-1));
      return groups;
    }, {});
  const moduleTables = tables.filter((table) => table.usedBy.includes(module));
  const lines = [
    frontmatter({ tags: ['modulo', `modulo/${module}`] }),
    `# ${moduleNote(module)}`,
    '',
    generatedNotice,
    moduleTitles[module] ? `> [!abstract] Qué hace\n> ${moduleTitles[module].summary}\n` : '',
    '## Especificaciones',
    '',
    ...relatedSpecs.map((spec) => `- ${plainLink(spec.note)}${spec.primaryModule === module ? ' — principal' : ''}`),
    '',
    '## Contrato',
    '',
    exists(contract) ? `- [${contract}](${blobUrl(contract)}) — ver ${plainLink('Contratos')}` : '_Sin archivo de contrato propio._',
    '',
    '## API',
    '',
    `Carpeta: [apps/api/src/modules/${module}](${treeUrl(`apps/api/src/modules/${module}`)}) · ${apiSource.length} archivos de código y ${apiFiles.length - apiSource.length} de pruebas.`,
    '',
    table(
      ['Método', 'Ruta'],
      apiRoutes.filter((route) => route.module === module).map((route) => [route.method, code(route.path)]),
    ),
    ...apiSource.map((file) => `- ${code(file.split('/').pop())}`),
    '',
    '### Tablas que usa',
    '',
    ...(moduleTables.length ? moduleTables.map((table) => `- ${code(table.name)} (${table.migration})`) : ['_Ninguna._']),
    `\nVer ${plainLink('Base de datos')}.`,
    '',
    '## Interfaz',
    '',
    webFiles.length
      ? `Carpeta: [apps/web/src/modules/${module}](${treeUrl(`apps/web/src/modules/${module}`)}) · ${webSource.length} archivos de código y ${webFiles.length - webSource.length} de pruebas.`
      : '_No tiene interfaz propia._',
    '',
    table(
      ['Ruta', 'Página', 'Roles', 'Enlace de inicio'],
      webRoutes.filter((route) => route.module === module).map((route) => [code(route.path), route.page, route.roles, route.homeLink || '—']),
    ),
    ...Object.entries(webFolders).map(([folder, names]) => `- **${folder}** ${names.map(code).join(', ')}`),
    '',
  ];
  write(`Generado/Módulos/${moduleNote(module)}.md`, lines.join('\n'));
}

const erLines = ['```mermaid', 'erDiagram'];
for (const table of tables) for (const reference of table.references) erLines.push(`  ${reference.table} ||--o{ ${table.name} : "${reference.column}"`);
for (const table of tables) if (!tables.some((other) => other.references.some((r) => r.table === table.name)) && table.references.length === 0) erLines.push(`  ${table.name} {}`);
erLines.push('```');
write(
  'Generado/Base de datos.md',
  [
    frontmatter({ tags: ['base-datos'] }),
    '# Base de datos',
    '',
    generatedNotice,
    `PostgreSQL (Neon). Solo \`apps/api/src/shared/database\` habla con la base; ver ${plainLink('Arquitectura')} §6.4.`,
    '',
    erLines.join('\n'),
    '',
    table(
      ['Tabla', 'Migración', 'Referencia a', 'La usan'],
      tables.map((table) => [
        code(table.name),
        `[${table.migration}](${blobUrl(`apps/api/src/shared/database/migrations/${table.migration}`)})`,
        table.references.map((reference) => `${reference.table} (${reference.column})`).join(', ') || '—',
        table.usedBy.map((module) => plainLink(moduleNote(module), module)).join(', ') || '—',
      ]),
    ),
  ].join('\n'),
);

write(
  'Generado/Rutas.md',
  [
    frontmatter({ tags: ['rutas'] }),
    '# Rutas',
    '',
    generatedNotice,
    `Todas las rutas de la API van bajo \`/api\` y se sirven desde el mismo origen que la interfaz (${plainLink('Arquitectura')} §6.1).`,
    '',
    '## API',
    '',
    table(
      ['Método', 'Ruta', 'Módulo'],
      apiRoutes.map((route) => [route.method, code(route.path), plainLink(moduleNote(route.module), route.module)]),
    ),
    '## Interfaz',
    '',
    table(
      ['Ruta', 'Página', 'Módulo', 'Roles', 'Enlace de inicio'],
      webRoutes.map((route) => [
        code(route.path),
        route.page,
        route.module ? plainLink(moduleNote(route.module), route.module) : '—',
        route.roles,
        route.homeLink || '—',
      ]),
    ),
  ].join('\n'),
);

write(
  'Generado/Contratos.md',
  [
    frontmatter({ tags: ['contrato'] }),
    '# Contratos',
    '',
    generatedNotice,
    `Paquete \`@kofi/contracts\`: esquemas de Zod y sus tipos. La API los usa para validar y la interfaz para tipar (${plainLink('Arquitectura')} §4.4).`,
    '',
    table(
      ['Archivo', 'Módulo'],
      contractFiles.map((file) => {
        const name = file.split('/').pop().replace('.ts', '');
        return [`[${name}.ts](${blobUrl(file)})`, moduleNames.includes(name) ? plainLink(moduleNote(name), name) : 'compartido'];
      }),
    ),
  ].join('\n'),
);

write(
  'Generado/Historial de PRs.md',
  [
    frontmatter({ tags: ['historial'] }),
    '# Historial de PRs',
    '',
    generatedNotice,
    `Commits de \`${branch}\`: cada uno es un PR fusionado con squash.`,
    '',
    table(
      ['Fecha', 'PR', 'Tipo', 'Título', 'Especificación'],
      history.map((entry) => [
        entry.date,
        entry.pr ? `[#${entry.pr}](${prUrl(entry.pr)})` : entry.hash,
        entry.type || '—',
        entry.subject.replace(/ \(#\d+\)$/, '').replace(/ \[SPEC-\d{3}\]/, ''),
        entry.specNumber && specByNumber[entry.specNumber] ? plainLink(specByNumber[entry.specNumber].note, `SPEC-${entry.specNumber}`) : '—',
      ]),
    ),
  ].join('\n'),
);

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
    ...documents.map((document) => `- ${plainLink(document.note)} — [${document.path}](${blobUrl(document.path)})`),
    '',
    '## Especificaciones',
    '',
    table(
      ['Especificación', 'Estado', 'Tareas', 'Avance', 'Depende de', 'PRs'],
      specs.map((spec) => [
        plainLink(spec.note),
        spec.status,
        progress(spec),
        statusLabel(spec),
        spec.dependsOn.map((number) => `SPEC-${number}`).join(', ') || '—',
        spec.pullRequests.length,
      ]),
    ),
    '### Dependencias entre especificaciones',
    '',
    dependencyGraph.join('\n'),
    '',
    '## Módulos del código',
    '',
    table(
      ['Módulo', 'Qué hace', 'Rutas API', 'Rutas interfaz', 'Especificaciones'],
      moduleNames.map((module) => [
        plainLink(moduleNote(module)),
        moduleTitles[module]?.summary ?? '—',
        apiRoutes.filter((route) => route.module === module).length,
        webRoutes.filter((route) => route.module === module).length,
        specs.filter((spec) => spec.modules.includes(module)).map((spec) => spec.id).join(', '),
      ]),
    ),
    '## Vistas transversales',
    '',
    `- ${plainLink('Rutas')} — ${apiRoutes.length} rutas de la API y ${webRoutes.length} de la interfaz.`,
    `- ${plainLink('Base de datos')} — ${tables.length} tablas en ${migrations.length} migraciones.`,
    `- ${plainLink('Contratos')} — ${contractFiles.length} archivos en \`packages/contracts\`.`,
    `- ${plainLink('Historial de PRs')} — ${history.length} commits en \`${branch}\`.`,
    '',
    '## Notas propias',
    '',
    'Escribe en `Notas/`: el generador no las toca. Enlaza desde ahí a cualquier nota de este mapa.',
    '',
  ].join('\n'),
);

console.log(
  `Mapa generado desde ${ref} (${commit}): ${specs.length} especificaciones, ${moduleNames.length} módulos, ${apiRoutes.length} rutas de API, ${webRoutes.length} de interfaz, ${tables.length} tablas, ${documents.length} documentos.`,
);
