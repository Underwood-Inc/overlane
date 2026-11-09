import { useLL } from "./OverlaneI18nProvider.js";
import { ShowcaseCarousel } from "./ShowcaseCarousel.js";

export function MarketingShowcase() {
    const LL = useLL();
    const s = LL.marketing.showcase;
    return (
        <section className="marketing-showcase" aria-labelledby="marketing-showcase-heading">
            <div className="marketing-showcase__intro">
                <h2 id="marketing-showcase-heading">{s.heading()}</h2>
                <p className="marketing-lead">{s.lead()}</p>
            </div>

            <div className="marketing-showcase__carousel-wrap">
                <h3 className="marketing-showcase__gallery-label" id="marketing-showcase-gallery-heading">
                    {s.galleryLabel()}
                </h3>
                <ShowcaseCarousel />
            </div>

            <p className="marketing-showcase__note marketing-fine">{s.note()}</p>
        </section>
    );
}
