import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { cleanup } from "@testing-library/react";
import { OverlaneI18nProvider } from "../../organisms/OverlaneI18nProvider.js";
import { StickyBuyNowCard } from "../../organisms/StickyBuyNowCard.js";
import { GlossaryProvider, GlossaryTerm } from "../glossary/GlossaryProvider.js";
import { ConsoleUIMock } from "./ConsoleUIMock.js";
import { GameLinkWizardMock } from "./GameLinkWizardMock.js";
import { SettingsConnectionMock } from "./SettingsConnectionMock.js";

afterEach(() => cleanup());

/**
 * @description Residual marketing chrome uses LL when locale is de.
 * @linked docs/console/i18n.md
 */
test("[FR-OL-I18N-001] sticky buy label comes from LL for de", async () => {
    render(
        <OverlaneI18nProvider initialLocale="de">
            <StickyBuyNowCard />
        </OverlaneI18nProvider>,
    );
    await waitFor(() => {
        expect(screen.getByRole("link", { name: "[de] BUY NOW" })).toBeTruthy();
    });
});

test("[FR-OL-I18N-001] glossary hover body uses de copy", async () => {
    render(
        <OverlaneI18nProvider initialLocale="de">
            <GlossaryProvider>
                <GlossaryTerm id="sse">live feed</GlossaryTerm>
            </GlossaryProvider>
        </OverlaneI18nProvider>,
    );
    fireEvent.mouseEnter(screen.getByText("live feed"));
    await waitFor(() => {
        const tip = screen.getByRole("tooltip");
        expect(tip.textContent).toMatch(/one-way HTTP/i);
    });
});

test("[FR-OL-I18N-001] mock console nav and chrome use de copy", async () => {
    render(
        <OverlaneI18nProvider initialLocale="de">
            <ConsoleUIMock />
        </OverlaneI18nProvider>,
    );
    await waitFor(() => {
        expect(screen.getByText("[de] Game linked")).toBeTruthy();
        expect(screen.getAllByText("[de] Home").length).toBeGreaterThan(0);
    });
});

test("[FR-OL-I18N-001] game link wizard labels use de copy", async () => {
    render(
        <OverlaneI18nProvider initialLocale="de">
            <GameLinkWizardMock />
        </OverlaneI18nProvider>,
    );
    await waitFor(() => {
        expect(screen.getByText("[de] Game setup")).toBeTruthy();
        expect(screen.getByText("[de] Install your telemetry plugin")).toBeTruthy();
    });
});

test("[FR-OL-I18N-001] settings connection labels use de copy", async () => {
    render(
        <OverlaneI18nProvider initialLocale="de">
            <SettingsConnectionMock />
        </OverlaneI18nProvider>,
    );
    await waitFor(() => {
        expect(screen.getByText("[de] HTTP server")).toBeTruthy();
        expect(screen.getByText("[de] Bind address")).toBeTruthy();
    });
});
