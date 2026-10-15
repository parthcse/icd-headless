/**
 * Builds lib/sitemap-manifest.json — the list of page URLs this frontend owns,
 * each with the date its source last changed.
 *
 * Run automatically by `npm run build` (the "prebuild" script) and on demand
 * with `npm run sitemap:manifest`.
 *
 * WHY THIS EXISTS
 * The old sitemap came from Yoast on the CMS, so it could only ever list what
 * WordPress knows about. Pages built as data files under lib/services (and any
 * hand-built route under app/) have no WordPress post behind them, so they were
 * missing from the sitemap entirely. This script discovers them from the source
 * instead, which means a new page is in the sitemap the moment it is deployed —
 * nobody has to remember to add it.
 *
 * WHAT IT WRITES
 *   { generatedAt, routes: { "/some-page/": { source, lastmod } } }
 *
 * `lastmod` is the newest commit date touching that route's source file, from a
 * single `git log` pass. Uncommitted or unreadable files fall back to the file's
 * mtime; if even that fails the route is still listed, just without a date (an
 * absent <lastmod> is fine — a wrong one is worse, since Google drops lastmod
 * for the whole site when it finds dates it cannot trust).
 *
 * At request time lib/sitemap-sources.js takes the LATER of this date and the
 * matching WordPress page's `modifiedGmt`, so both a code change and a CMS-only
 * content edit move the date.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_DIR = path.join(ROOT, "app");
const SERVICES_DIR = path.join(ROOT, "lib", "services");
const SERVICES_INDEX = path.join(SERVICES_DIR, "index.js");
const OUT_FILE = path.join(ROOT, "lib", "sitemap-manifest.json");

/** Route segments that never become a public page URL. */
const SKIP_SEGMENTS = new Set(["api"]);

const posix = (p) => p.split(path.sep).join("/");

/**
 * Every static route under app/ that renders a page.
 *
 * Route groups ("(marketing)") are stripped because they don't appear in the
 * URL; anything dynamic ("[slug]", "[[...page]]") is skipped because its URLs
 * come from the CMS, not the filesystem — those are built by the per-type
 * sitemaps instead.
 */
function findStaticRoutes(dir = APP_DIR, segments = []) {
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    if (name.startsWith("_") || name.startsWith(".")) continue;
    if (SKIP_SEGMENTS.has(name)) continue;
    if (name.includes("[")) continue; // dynamic segment
    if (name.includes(".")) continue; // route handler like "post-sitemap.xml"
    const isGroup = name.startsWith("(") && name.endsWith(")");
    routes.push(...findStaticRoutes(path.join(dir, name), isGroup ? segments : [...segments, name]));
  }
  const page = ["page.js", "page.jsx", "page.tsx"].map((f) => path.join(dir, f)).find((f) => fs.existsSync(f));
  if (page) routes.push({ url: `/${segments.join("/")}${segments.length ? "/" : ""}`, source: posix(path.relative(ROOT, page)) });
  return routes;
}

/**
 * Data-file pages: slug → the file that defines it.
 *
 * lib/services/index.js is one long list of `import X from "./a/b"` lines plus a
 * `"slug": X` map, so the two halves are joined on the identifier. Parsing the
 * source (rather than importing it) keeps this script dependency-free — the data
 * files use Next's "@/..." aliases and extensionless imports that plain Node
 * cannot resolve.
 */
function findServiceRoutes() {
  const src = fs.readFileSync(SERVICES_INDEX, "utf8");
  const files = new Map();
  for (const m of src.matchAll(/^import\s+(\w+)\s+from\s+"(\.[^"]+)";/gm)) {
    const [, ident, rel] = m;
    const abs = path.join(SERVICES_DIR, `${rel}.js`);
    if (fs.existsSync(abs)) files.set(ident, posix(path.relative(ROOT, abs)));
  }
  const routes = [];
  for (const m of src.matchAll(/^\s*"([a-z0-9-]+)":\s*(\w+),/gm)) {
    const [, slug, ident] = m;
    routes.push({ url: `/${slug}/`, source: files.get(ident) ?? null });
  }
  return routes;
}

/**
 * path → ISO date of the newest commit that touched it.
 *
 * One `git log` for the whole tree instead of one per file (183 service pages
 * would mean 183 process spawns). Output is newest-first, so the first time a
 * path appears is its latest change.
 */
function gitDates() {
  const dates = new Map();
  let out;
  try {
    out = execFileSync("git", ["log", "--pretty=format:@%cI", "--name-only", "--", "app", "lib"], {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch {
    return dates; // not a git checkout (or git missing) → mtime fallback
  }
  let current = null;
  for (const line of out.split("\n")) {
    const l = line.trim();
    if (!l) continue;
    if (l.startsWith("@")) current = l.slice(1);
    else if (current && !dates.has(l)) dates.set(l, current);
  }
  return dates;
}

function mtime(source) {
  try {
    return fs.statSync(path.join(ROOT, source)).mtime.toISOString();
  } catch {
    return null;
  }
}

const dates = gitDates();
const routes = {};
for (const { url, source } of [...findStaticRoutes(), ...findServiceRoutes()]) {
  // A later duplicate must not wipe a resolved source (app/[slug] vs. a literal route).
  if (routes[url]?.source && !source) continue;
  routes[url] = { source, lastmod: source ? dates.get(source) ?? mtime(source) : null };
}

const sorted = Object.fromEntries(Object.keys(routes).sort().map((k) => [k, routes[k]]));
fs.writeFileSync(OUT_FILE, `${JSON.stringify({ generatedAt: new Date().toISOString(), routes: sorted }, null, 1)}\n`);

const withDate = Object.values(sorted).filter((r) => r.lastmod).length;
const noSource = Object.entries(sorted).filter(([, r]) => !r.source).map(([u]) => u);
console.log(`sitemap manifest: ${Object.keys(sorted).length} routes → ${posix(path.relative(ROOT, OUT_FILE))}`);
console.log(`  with lastmod: ${withDate}   from git: ${dates.size ? "yes" : "no (mtime fallback)"}`);
if (noSource.length) console.log(`  no source file resolved (listed without lastmod): ${noSource.join(", ")}`);
