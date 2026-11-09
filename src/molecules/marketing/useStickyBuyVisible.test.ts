import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useStickyBuyVisible, STICKY_BUY_SCROLL_PX } from "./useStickyBuyVisible.js";

describe("useStickyBuyVisible", () => {
    test("visible after scroll past threshold", () => {
        const { result } = renderHook(() => useStickyBuyVisible(STICKY_BUY_SCROLL_PX));
        expect(result.current).toBe(false);
        act(() => {
            Object.defineProperty(window, "scrollY", { value: STICKY_BUY_SCROLL_PX + 1, configurable: true });
            window.dispatchEvent(new Event("scroll"));
        });
        expect(result.current).toBe(true);
    });
});
