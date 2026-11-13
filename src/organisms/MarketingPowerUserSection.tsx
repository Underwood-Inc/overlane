import { ArchitecturePanel, DataPanel, LivePanel, TrustPanel } from "./panels/SimplePanels.js";
import { useLL } from "./OverlaneI18nProvider.js";

export type MarketingPowerUserSectionProps = {
    open: boolean;
};

export function MarketingPowerUserSection({ open }: MarketingPowerUserSectionProps) {
    const scroll = useLL().marketing.homeScroll;

    return (
        <details className="marketing-power-user" id="marketing-power-users" open={open}>
            <summary className="marketing-power-user__summary">
                <span className="marketing-power-user__title">{scroll.powerUsersTitle()}</span>
                <span className="marketing-power-user__hint">{scroll.powerUsersSummary()}</span>
            </summary>
            <div className="marketing-power-user__body">
                <ArchitecturePanel />
                <DataPanel />
                <LivePanel />
                <TrustPanel />
            </div>
        </details>
    );
}
