import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MarketingCode } from "./MarketingCode.js";

describe("MarketingCode", () => {
    test("renders path text in a code element", () => {
        render(<MarketingCode>/builder</MarketingCode>);
        const el = screen.getByText("/builder");
        expect(el.tagName).toBe("CODE");
        expect(el.className).toContain("marketing-code");
    });
});
