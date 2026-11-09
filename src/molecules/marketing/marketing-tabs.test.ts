import { describe, expect, test } from "vitest";
import { initOverlaneI18n } from "../../i18n/overlane-i18n.js";
import { marketingTabs, tabForSiteHash } from "./marketing-tabs.js";

describe("marketing-tabs", () => {
    initOverlaneI18n("en");

    test("tabForSiteHash routes guides to docs", () => {
        expect(tabForSiteHash("#site-player-guide")).toBe("docs");
        expect(tabForSiteHash("#unknown")).toBeNull();
    });

    test("marketingTabs includes features and docs", () => {
        expect(marketingTabs().map((t) => t.id)).toContain("features");
        expect(marketingTabs().map((t) => t.id)).toContain("docs");
    });
});
