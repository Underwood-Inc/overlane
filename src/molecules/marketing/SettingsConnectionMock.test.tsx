import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { OverlaneI18nProvider } from "../../organisms/OverlaneI18nProvider.js";
import { SettingsConnectionMock } from "./SettingsConnectionMock.js";

describe("SettingsConnectionMock", () => {
    test("shows bind address and port", () => {
        render(
            <OverlaneI18nProvider initialLocale="en">
                <SettingsConnectionMock />
            </OverlaneI18nProvider>,
        );
        expect(screen.getByText("8080")).toBeTruthy();
        const root = screen.getByText("HTTP server").closest(".ui-mock--console");
        expect(root?.getAttribute("aria-hidden")).toBe("true");
    });
});
