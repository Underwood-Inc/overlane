#!/usr/bin/env node
/** Sync typesafe-i18n locale modules from supported-locales.json + locales/*.json (Mappy pattern). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MANIFEST_PATH = path.join(ROOT, "src/i18n/supported-locales.json");
const I18N_ROOT = path.join(ROOT, "src/i18n");

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
const localeIds = manifest.locales.map((row) => row.id);
const baseLocale = manifest.baseLocale;

function writeLocaleModule(id, tree) {
    const dir = path.join(I18N_ROOT, id);
    fs.mkdirSync(dir, { recursive: true });
    const body = JSON.stringify(tree, null, "\t");
    const typeImport = id === baseLocale ? "BaseTranslation" : "Translation";
    const cast = id === baseLocale ? "as BaseTranslation" : "as Translation";
    const indexTs = `import type { ${typeImport} } from '../i18n-types.js';

const translation = ${body} ${cast};

export default translation;
`;
    fs.writeFileSync(path.join(dir, "index.ts"), indexTs, "utf8");
}

for (const id of localeIds) {
    const localePath = path.join(I18N_ROOT, "locales", `${id}.json`);
    const tree = JSON.parse(fs.readFileSync(localePath, "utf8"));
    writeLocaleModule(id, tree);
}

console.log(`Synced ${localeIds.length} locale modules`);
