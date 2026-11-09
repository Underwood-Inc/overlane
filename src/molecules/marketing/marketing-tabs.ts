/** Main marketing tab ids — drives ProductMarketingView panels. */

export type MarketingTabId =
    | "features"
    | "architecture"
    | "data"
    | "live"
    | "desktop"
    | "trust"
    | "docs";

import { getLL } from "../../i18n/overlane-i18n.js";

export function marketingTabs(): { id: MarketingTabId; label: string }[] {
    const LL = getLL();
    return [
        { id: "features", label: LL.marketing.tabs.features() },
        { id: "architecture", label: LL.marketing.tabs.architecture() },
        { id: "data", label: LL.marketing.tabs.data() },
        { id: "live", label: LL.marketing.tabs.live() },
        { id: "desktop", label: LL.marketing.tabs.desktop() },
        { id: "trust", label: LL.marketing.tabs.trust() },
        { id: "docs", label: LL.marketing.tabs.docs() },
    ];
}

export type SiteGuideHash = "#site-downloads" | "#site-getting-started" | "#site-player-guide" | "#site-license";

export const SITE_GUIDE_HASHES = new Set<string>([
    "#site-downloads",
    "#site-getting-started",
    "#site-player-guide",
    "#site-license",
]);

export function tabForSiteHash(hash: string): MarketingTabId | null {
    return SITE_GUIDE_HASHES.has(hash) ? "docs" : null;
}
