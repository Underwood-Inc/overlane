import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MarketingCard } from "./MarketingCard.js";

describe("MarketingCard", () => {
    test("renders title and body", () => {
        render(
            <MarketingCard title="Hello">
                <p>Body</p>
            </MarketingCard>,
        );
        expect(screen.getByRole("heading", { name: "Hello" })).toBeTruthy();
        expect(screen.getByText("Body")).toBeTruthy();
    });
});
