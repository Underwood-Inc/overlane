import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MarketingShowcase } from "./MarketingShowcase.js";
import { OverlaneI18nProvider } from "./OverlaneI18nProvider.js";

describe("MarketingShowcase", () => {
    test("renders auto-rotating carousel tour", () => {
        render(
            <OverlaneI18nProvider initialLocale="en">
                <MarketingShowcase />
            </OverlaneI18nProvider>,
        );
        expect(screen.getByRole("heading", { name: /console you run beside the game/i })).toBeTruthy();
        expect(screen.getByRole("heading", { name: /Tour the product/i })).toBeTruthy();
        expect(screen.getByText("Live driving")).toBeTruthy();
        expect(screen.getByRole("tablist", { name: /Product samples/i })).toBeTruthy();
        expect(screen.getByText(/Illustrative samples/i)).toBeTruthy();
    });
});
