import { MOCK_SESSION } from "./mock-session-fixture.js";

/** Decorative stream overlay variants (compact stack for showcase). */
export function StreamOverlayMocks() {
    const { speedKmh, fuelPct, gear, route } = MOCK_SESSION;

    return (
        <div className="ui-mock ui-mock--stream-stack" aria-hidden="true">
            <div className="ui-mock__overlay-panel ui-mock__overlay-panel--primary">
                <p className="ui-mock__overlay-speed">
                    {speedKmh} <span>km/h</span>
                </p>
                <div className="ui-mock__overlay-row">
                    <span>Fuel {fuelPct}%</span>
                    <span>Gear {gear}</span>
                </div>
                <p className="ui-mock__overlay-job">{route}</p>
            </div>
            <div className="ui-mock__overlay-panel ui-mock__overlay-panel--minimal">
                <p className="ui-mock__overlay-speed ui-mock__overlay-speed--sm">
                    {speedKmh}
                    <span> km/h</span>
                </p>
            </div>
            <div className="ui-mock__overlay-panel ui-mock__overlay-panel--route">
                <p className="ui-mock__overlay-badge">Route</p>
                <p className="ui-mock__overlay-job ui-mock__overlay-job--lg">{route}</p>
                <p className="ui-mock__overlay-row">
                    <span>{fuelPct}% fuel</span>
                    <span>On time</span>
                </p>
            </div>
        </div>
    );
}
