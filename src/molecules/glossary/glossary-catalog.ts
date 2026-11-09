/** Canon glossary ids for public marketing copy — strings live in i18n (marketing.glossary). */

import { getLL } from "../../i18n/overlane-i18n.js";

export type GlossaryEntry = {
    title: string;
    body: string;
    layman?: string;
    ol?: string;
};

export type GlossaryId =
    | "arrow-ipc"
    | "sse"
    | "mmf"
    | "duckdb"
    | "tantivy"
    | "parquet"
    | "sqlite"
    | "wal"
    | "zstd"
    | "fts"
    | "clad"
    | "nsis"
    | "tauri"
    | "loopback"
    | "sidecar"
    | "spa"
    | "scs-sdk"
    | "oltp";

type GlossaryI18nKey =
    | "arrowIpc"
    | "sse"
    | "mmf"
    | "duckdb"
    | "tantivy"
    | "parquet"
    | "sqlite"
    | "wal"
    | "zstd"
    | "fts"
    | "clad"
    | "nsis"
    | "tauri"
    | "loopback"
    | "sidecar"
    | "spa"
    | "scsSdk"
    | "oltp";

export const GLOSSARY_CATALOG_IDS: readonly GlossaryId[] = [
    "arrow-ipc",
    "sse",
    "mmf",
    "duckdb",
    "tantivy",
    "parquet",
    "sqlite",
    "wal",
    "zstd",
    "fts",
    "clad",
    "nsis",
    "tauri",
    "loopback",
    "sidecar",
    "spa",
    "scs-sdk",
    "oltp",
] as const;

const GLOSSARY_I18N_KEY: Record<GlossaryId, GlossaryI18nKey> = {
    "arrow-ipc": "arrowIpc",
    sse: "sse",
    mmf: "mmf",
    duckdb: "duckdb",
    tantivy: "tantivy",
    parquet: "parquet",
    sqlite: "sqlite",
    wal: "wal",
    zstd: "zstd",
    fts: "fts",
    clad: "clad",
    nsis: "nsis",
    tauri: "tauri",
    loopback: "loopback",
    sidecar: "sidecar",
    spa: "spa",
    "scs-sdk": "scsSdk",
    oltp: "oltp",
};

export function glossaryEntry(id: string): GlossaryEntry | undefined {
    const i18nKey = GLOSSARY_I18N_KEY[id as GlossaryId];
    if (!i18nKey) {
        return undefined;
    }
    const block = getLL().marketing.glossary[i18nKey];
    const layman = block.layman();
    const ol = block.ol();
    return {
        title: block.title(),
        body: block.body(),
        ...(layman ? { layman } : {}),
        ...(ol ? { ol } : {}),
    };
}
