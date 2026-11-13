import { useCallback, useEffect, useMemo, useState } from "react";
import { marketingTabs, tabForSiteHash, type MarketingTabId, type SiteGuideHash } from "./marketing-tabs.js";

const POWER_TABS = new Set<MarketingTabId>(["architecture", "data", "live", "trust", "desktop"]);

function tabFromSearch(): MarketingTabId | null {
    const raw = new URLSearchParams(window.location.search).get("tab");
    if (!raw) {
        return null;
    }
    return marketingTabs().some((t) => t.id === raw) ? (raw as MarketingTabId) : null;
}

export function useMarketingHash(initial: MarketingTabId = "features") {
    const [tab, setTabState] = useState<MarketingTabId>(() => tabFromSearch() ?? initial);

    const powerUserOpen = useMemo(() => POWER_TABS.has(tab), [tab]);

    const syncFromLocation = useCallback(() => {
        const fromQuery = tabFromSearch();
        if (fromQuery) {
            setTabState(fromQuery);
        }
        const hash = window.location.hash;
        const fromGuide = tabForSiteHash(hash);
        if (fromGuide) {
            setTabState(fromGuide);
            const id = hash.slice(1);
            requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
            return;
        }
        const match = marketingTabs().find((t) => hash === `#panel-${t.id}`);
        if (match) {
            setTabState(match.id);
            if (POWER_TABS.has(match.id)) {
                requestAnimationFrame(() => {
                    const details = document.getElementById("marketing-power-users");
                    if (details instanceof HTMLDetailsElement) {
                        details.open = true;
                    }
                    document.getElementById(`panel-${match.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                });
                return;
            }
            if (match.id === "features") {
                requestAnimationFrame(() => document.getElementById("home-outcomes")?.scrollIntoView({ behavior: "smooth", block: "start" }));
                return;
            }
            if (match.id === "desktop") {
                requestAnimationFrame(() => document.getElementById("home-install")?.scrollIntoView({ behavior: "smooth", block: "start" }));
                return;
            }
            requestAnimationFrame(() => document.getElementById(`panel-${match.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }));
        }
    }, []);

    useEffect(() => {
        syncFromLocation();
        window.addEventListener("hashchange", syncFromLocation);
        return () => window.removeEventListener("hashchange", syncFromLocation);
    }, [syncFromLocation]);

    const setTab = useCallback((id: MarketingTabId) => {
        setTabState(id);
        window.history.replaceState(null, "", `?tab=${id}#panel-${id}`);
    }, []);

    const goToGuide = useCallback((hash: SiteGuideHash) => {
        setTabState("docs");
        window.location.hash = hash;
    }, []);

    return { tab, setTab, goToGuide, powerUserOpen };
}
