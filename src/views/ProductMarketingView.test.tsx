import { describe, expect, test, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { ProductMarketingView } from "./ProductMarketingView.js";
import { GlossaryProvider } from "../molecules/glossary/GlossaryProvider.js";
import { OverlaneI18nProvider } from "../organisms/OverlaneI18nProvider.js";

afterEach(() => cleanup());

describe("ProductMarketingView", () => {
    test("renders hero and default features tab content", () => {
        render(
            <OverlaneI18nProvider initialLocale="en">
                <GlossaryProvider>
                    <ProductMarketingView />
                </GlossaryProvider>
            </OverlaneI18nProvider>,
        );
        expect(screen.getByRole("heading", { name: "Overlane" })).toBeTruthy();
        expect(screen.getByRole("heading", { name: /console you run beside the game/i })).toBeTruthy();
        expect(screen.getByText(/Built for the long haul/i)).toBeTruthy();
        expect(screen.queryByRole("link", { name: /private/i })).toBeNull();
    });

    test("[FR-OL-I18N-001] locale picker appears only in footer", () => {
        const { container } = render(
            <OverlaneI18nProvider initialLocale="en">
                <GlossaryProvider>
                    <ProductMarketingView />
                </GlossaryProvider>
            </OverlaneI18nProvider>,
        );
        expect(screen.getAllByTestId("marketing-locale-picker")).toHaveLength(1);
        expect(container.querySelector(".marketing-locale-picker--dock")).toBeNull();
        expect(container.querySelector(".marketing-locale-picker--footer")).toBeTruthy();
    });
});
