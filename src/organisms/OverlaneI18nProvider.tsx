import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Locales, TranslationFunctions } from "../i18n/i18n-types.js";
import {
    getLL,
    getLocale,
    initOverlaneI18n,
    initOverlaneI18nAsync,
    setOverlaneLocale,
    subscribeOverlaneLocale,
} from "../i18n/overlane-i18n.js";

type OverlaneI18nContextValue = {
    locale: Locales;
    LL: TranslationFunctions;
    setLocale: (locale: Locales) => Promise<void>;
};

const OverlaneI18nContext = createContext<OverlaneI18nContextValue | null>(null);

initOverlaneI18n("en");

export type OverlaneI18nProviderProps = {
    initialLocale: Locales;
    children: ReactNode;
};

export function OverlaneI18nProvider({ initialLocale, children }: OverlaneI18nProviderProps) {
    const [ready, setReady] = useState(() => {
        initOverlaneI18n(initialLocale);
        return true;
    });
    const [localeEpoch, bumpLocale] = useState(0);

    useEffect(() => {
        let cancelled = false;
        void initOverlaneI18nAsync(initialLocale).then(() => {
            if (!cancelled) {
                setReady(true);
            }
        });
        return () => {
            cancelled = true;
        };
    }, [initialLocale]);

    useEffect(() => subscribeOverlaneLocale(() => bumpLocale((n) => n + 1)), []);

    const value = useMemo<OverlaneI18nContextValue>(
        () => ({
            locale: getLocale(),
            LL: getLL(),
            setLocale: setOverlaneLocale,
        }),
        [ready, localeEpoch],
    );

    if (!ready) {
        return null;
    }

    return <OverlaneI18nContext.Provider value={value}>{children}</OverlaneI18nContext.Provider>;
}

export function useOverlaneI18n(): OverlaneI18nContextValue {
    const ctx = useContext(OverlaneI18nContext);
    if (!ctx) {
        throw new Error("useOverlaneI18n must be used within OverlaneI18nProvider");
    }
    return ctx;
}

export function useLL(): TranslationFunctions {
    return useOverlaneI18n().LL;
}
