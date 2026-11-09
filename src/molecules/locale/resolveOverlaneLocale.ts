import {
    OVERLANE_BASE_LOCALE,
    coerceOverlaneLocaleId,
    isOverlaneLocaleId,
    type OverlaneLocaleId,
} from "./overlaneLocaleCatalog.js";

const MARKETING_LOCALE_KEY = "overlane.marketing.uiLocale";

export function readMarketingUiLocale(): OverlaneLocaleId | undefined {
    try {
        const raw = localStorage.getItem(MARKETING_LOCALE_KEY);
        return isOverlaneLocaleId(raw) ? raw : undefined;
    } catch {
        return undefined;
    }
}

export function saveMarketingUiLocale(locale: OverlaneLocaleId): void {
    try {
        localStorage.setItem(MARKETING_LOCALE_KEY, locale);
    } catch {
        /* storage unavailable */
    }
}

export function resolveOverlaneLocale(
    saved: string | null | undefined,
    navigatorLanguage?: string | null,
): OverlaneLocaleId {
    if (isOverlaneLocaleId(saved)) {
        return saved;
    }
    const fromNav = coerceOverlaneLocaleId(navigatorLanguage ?? (typeof navigator !== "undefined" ? navigator.language : null));
    return fromNav ?? OVERLANE_BASE_LOCALE;
}
