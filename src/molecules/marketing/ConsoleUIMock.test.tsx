import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { OverlaneI18nProvider } from "../../organisms/OverlaneI18nProvider.js";
import { ConsoleUIMock } from "./ConsoleUIMock.js";

describe("ConsoleUIMock", () => {
    test("renders sample health and metrics decoratively", () => {
        render(
            <OverlaneI18nProvider initialLocale="en">
                <ConsoleUIMock />
            </OverlaneI18nProvider>,
        );
        const root = screen.getByText("Game linked").closest(".ui-mock--console");
        expect(root?.getAttribute("aria-hidden")).toBe("true");
        expect(screen.getByText("Live driving")).toBeTruthy();
        expect(screen.getByText("Hamburg → Prague")).toBeTruthy();
    });
});
