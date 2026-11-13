import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, expect, test } from "vitest";
import { cleanup } from "@testing-library/react";
import { OverlaneI18nProvider, useLL } from "../../organisms/OverlaneI18nProvider.js";
import { MarketingLocalePicker } from "./MarketingLocalePicker.js";
import { readMarketingUiLocale } from "../locale/resolveOverlaneLocale.js";

beforeEach(() => {
    localStorage.clear();
});

afterEach(() => cleanup());

/**
 * @description Footer-only locale control with styled wrapper and persistence.
 * @linked docs/console/i18n.md
 */
test("[FR-OL-I18N-001] renders footer picker without dock placement", () => {
    const { container } = render(
        <OverlaneI18nProvider initialLocale="en">
            <MarketingLocalePicker />
        </OverlaneI18nProvider>,
    );
    expect(container.querySelector(".marketing-locale-picker--dock")).toBeNull();
    expect(container.querySelector(".marketing-locale-picker--footer")).toBeTruthy();
    expect(container.querySelector(".marketing-locale-picker__control")).toBeTruthy();
    expect(screen.getByTestId("marketing-locale-picker").querySelector(".marketing-locale-picker__select")).toBeTruthy();
});

test("[FR-OL-I18N-001] locale select persists overlane.marketing.uiLocale", async () => {
    render(
        <OverlaneI18nProvider initialLocale="en">
            <MarketingLocalePicker />
        </OverlaneI18nProvider>,
    );
    const select = await screen.findByLabelText("Display language");
    fireEvent.change(select, { target: { value: "de" } });
    expect(readMarketingUiLocale()).toBe("de");
});

test("[FR-OL-I18N-001] changing locale updates provider-visible strings", async () => {
    function Probe() {
        const LL = useLL();
        return <span data-testid="tab-features">{LL.marketing.tabs.features()}</span>;
    }
    render(
        <OverlaneI18nProvider initialLocale="en">
            <MarketingLocalePicker />
            <Probe />
        </OverlaneI18nProvider>,
    );
    expect(screen.getByTestId("tab-features").textContent).toBe("Features");
    const select = await screen.findByLabelText("Display language");
    fireEvent.change(select, { target: { value: "de" } });
    await waitFor(() => {
        expect(screen.getByLabelText("[de] Display language")).toBeTruthy();
        expect(screen.getByTestId("tab-features").textContent).toBe("[de] Features");
    });
});
