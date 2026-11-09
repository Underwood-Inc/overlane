import { describe, expect, test } from "vitest";
import { initOverlaneI18n } from "../../i18n/overlane-i18n.js";
import { gettingStartedGuide, playerGuide } from "./guide-content.js";

describe("guide-content", () => {
    initOverlaneI18n("en");

    test("guide ids match site anchors", () => {
        expect(gettingStartedGuide().id).toBe("site-getting-started");
        expect(playerGuide().id).toBe("site-player-guide");
    });

    test("copy has no markdown file references", () => {
        const text = [...(gettingStartedGuide().bullets ?? []), ...playerGuide().paragraphs].join(" ");
        expect(text).not.toMatch(/\.md/);
    });
});
