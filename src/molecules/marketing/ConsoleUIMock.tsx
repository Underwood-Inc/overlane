import { getLL } from "../../i18n/overlane-i18n.js";
import { MOCK_SESSION } from "./mock-session-fixture.js";
import { MockConsoleShell } from "./MockConsoleShell.js";

/** Decorative static mock of the Overlane console Home — not interactive app chrome. */
export function ConsoleUIMock() {
    const { speedKmh, fuelPct, odometerKm, route, cargo, deliveryStatus } = MOCK_SESSION;
    const mocks = getLL().marketing.mocks;

    return (
        <MockConsoleShell activeNav="home">
            <div className="ui-mock__health">
                <span className="ui-mock__pill ui-mock__pill--ok">{mocks.gameLinked()}</span>
                <span className="ui-mock__pill ui-mock__pill--rec">{mocks.archiveOn()}</span>
                <span className="ui-mock__pill">{mocks.journalOn()}</span>
            </div>
            <div className="ui-mock__content">
                <div className="ui-mock__live-head">
                    <h3 className="ui-mock__live-title">{mocks.liveDriving()}</h3>
                    <span className="ui-mock__live-status">{mocks.onJob()}</span>
                </div>
                <div className="ui-mock__live-panel">
                    <p className="ui-mock__live-speed">
                        {speedKmh} <span>km/h</span>
                    </p>
                    <div className="ui-mock__live-row">
                        <span>
                            {mocks.fuel()} {fuelPct}%
                        </span>
                        <span>
                            {mocks.gear()} {MOCK_SESSION.gear}
                        </span>
                        <span>
                            {mocks.odometer()} {odometerKm.toLocaleString()} km
                        </span>
                    </div>
                    <p className="ui-mock__live-route">{route}</p>
                    <p className="ui-mock__live-cargo">
                        {cargo} · {deliveryStatus}
                    </p>
                </div>
            </div>
        </MockConsoleShell>
    );
}
