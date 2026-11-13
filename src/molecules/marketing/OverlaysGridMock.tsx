import { getLL } from "../../i18n/overlane-i18n.js";
import { MARKETING_CORE_OVERLAY_PRESETS } from "./overlay-preset-fixture.js";
import { MockConsoleShell } from "./MockConsoleShell.js";

/** Decorative overlays manager grid — URLs for OBS browser sources. */
export function OverlaysGridMock() {
    const mocks = getLL().marketing.mocks;
    return (
        <MockConsoleShell activeNav="overlays" className="ui-mock--compact">
            <div className="ui-mock__health">
                <span className="ui-mock__pill ui-mock__pill--ok">{mocks.presetCount()}</span>
                <span className="ui-mock__pill">{mocks.lanPort()}</span>
            </div>
            <div className="ui-mock__content ui-mock__content--grid">
                <p className="ui-mock__section-label">{mocks.browserSources()}</p>
                <div className="ui-mock__overlay-grid">
                    {MARKETING_CORE_OVERLAY_PRESETS.map((preset) => (
                        <article key={preset.path} className="ui-mock__overlay-card">
                            <p className="ui-mock__overlay-card-name">{preset.name}</p>
                            <p className="ui-mock__overlay-card-url">{preset.path}</p>
                        </article>
                    ))}
                </div>
            </div>
        </MockConsoleShell>
    );
}
