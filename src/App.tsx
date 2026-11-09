import { GlossaryProvider } from "./molecules/glossary/GlossaryProvider.js";
import { ProductMarketingView } from "./views/ProductMarketingView.js";
import { OverlaneI18nProvider } from "./organisms/OverlaneI18nProvider.js";
import { readMarketingUiLocale, resolveOverlaneLocale } from "./molecules/locale/resolveOverlaneLocale.js";

export function App() {
    const initialLocale = resolveOverlaneLocale(
        readMarketingUiLocale(),
        typeof navigator !== "undefined" ? navigator.language : null,
    );
    return (
        <OverlaneI18nProvider initialLocale={initialLocale}>
            <GlossaryProvider>
                <ProductMarketingView />
            </GlossaryProvider>
        </OverlaneI18nProvider>
    );
}
