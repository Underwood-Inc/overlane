import type { Locales, TranslationFunctions } from "./i18n-types.js";
import { i18nObject } from "./i18n-util.js";
import { loadLocale } from "./i18n-util.sync.js";
import { loadLocaleAsync } from "./i18n-util.async.js";
import { localeDirection, type OverlaneLocaleId } from "../molecules/locale/overlaneLocaleCatalog.js";

export const OVERLANE_LOCALE_CHANGE = "ol-locale-change";

let activeLocale: Locales = "en";
let LL: TranslationFunctions | undefined;
const listeners = new Set<() => void>();

function applyDocumentLocale(locale: Locales): void {
    if (typeof document === "undefined") {
        return;
    }
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDirection(locale as OverlaneLocaleId);
}

function notifyLocaleChange(): void {
    for (const fn of listeners) {
        fn();
    }
    if (typeof document !== "undefined") {
        document.dispatchEvent(new CustomEvent(OVERLANE_LOCALE_CHANGE, { detail: { locale: activeLocale } }));
    }
}

export function subscribeOverlaneLocale(listener: () => void): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

export function initOverlaneI18n(locale: Locales = "en"): void {
    loadLocale(locale);
    activeLocale = locale;
    LL = i18nObject(locale);
    applyDocumentLocale(locale);
    notifyLocaleChange();
}

export async function initOverlaneI18nAsync(locale: Locales): Promise<void> {
    await loadLocaleAsync(locale);
    activeLocale = locale;
    LL = i18nObject(locale);
    applyDocumentLocale(locale);
    notifyLocaleChange();
}

export function getLocale(): Locales {
    return activeLocale;
}

export function getLL(): TranslationFunctions {
    if (!LL) {
        initOverlaneI18n("en");
    }
    return LL!;
}

export async function setOverlaneLocale(locale: Locales): Promise<void> {
    if (locale === activeLocale && LL) {
        return;
    }
    await initOverlaneI18nAsync(locale);
}
