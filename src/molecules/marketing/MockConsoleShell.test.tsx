import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { OverlaneI18nProvider } from "../../organisms/OverlaneI18nProvider.js";
import { MockConsoleShell } from "./MockConsoleShell.js";

describe("MockConsoleShell", () => {
    test("marks active nav and is aria-hidden", () => {
        render(
            <OverlaneI18nProvider initialLocale="en">
                <MockConsoleShell activeNav="archive">
                    <p>Inner</p>
                </MockConsoleShell>
            </OverlaneI18nProvider>,
        );
        const root = screen.getByText("Inner").closest(".ui-mock--console");
        expect(root?.getAttribute("aria-hidden")).toBe("true");
        const active = screen.getAllByText("Archive").find((el) => el.closest("li")?.classList.contains("is-active"));
        expect(active).toBeTruthy();
    });
});
