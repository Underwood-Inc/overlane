import { getLL } from "../../i18n/overlane-i18n.js";
import { MOCK_SESSION } from "./mock-session-fixture.js";

/** Decorative stream overlay variants (compact stack for showcase). */
export function StreamOverlayMocks() {
    const { speedKmh, fuelPct, gear, route } = MOCK_SESSION;
    const mocks = getLL().marketing.mocks;

    return (
        <div className="ui-mock ui-mock--stream-stack" aria-hidden="true">
            <div className="ui-mock__overlay-panel ui-mock__overlay-panel--primary">
                <p className="ui-mock__overlay-speed">
                    {speedKmh} <span>{mocks.speedUnit()}</span>
                </p>
                <div className="ui-mock__overlay-row">
                    <span>{mocks.fuelLabel({ pct: fuelPct })}</span>
                    <span>{mocks.gearLabel({ gear })}</span>
                </div>
                <p className="ui-mock__overlay-job">{route}</p>
            </div>
            <div className="ui-mock__overlay-panel ui-mock__overlay-panel--minimal">
                <p className="ui-mock__overlay-speed ui-mock__overlay-speed--sm">
                    {speedKmh}
                    <span>{mocks.speedUnitLeadingSpace()}</span>
                </p>
            </div>
            <div className="ui-mock__overlay-panel ui-mock__overlay-panel--route">
                <p className="ui-mock__overlay-badge">{mocks.routeBadge()}</p>
                <p className="ui-mock__overlay-job ui-mock__overlay-job--lg">{route}</p>
                <p className="ui-mock__overlay-row">
                    <span>{mocks.fuelPercent({ pct: fuelPct })}</span>
                    <span>{mocks.onTime()}</span>
                </p>
            </div>
        </div>
    );
}
