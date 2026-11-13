import { getLL } from "../../i18n/overlane-i18n.js";
import { MockConsoleShell } from "./MockConsoleShell.js";

const LOG_FILES = [
    { name: "overlane-2026-11-09.log", size: "128 KB" },
    { name: "overlane-2026-11-08.log.gz", size: "42 KB" },
] as const;

const LOG_LINES = [
    { time: "14:02:08", level: "INFO", text: "Capture connected · ETS2" },
    { time: "14:18:41", level: "INFO", text: "Telemetry snapshot flush" },
    { time: "14:41:03", level: "WARN", text: "Speed check · eased throttle" },
    { time: "15:05:22", level: "INFO", text: "Delivery phase · cargo secured" },
] as const;

/** Decorative session log — file list + line viewer (no in-app notes). */
export function JournalMock() {
    const mocks = getLL().marketing.mocks;
    return (
        <MockConsoleShell activeNav="journal" className="ui-mock--compact">
            <div className="ui-mock__health">
                <span className="ui-mock__pill">{mocks.logFileCount()}</span>
                <span className="ui-mock__pill ui-mock__pill--ok">{mocks.tailFollow()}</span>
            </div>
            <div className="ui-mock__content ui-mock__content--journal ui-mock__journal-split">
                <div className="ui-mock__journal-files" aria-hidden="true">
                    <p className="ui-mock__section-label">{mocks.logFiles()}</p>
                    <ul className="ui-mock__journal-file-list">
                        {LOG_FILES.map((f, i) => (
                            <li key={f.name} className={i === 0 ? "is-active" : ""}>
                                <span className="ui-mock__journal-file-name">{f.name}</span>
                                <span className="ui-mock__journal-file-size">{f.size}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="ui-mock__journal-viewer">
                    <p className="ui-mock__section-label">{mocks.sampleLogFile()}</p>
                    <ul className="ui-mock__journal ui-mock__journal--log">
                        {LOG_LINES.map((row) => (
                            <li key={row.time}>
                                <span className="ui-mock__journal-time">{row.time}</span>
                                <span className="ui-mock__journal-kind">{row.level}</span>
                                <span className="ui-mock__journal-text">{row.text}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="ui-mock__hint-line">{mocks.logHint()}</p>
                </div>
            </div>
        </MockConsoleShell>
    );
}
