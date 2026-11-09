import { useCallback, useEffect, useState } from "react";
import { marketingTabs, tabForSiteHash, type MarketingTabId, type SiteGuideHash } from "./marketing-tabs.js";

export function useMarketingHash(initial: MarketingTabId = "features") {
    const [tab, setTabState] = useState<MarketingTabId>(initial);

    const syncFromLocation = useCallback(() => {
        const hash = window.location.hash;
        const fromGuide = tabForSiteHash(hash);
        if (fromGuide) {
            setTabState(fromGuide);
            const id = hash.slice(1);
            requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
            return;
        }
        const match = marketingTabs().find((t) => hash === `#panel-${t.id}`);
        if (match) setTabState(match.id);
    }, []);

    useEffect(() => {
        syncFromLocation();
        window.addEventListener("hashchange", syncFromLocation);
        return () => window.removeEventListener("hashchange", syncFromLocation);
    }, [syncFromLocation]);

    const setTab = useCallback((id: MarketingTabId) => {
        setTabState(id);
        window.history.replaceState(null, "", `#panel-${id}`);
    }, []);

    const goToGuide = useCallback((hash: SiteGuideHash) => {
        setTabState("docs");
        window.location.hash = hash;
    }, []);

    return { tab, setTab, goToGuide };
}
