import { getLL } from "../../i18n/overlane-i18n.js";
import { MOCK_SESSION } from "./mock-session-fixture.js";
import { MockConsoleShell } from "./MockConsoleShell.js";

/** Decorative archive + Memory Lane timeline sample. */
export function ArchiveTimelineMock() {
    const mocks = getLL().marketing.mocks;
    return (
        <MockConsoleShell activeNav="archive" className="ui-mock--compact">
            <div className="ui-mock__health">
                <span className="ui-mock__pill ui-mock__pill--rec">{mocks.recording()}</span>
                <span className="ui-mock__pill ui-mock__pill--ok">{mocks.ldpIngest()}</span>
                <span className="ui-mock__pill">412 km buffered</span>
            </div>
            <div className="ui-mock__content ui-mock__content--archive">
                <p className="ui-mock__section-label">{mocks.archiveTimeline()}</p>
                <div className="ui-mock__archive-scrub">
                    <span className="ui-mock__archive-playhead" />
                    <span className="ui-mock__archive-mark is-start" />
                    <span className="ui-mock__archive-mark" />
                    <span className="ui-mock__archive-mark is-hot" />
                    <span className="ui-mock__archive-mark" />
                    <span className="ui-mock__archive-mark is-end" />
                </div>
                <div className="ui-mock__archive-lanes">
                    <div className="ui-mock__archive-lane">
                        <span>{mocks.speed()}</span>
                        <div className="ui-mock__spark">
                            <span />
                            <span />
                            <span className="is-hot" />
                            <span />
                        </div>
                    </div>
                    <div className="ui-mock__archive-lane">
                        <span>{mocks.fuel()}</span>
                        <div className="ui-mock__spark ui-mock__spark--fuel">
                            <span />
                            <span className="is-hot" />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
                <p className="ui-mock__archive-caption">
                    Scrub anywhere — {MOCK_SESSION.route} still on screen at this tick.
                </p>
            </div>
        </MockConsoleShell>
    );
}
