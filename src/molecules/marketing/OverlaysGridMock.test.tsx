import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { OverlaysGridMock } from "./OverlaysGridMock.js";

describe("OverlaysGridMock", () => {
    test("shows overlay preset URLs without invented route status badges", () => {
        render(<OverlaysGridMock />);
        expect(screen.getByText("/speed")).toBeTruthy();
        expect(screen.getByText("/inputs")).toBeTruthy();
        expect(screen.getByText("/job")).toBeTruthy();
        expect(screen.getByText("/dashboard")).toBeTruthy();
        expect(screen.queryByText(/^Live$/i)).toBeNull();
        expect(screen.queryByText(/^Ready$/i)).toBeNull();
        const root = screen.getByText("Velocity").closest(".ui-mock--console");
        expect(root?.getAttribute("aria-hidden")).toBe("true");
        const cards = root?.querySelectorAll(".ui-mock__overlay-card");
        expect(cards?.length).toBe(4);
        for (const card of cards ?? []) {
            expect(card.querySelector(".ui-mock__pill")).toBeNull();
        }
    });
});
