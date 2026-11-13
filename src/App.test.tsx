import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./App.js";

describe("App", () => {
    test("mounts marketing view", () => {
        render(<App />);
        expect(screen.getByRole("heading", { name: /Drive with a live map/i })).toBeTruthy();
    });
});
