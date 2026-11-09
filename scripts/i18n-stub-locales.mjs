#!/usr/bin/env node
/**
 * Offline stub locales for Overlane (Mappy-style `[locale] ` prefix on leaf strings).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const EN_PATH = path.join(ROOT, "src/i18n/locales/en.json");
const MANIFEST_PATH = path.join(ROOT, "src/i18n/supported-locales.json");
const LOCALES_DIR = path.join(ROOT, "src/i18n/locales");

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
const en = JSON.parse(fs.readFileSync(EN_PATH, "utf8"));

function stubTree(node, localeId) {
  if (typeof node === "string") {
    if (!node.trim()) {
      return node;
    }
    return `[${localeId}] ${node}`;
  }
  if (Array.isArray(node)) {
    return node.map((v) => stubTree(v, localeId));
  }
  if (node && typeof node === "object") {
    const out = {};
    for (const [k, v] of Object.entries(node)) {
      out[k] = stubTree(v, localeId);
    }
    return out;
  }
  return node;
}

const targets = manifest.locales.map((r) => r.id).filter((id) => id !== manifest.baseLocale);
for (const localeId of targets) {
  const tree = stubTree(en, localeId);
  fs.writeFileSync(path.join(LOCALES_DIR, `${localeId}.json`), `${JSON.stringify(tree, null, 2)}\n`, "utf8");
}
console.log(`Stubbed ${targets.length} locale(s) from en.json`);
