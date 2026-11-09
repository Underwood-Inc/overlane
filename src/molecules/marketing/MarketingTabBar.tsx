import { useLL } from "../../organisms/OverlaneI18nProvider.js";
import { marketingTabs, type MarketingTabId } from "./marketing-tabs.js";

export type MarketingTabBarProps = {
    active: MarketingTabId;
    onSelect: (id: MarketingTabId) => void;
};

export function MarketingTabBar({ active, onSelect }: MarketingTabBarProps) {
    const LL = useLL();
    return (
        <div className="marketing-tab-list" role="tablist" aria-label={LL.marketing.tabsAria()}>
            {marketingTabs().map((t) => (
                <button
                    key={t.id}
                    type="button"
                    role="tab"
                    id={`tab-${t.id}`}
                    className="marketing-tab-btn"
                    aria-selected={active === t.id}
                    aria-controls={`panel-${t.id}`}
                    onClick={() => onSelect(t.id)}
                >
                    {t.label}
                </button>
            ))}
        </div>
    );
}
