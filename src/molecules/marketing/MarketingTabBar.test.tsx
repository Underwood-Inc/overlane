import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OverlaneI18nProvider } from "../../organisms/OverlaneI18nProvider.js";
import { MarketingTabBar } from "./MarketingTabBar.js";

describe("MarketingTabBar", () => {
    test("calls onSelect when tab clicked", async () => {
        const onSelect = vi.fn();
        render(
            <OverlaneI18nProvider initialLocale="en">
                <MarketingTabBar active="features" onSelect={onSelect} />
            </OverlaneI18nProvider>,
        );
        await userEvent.click(screen.getByRole("tab", { name: "Desktop" }));
        expect(onSelect).toHaveBeenCalledWith("desktop");
    });
});
