import { getLL } from "../../i18n/overlane-i18n.js";
import { MockConsoleShell } from "./MockConsoleShell.js";

const OVERLAY_PRESETS = [
    { name: "Velocity", path: "/w/speed/speed", status: "Live" },
    { name: "Controls", path: "/w/inputs/inputs", status: "Ready" },
    { name: "Contract", path: "/w/job/job", status: "Ready" },
    { name: "Telltales", path: "/w/dashboard/dashboard", status: "Ready" },
] as const;

/** Decorative overlays manager grid — URLs for OBS browser sources. */
export function OverlaysGridMock() {
    const mocks = getLL().marketing.mocks;
    return (
        <MockConsoleShell activeNav="overlays" className="ui-mock--compact">
            <div className="ui-mock__health">
                <span className="ui-mock__pill ui-mock__pill--ok">4 presets</span>
                <span className="ui-mock__pill">{mocks.lanPort()}</span>
            </div>
            <div className="ui-mock__content ui-mock__content--grid">
                <p className="ui-mock__section-label">{mocks.browserSources()}</p>
                <div className="ui-mock__overlay-grid">
                    {OVERLAY_PRESETS.map((preset) => (
                        <article key={preset.path} className="ui-mock__overlay-card">
                            <p className="ui-mock__overlay-card-name">{preset.name}</p>
                            <p className="ui-mock__overlay-card-url">{preset.path}</p>
                            <span
                                className={
                                    preset.status === "Live"
                                        ? "ui-mock__pill ui-mock__pill--ok ui-mock__overlay-card-pill"
                                        : "ui-mock__pill ui-mock__overlay-card-pill"
                                }
                            >
                                {preset.status}
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </MockConsoleShell>
    );
}
