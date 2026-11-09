import { describe, expect, test } from "vitest";
import { MOCK_SESSION } from "./mock-session-fixture.js";

describe("mock-session-fixture", () => {
    test("exports stable Home metrics sample", () => {
        expect(MOCK_SESSION.speedKmh).toBe(87);
        expect(MOCK_SESSION.route).toMatch(/Hamburg/);
    });
});
