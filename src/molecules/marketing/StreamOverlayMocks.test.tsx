import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MOCK_SESSION } from "./mock-session-fixture.js";
import { StreamOverlayMocks } from "./StreamOverlayMocks.js";

describe("StreamOverlayMocks", () => {
    test("renders multiple overlay variants", () => {
        const { container } = render(<StreamOverlayMocks />);
        const root = container.querySelector(".ui-mock--stream-stack");
        expect(root?.getAttribute("aria-hidden")).toBe("true");
        expect(screen.getAllByText(String(MOCK_SESSION.speedKmh)).length).toBeGreaterThan(1);
    });
});
