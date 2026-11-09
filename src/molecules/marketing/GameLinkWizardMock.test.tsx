import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { OverlaneI18nProvider } from "../../organisms/OverlaneI18nProvider.js";
import { GameLinkWizardMock } from "./GameLinkWizardMock.js";

describe("GameLinkWizardMock", () => {
    test("is aria-hidden with wizard steps", () => {
        render(
            <OverlaneI18nProvider initialLocale="en">
                <GameLinkWizardMock />
            </OverlaneI18nProvider>,
        );
        const root = screen.getByText(/Link your game/i).closest(".ui-mock--wizard");
        expect(root?.getAttribute("aria-hidden")).toBe("true");
        expect(screen.getByText(/Test live speed/i)).toBeTruthy();
    });
});
