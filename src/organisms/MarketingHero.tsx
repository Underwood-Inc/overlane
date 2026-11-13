import { Badge } from "../atoms/Badge.js";
import { ConsoleUIMock } from "../molecules/marketing/ConsoleUIMock.js";
import type { SiteGuideHash } from "../molecules/marketing/marketing-tabs.js";
import { BUY_NOW_URL } from "../molecules/marketing/product-url.js";
import { useLL } from "./OverlaneI18nProvider.js";

export type MarketingHeroProps = {
    onGuide: (hash: SiteGuideHash) => void;
    onTour: () => void;
};

export function MarketingHero({ onGuide, onTour }: MarketingHeroProps) {
    const LL = useLL();
    return (
        <header className="marketing-hero marketing-hero--landing">
            <p className="marketing-hero-eyebrow">{LL.marketing.heroEyebrow()}</p>
            <div className="marketing-hero-grid marketing-hero-grid--landing">
                <div className="marketing-hero-copy">
                    <h1 className="marketing-hero-title">{LL.marketing.heroTitle()}</h1>
                    <p className="marketing-hero-subhead">{LL.marketing.heroSubhead()}</p>
                    <div className="marketing-hero-actions">
                        <a className="marketing-btn marketing-btn--primary" href={BUY_NOW_URL} rel="noopener noreferrer">
                            {LL.marketing.heroCtaDownload()}
                        </a>
                        <button type="button" className="marketing-btn marketing-btn--ghost" onClick={onTour}>
                            {LL.marketing.heroCtaTour()}
                        </button>
                    </div>
                    <p className="marketing-hero-secondary-cta">
                        <button
                            type="button"
                            className="marketing-link-btn marketing-link-btn--subtle"
                            onClick={() => onGuide("#site-downloads")}
                        >
                            {LL.marketing.heroCtaDemo()}
                            <span className="marketing-hero-demo-hint"> — {LL.marketing.heroCtaDemoSub()}</span>
                        </button>
                    </p>
                    <p className="marketing-fine">{LL.marketing.proprietaryFine()}</p>
                </div>
                <div className="marketing-hero-mock" aria-hidden="true">
                    <ConsoleUIMock />
                </div>
            </div>
            <div className="marketing-proof-chips" role="list">
                <Badge>{LL.marketing.heroProofLive()}</Badge>
                <Badge>{LL.marketing.heroProofOverlays()}</Badge>
                <Badge>{LL.marketing.heroProofJournal()}</Badge>
                <Badge>{LL.marketing.heroProofWorker()}</Badge>
            </div>
        </header>
    );
}
