import type { Locales } from "../../i18n/i18n-types.js";
import rawManifest from "../../i18n/supported-locales.json" with { type: "json" };

export type OverlaneLocaleId = Locales;
export type OverlaneTextDirection = "ltr" | "rtl";

export type OverlaneLocaleCatalogRow = {
    id: OverlaneLocaleId;
    bcp47: string;
    label: string;
    direction: OverlaneTextDirection;
};

type SupportedLocalesManifest = {
    baseLocale: OverlaneLocaleId;
    locales: OverlaneLocaleCatalogRow[];
};

const manifest = rawManifest as SupportedLocalesManifest;

export const OVERLANE_LOCALE_CATALOG: readonly OverlaneLocaleCatalogRow[] = manifest.locales;
export const OVERLANE_BASE_LOCALE: OverlaneLocaleId = manifest.baseLocale;
export const OVERLANE_LOCALE_IDS: readonly OverlaneLocaleId[] = OVERLANE_LOCALE_CATALOG.map((row) => row.id);

const byId = new Map<OverlaneLocaleId, OverlaneLocaleCatalogRow>(
    OVERLANE_LOCALE_CATALOG.map((row) => [row.id, row]),
);

export function isOverlaneLocaleId(value: string | null | undefined): value is OverlaneLocaleId {
    return typeof value === "string" && byId.has(value as OverlaneLocaleId);
}

export function coerceOverlaneLocaleId(tag: string | null | undefined): OverlaneLocaleId | null {
    if (!tag?.trim()) {
        return null;
    }
    const normalized = tag.trim().toLowerCase();
    if (isOverlaneLocaleId(normalized)) {
        return normalized;
    }
    const primary = normalized.split("-")[0] ?? "";
    if (isOverlaneLocaleId(primary)) {
        return primary;
    }
    if (primary === "zh") {
        return "zh";
    }
    return null;
}

export function localeCatalogRow(id: OverlaneLocaleId): OverlaneLocaleCatalogRow {
    const row = byId.get(id);
    if (!row) {
        throw new Error(`Unknown locale id: ${id}`);
    }
    return row;
}

export function localeDirection(id: OverlaneLocaleId): OverlaneTextDirection {
    return localeCatalogRow(id).direction;
}

export function overlaneLocaleSelectOptions(): readonly OverlaneLocaleCatalogRow[] {
    return OVERLANE_LOCALE_CATALOG;
}
