import { MarketingHero } from "../organisms/MarketingHero.js";
import { ArchitecturePanel, DataPanel, DesktopPanel, LivePanel, TrustPanel } from "../organisms/panels/SimplePanels.js";
import { FeaturesPanel } from "../organisms/panels/FeaturesPanel.js";
import { GuidesPanel } from "../organisms/panels/GuidesPanel.js";
import { MarketingTabBar } from "../molecules/marketing/MarketingTabBar.js";
import { useMarketingHash } from "../molecules/marketing/useMarketingHash.js";
import type { MarketingTabId } from "../molecules/marketing/marketing-tabs.js";
import type { ReactElement } from "react";
import { StickyBuyNowCard } from "../organisms/StickyBuyNowCard.js";
import { MarketingParallaxBackdrop } from "../organisms/MarketingParallaxBackdrop.js";
import { MarketingShowcase } from "../organisms/MarketingShowcase.js";
import { MarketingLocalePicker } from "../molecules/marketing/MarketingLocalePicker.js";
import { useLL } from "../organisms/OverlaneI18nProvider.js";

const PANELS: Record<MarketingTabId, () => ReactElement> = {
    features: FeaturesPanel,
    architecture: ArchitecturePanel,
    data: DataPanel,
    live: LivePanel,
    desktop: DesktopPanel,
    trust: TrustPanel,
    docs: GuidesPanel,
};

export function ProductMarketingView() {
    const LL = useLL();
    const { tab, setTab, goToGuide } = useMarketingHash();

    const ActivePanel = PANELS[tab];

    return (
        <div className="marketing-app">
            <MarketingParallaxBackdrop />
            <StickyBuyNowCard />
            <MarketingHero
                onGuide={goToGuide}
                onExplore={() => {
                    setTab("features");
                    requestAnimationFrame(() => document.getElementById("panel-features")?.scrollIntoView());
                }}
            />
            <MarketingShowcase />
            <main className="marketing-main marketing-main--elevated">
                <MarketingTabBar active={tab} onSelect={setTab} />
                <ActivePanel />
            </main>
            <footer className="marketing-footer">
                <MarketingLocalePicker />
                <p>{LL.marketing.footerCopyright()}</p>
                <p className="marketing-fine">{LL.marketing.footerGlossary()}</p>
            </footer>
        </div>
    );
}
