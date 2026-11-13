import { getLL } from "../../i18n/overlane-i18n.js";
import { MOCK_ARCHIVE_ROWS, MOCK_SESSION } from "./mock-session-fixture.js";
import { MockConsoleShell } from "./MockConsoleShell.js";

/** Decorative archive timeline list sample — matches console row list, not a scrubber. */
export function ArchiveTimelineMock() {
    const mocks = getLL().marketing.mocks;
    return (
        <MockConsoleShell activeNav="archive" className="ui-mock--compact">
            <div className="ui-mock__health">
                <span className="ui-mock__pill ui-mock__pill--rec">{mocks.archiveOn()}</span>
                <span className="ui-mock__pill ui-mock__pill--ok">{mocks.gameLinked()}</span>
                <span className="ui-mock__pill">{mocks.pluginReady()}</span>
            </div>
            <div className="ui-mock__content ui-mock__content--archive">
                <p className="ui-mock__section-label">{mocks.archiveTimeline()}</p>
                <ul className="ui-mock__archive-list">
                    {MOCK_ARCHIVE_ROWS.map((row) => (
                        <li key={row.time} className={row.selected ? "is-selected" : undefined}>
                            <span className="ui-mock__archive-time">{row.time}</span>
                            <span className="ui-mock__archive-route">{row.route}</span>
                            <span className="ui-mock__archive-speed">
                                {row.speedKmh}
                                {mocks.speedUnitLeadingSpace()}
                            </span>
                        </li>
                    ))}
                </ul>
                <p className="ui-mock__archive-caption">
                    {mocks.archiveListCaption({ route: MOCK_SESSION.route })}
                </p>
            </div>
        </MockConsoleShell>
    );
}
