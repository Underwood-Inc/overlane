import { describe, expect, test } from "vitest";
import { BUY_NOW_URL, GITHUB_RELEASES_URL } from "./product-url.js";

describe("product-url", () => {
    test("buy now points at short.army overlane", () => {
        expect(BUY_NOW_URL).toBe("https://short.army/overlane");
    });

    test("releases point at public overlane GitHub", () => {
        expect(GITHUB_RELEASES_URL).toBe("https://github.com/Underwood-Inc/overlane/releases");
    });
});
