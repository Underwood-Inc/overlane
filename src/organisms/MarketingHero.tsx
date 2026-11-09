import { Badge } from "../atoms/Badge.js";
import { MarketingCode } from "../atoms/MarketingCode.js";
import { StatTile } from "../atoms/StatTile.js";
import { GlossaryTerm } from "../molecules/glossary/GlossaryProvider.js";
import type { SiteGuideHash } from "../molecules/marketing/marketing-tabs.js";
import { useLL } from "./OverlaneI18nProvider.js";

export type MarketingHeroProps = {
    onGuide: (hash: SiteGuideHash) => void;
    onExplore: () => void;
};

export function MarketingHero({ onGuide, onExplore }: MarketingHeroProps) {
    const LL = useLL();
    return (
        <header className="marketing-hero marketing-hero--landing">
            <div className="marketing-hero-grid marketing-hero-grid--landing">
                <div className="marketing-hero-copy">
                    <h1>{LL.marketing.heroTitle()}</h1>
                    <p className="marketing-tagline">
                        <span className="em">{LL.marketing.heroTaglineLead()}</span>
                        {LL.marketing.heroTaglineRest()}
                        <span className="em">{LL.marketing.heroTaglineEm()}</span>
                        {LL.marketing.heroTaglineEnd()}
                    </p>
                    <div className="marketing-badge-row">
                        <Badge>{LL.marketing.badgeLocalFirst()}</Badge>
                        <Badge>{LL.marketing.badgeWindows()}</Badge>
                        <Badge>{LL.marketing.badgeNoCloud()}</Badge>
                        <Badge>{LL.marketing.badgeStreamer()}</Badge>
                    </div>
                    <p className="marketing-hero-cta">
                        <button type="button" className="marketing-link-btn" onClick={() => onGuide("#site-player-guide")}>
                            {LL.marketing.playerGuide()}
                        </button>
                        <button
                            type="button"
                            className="marketing-link-btn"
                            onClick={() => onGuide("#site-getting-started")}
                        >
                            {LL.marketing.gettingStarted()}
                        </button>
                        <button type="button" className="marketing-link-btn" onClick={onExplore}>
                            {LL.marketing.exploreFeatures()}
                        </button>
                    </p>
                    <p className="marketing-fine">{LL.marketing.proprietaryFine()}</p>
                </div>
                <div className="marketing-stat-grid marketing-hero-stats">
                    <StatTile
                        label={LL.marketing.statLive()}
                        detail={
                            <>
                                <GlossaryTerm id="sse">SSE</GlossaryTerm> overlay panels from{" "}
                                <GlossaryTerm id="mmf">shared memory</GlossaryTerm>
                            </>
                        }
                    />
                    <StatTile label={LL.marketing.statArchive()} detail={LL.marketing.statArchiveDetail()} />
                    <StatTile
                        label={LL.marketing.statJournal()}
                        detail={
                            <>
                                On-disk <MarketingCode>.log</MarketingCode> files + line viewer
                            </>
                        }
                    />
                    <StatTile label={LL.marketing.statVault()} detail={LL.marketing.statVaultDetail()} />
                </div>
            </div>
        </header>
    );
}
