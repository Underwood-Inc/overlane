import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MarketingShowcase } from "./MarketingShowcase.js";
import { OverlaneI18nProvider } from "./OverlaneI18nProvider.js";

describe("MarketingShowcase", () => {
    test("renders three-step manual carousel tour", () => {
        render(
            <OverlaneI18nProvider initialLocale="en">
                <MarketingShowcase />
            </OverlaneI18nProvider>,
        );
        expect(screen.getByRole("heading", { name: /Three steps beside the game/i })).toBeTruthy();
        expect(screen.getByRole("heading", { name: /Product tour/i })).toBeTruthy();
        expect(screen.getByRole("heading", { level: 3, name: /Home · Live driving/i })).toBeTruthy();
        expect(screen.getAllByRole("tab")).toHaveLength(3);
        expect(screen.getByRole("tablist", { name: /Product samples/i })).toBeTruthy();
        expect(screen.getByText(/Illustrative samples/i)).toBeTruthy();
    });
});
