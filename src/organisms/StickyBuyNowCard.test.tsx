import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { StickyBuyNowCard } from "./StickyBuyNowCard.js";
import { BUY_NOW_URL } from "../molecules/marketing/product-url.js";
import { OverlaneI18nProvider } from "./OverlaneI18nProvider.js";

describe("StickyBuyNowCard", () => {
    test("renders real anchor visible from load", () => {
        render(
            <OverlaneI18nProvider initialLocale="en">
                <StickyBuyNowCard />
            </OverlaneI18nProvider>,
        );
        const link = screen.getByRole("link", { name: "BUY NOW" });
        expect(link.tagName).toBe("A");
        expect(link.getAttribute("href")).toBe(BUY_NOW_URL);
        const card = link.closest(".sticky-buy-card--dock");
        expect(card).toBeTruthy();
        expect(card?.classList.contains("sticky-buy-card--visible")).toBe(true);
    });
});
