import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { FlowPipeline } from "./FlowPipeline.js";

describe("FlowPipeline", () => {
    test("renders nodes and caption", () => {
        render(
            <FlowPipeline
                caption="Test flow"
                ariaLabel="Test"
                rows={[{ nodes: [{ label: "A", kind: "core" }, { label: "B", kind: "live" }] }]}
            />,
        );
        expect(screen.getByText("Test flow")).toBeTruthy();
        expect(screen.getByText("A")).toBeTruthy();
        expect(screen.getByText("B")).toBeTruthy();
    });
});
