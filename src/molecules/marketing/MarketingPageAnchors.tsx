import { useLL } from "../../organisms/OverlaneI18nProvider.js";

export function MarketingPageAnchors() {
    const scroll = useLL().marketing.homeScroll;

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav className="marketing-page-anchors" aria-label={scroll.anchorsAria()}>
            <button type="button" className="marketing-page-anchors__link" onClick={() => scrollTo("product-tour")}>
                {scroll.anchorTour()}
            </button>
            <button type="button" className="marketing-page-anchors__link" onClick={() => scrollTo("home-outcomes")}>
                {scroll.anchorOutcomes()}
            </button>
            <button type="button" className="marketing-page-anchors__link" onClick={() => scrollTo("home-install")}>
                {scroll.anchorInstall()}
            </button>
            <button type="button" className="marketing-page-anchors__link" onClick={() => scrollTo("panel-docs")}>
                {scroll.anchorGuides()}
            </button>
        </nav>
    );
}
