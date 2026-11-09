import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { JournalMock } from "./JournalMock.js";

describe("JournalMock", () => {
    test("lists journal rows decoratively", () => {
        render(<JournalMock />);
        expect(screen.getByText("Log files", { selector: ".ui-mock__section-label" })).toBeTruthy();
        expect(screen.queryByText(/Add note/i)).toBeNull();
        const root = screen.getByText(/Capture connected/).closest(".ui-mock--console");
        expect(root?.getAttribute("aria-hidden")).toBe("true");
    });
});
