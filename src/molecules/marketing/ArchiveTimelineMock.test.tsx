import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { ArchiveTimelineMock } from "./ArchiveTimelineMock.js";

describe("ArchiveTimelineMock", () => {
    test("is decorative and shows archive timeline label", () => {
        render(<ArchiveTimelineMock />);
        const root = screen.getByText(/Archive timeline/i).closest(".ui-mock--console");
        expect(root?.getAttribute("aria-hidden")).toBe("true");
        const active = screen.getAllByText("Archive").find((el) => el.className.includes("is-active"));
        expect(active).toBeTruthy();
    });
});
