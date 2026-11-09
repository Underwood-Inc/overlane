import { describe, expect, test } from "vitest";
import { BUY_NOW_URL } from "./product-url.js";

describe("product-url", () => {
    test("buy now points at short.army overlane", () => {
        expect(BUY_NOW_URL).toBe("https://short.army/overlane");
    });
});
