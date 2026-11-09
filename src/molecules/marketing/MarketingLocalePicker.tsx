import { useCallback, useId } from "react";
import type { Locales } from "../../i18n/i18n-types.js";
import { useOverlaneI18n } from "../../organisms/OverlaneI18nProvider.js";
import { overlaneLocaleSelectOptions } from "../locale/overlaneLocaleCatalog.js";
import { saveMarketingUiLocale } from "../locale/resolveOverlaneLocale.js";

/** Compact locale dropdown in the marketing footer — persists overlane.marketing.uiLocale. */
export function MarketingLocalePicker() {
    const { locale, LL, setLocale } = useOverlaneI18n();
    const options = overlaneLocaleSelectOptions();
    const selectId = useId();

    const onChange = useCallback(
        async (next: Locales) => {
            if (next === locale) {
                return;
            }
            saveMarketingUiLocale(next);
            await setLocale(next);
        },
        [locale, setLocale],
    );

    return (
        <div className="marketing-locale-picker marketing-locale-picker--footer" data-testid="marketing-locale-picker">
            <label className="marketing-locale-picker__label" htmlFor={selectId}>
                {LL.settings.languageLabel()}
            </label>
            <div className="marketing-locale-picker__control">
                <select
                    id={selectId}
                    className="marketing-locale-picker__select"
                    value={locale}
                    onChange={(ev) => void onChange(ev.target.value as Locales)}
                >
                    {options.map((row) => (
                        <option key={row.id} value={row.id}>
                            {row.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
