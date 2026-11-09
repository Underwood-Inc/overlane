import { MOCK_SESSION } from "./mock-session-fixture.js";

/** Decorative OBS-style overlay panel mock (hero stage accent). */
export function OverlayPanelMock() {
    const { speedKmh, fuelPct, gear, route } = MOCK_SESSION;

    return (
        <div className="ui-mock ui-mock--overlay" aria-hidden="true">
            <div className="ui-mock__overlay-panel">
                <p className="ui-mock__overlay-speed">
                    {speedKmh} <span>km/h</span>
                </p>
                <div className="ui-mock__overlay-row">
                    <span>Fuel {fuelPct}%</span>
                    <span>Gear {gear}</span>
                </div>
                <p className="ui-mock__overlay-job">{route}</p>
            </div>
        </div>
    );
}
