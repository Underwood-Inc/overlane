import { FeatureAreaGrid } from "../molecules/marketing/FeatureAreaGrid.js";
import { homeOutcomeFeatureAreas } from "../molecules/marketing/product-feature-catalog.js";
import { useLL } from "./OverlaneI18nProvider.js";

export function MarketingOutcomesSection() {
    const LL = useLL();
    const scroll = LL.marketing.homeScroll;
    return (
        <section className="marketing-home-section" id="home-outcomes" aria-labelledby="home-outcomes-heading">
            <header className="marketing-home-section__head">
                <h2 id="home-outcomes-heading">{scroll.outcomesTitle()}</h2>
                <p className="marketing-lead marketing-home-section__lead">{scroll.outcomesLead()}</p>
            </header>
            <div className="marketing-outcomes-grid">
                <FeatureAreaGrid areas={homeOutcomeFeatureAreas()} />
            </div>
        </section>
    );
}
