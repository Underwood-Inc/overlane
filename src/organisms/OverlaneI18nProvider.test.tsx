import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { cleanup } from "@testing-library/react";
import { MarketingLocalePicker } from "../molecules/marketing/MarketingLocalePicker.js";
import { OverlaneI18nProvider, useLL } from "./OverlaneI18nProvider.js";

afterEach(() => cleanup());

function LocaleProbe() {
    const LL = useLL();
    return <span data-testid="tab-features">{LL.marketing.tabs.features()}</span>;
}

/**
 * @description React provider must re-render consumers when setOverlaneLocale completes.
 */
test("[FR-OL-I18N-001] setLocale through picker refreshes useLL strings", async () => {
    render(
        <OverlaneI18nProvider initialLocale="en">
            <MarketingLocalePicker />
            <LocaleProbe />
        </OverlaneI18nProvider>,
    );
    expect(screen.getByTestId("tab-features").textContent).toBe("Features");
    fireEvent.change(await screen.findByLabelText("Display language"), { target: { value: "de" } });
    await waitFor(() => {
        expect(screen.getByTestId("tab-features").textContent).not.toMatch(/^\[de\]/);
        expect(screen.getByTestId("tab-features").textContent).not.toBe("Features");
    });
});
