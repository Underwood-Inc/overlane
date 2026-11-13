import { describe, expect, test, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useMarketingHash } from "./useMarketingHash.js";

describe("useMarketingHash", () => {
    beforeEach(() => {
        window.location.hash = "";
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test("setTab updates hash", () => {
        const { result } = renderHook(() => useMarketingHash());
        act(() => result.current.setTab("trust"));
        expect(window.location.search).toBe("?tab=trust");
        expect(window.location.hash).toBe("#panel-trust");
        expect(result.current.tab).toBe("trust");
    });

    test("goToGuide opens docs tab", () => {
        const { result } = renderHook(() => useMarketingHash());
        act(() => result.current.goToGuide("#site-license"));
        expect(result.current.tab).toBe("docs");
        expect(window.location.hash).toBe("#site-license");
    });
});
