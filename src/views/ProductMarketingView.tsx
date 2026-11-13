import { MarketingHero } from "../organisms/MarketingHero.js";
import { GuidesPanel } from "../organisms/panels/GuidesPanel.js";
import { useMarketingHash } from "../molecules/marketing/useMarketingHash.js";
import { StickyBuyNowCard } from "../organisms/StickyBuyNowCard.js";
import { MarketingParallaxBackdrop } from "../organisms/MarketingParallaxBackdrop.js";
import { MarketingShowcase } from "../organisms/MarketingShowcase.js";
import { MarketingLocalePicker } from "../molecules/marketing/MarketingLocalePicker.js";
import { MarketingPageAnchors } from "../molecules/marketing/MarketingPageAnchors.js";
import { InstallOptionsSection } from "../molecules/marketing/InstallOptionsSection.js";
import { MarketingOutcomesSection } from "../organisms/MarketingOutcomesSection.js";
import { MarketingPowerUserSection } from "../organisms/MarketingPowerUserSection.js";
import { useLL } from "../organisms/OverlaneI18nProvider.js";

export function ProductMarketingView() {
    const LL = useLL();
    const { goToGuide, powerUserOpen } = useMarketingHash();

    const scrollToTour = () => {
        document.getElementById("product-tour")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="marketing-app marketing-app--scroll">
            <MarketingParallaxBackdrop />
            <StickyBuyNowCard />
            <MarketingPageAnchors />
            <MarketingHero onGuide={goToGuide} onTour={scrollToTour} />
            <MarketingShowcase />
            <main className="marketing-main marketing-main--scroll">
                <MarketingOutcomesSection />
                <InstallOptionsSection />
                <MarketingPowerUserSection open={powerUserOpen} />
                <GuidesPanel />
            </main>
            <footer className="marketing-footer">
                <MarketingLocalePicker />
                <p>{LL.marketing.footerCopyright()}</p>
                <p className="marketing-fine">{LL.marketing.footerGlossary()}</p>
            </footer>
        </div>
    );
}
