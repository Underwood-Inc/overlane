import { describe, expect, test } from "vitest";
import { MARKETING_CORE_OVERLAY_PRESETS } from "./overlay-preset-fixture.js";

describe("MARKETING_CORE_OVERLAY_PRESETS", () => {
    test("uses canon panel paths from console CorePresets", () => {
        const paths = MARKETING_CORE_OVERLAY_PRESETS.map((p) => p.path);
        expect(paths).toEqual(["/speed", "/inputs", "/job", "/dashboard"]);
    });

    test("does not attach invented Live or Ready route status", () => {
        for (const preset of MARKETING_CORE_OVERLAY_PRESETS) {
            expect("status" in preset).toBe(false);
        }
    });
});
