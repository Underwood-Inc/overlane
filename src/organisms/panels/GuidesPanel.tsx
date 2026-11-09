import { MarketingCard } from "../../atoms/MarketingCard.js";
import { BUY_NOW_URL } from "../../molecules/marketing/product-url.js";
import {
    downloadGuide,
    gettingStartedGuide,
    licenseNotice,
    playerGuide,
} from "../../molecules/guides/guide-content.js";
import { SiteGuideBlock } from "../../molecules/guides/SiteGuideBlock.js";
import { useLL } from "../OverlaneI18nProvider.js";

export function GuidesPanel() {
    const LL = useLL();
    const g = LL.marketing.guidesPanel;
    return (
        <section className="marketing-tab-panel" id="panel-docs" role="tabpanel" aria-labelledby="tab-docs">
            <MarketingCard title={g.onPageTitle()}>
                <p className="marketing-lead">{g.onPageLead()}</p>
                <ul className="marketing-link-list">
                    <li>
                        <a href="#site-downloads">{g.linkDownloads()}</a>
                    </li>
                    <li>
                        <a href="#site-getting-started">{g.linkGettingStarted()}</a>
                    </li>
                    <li>
                        <a href="#site-player-guide">{g.linkPlayerGuide()}</a>
                    </li>
                    <li>
                        <a href="#site-license">{g.linkLicense()}</a>
                    </li>
                </ul>
            </MarketingCard>
            <SiteGuideBlock section={downloadGuide()} />
            <MarketingCard title={g.getOverlaneTitle()}>
                <p>
                    <a className="marketing-link" href={BUY_NOW_URL} rel="noopener noreferrer">
                        {BUY_NOW_URL}
                    </a>
                </p>
            </MarketingCard>
            <SiteGuideBlock section={gettingStartedGuide()} />
            <SiteGuideBlock section={playerGuide()} />
            <SiteGuideBlock section={licenseNotice()} />
        </section>
    );
}
