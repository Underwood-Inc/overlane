import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { OverlaysGridMock } from "./OverlaysGridMock.js";

describe("OverlaysGridMock", () => {
    test("shows overlay preset URLs", () => {
        render(<OverlaysGridMock />);
        expect(screen.getByText("/w/speed/speed")).toBeTruthy();
        const root = screen.getByText("Velocity").closest(".ui-mock--console");
        expect(root?.getAttribute("aria-hidden")).toBe("true");
    });
});
