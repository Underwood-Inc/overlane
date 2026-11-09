import { useCallback, useEffect, useState } from "react";

export const SHOWCASE_CAROUSEL_MS = 6500;

export function useShowcaseCarousel(slideCount: number, intervalMs = SHOWCASE_CAROUSEL_MS) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const goTo = useCallback(
        (next: number) => {
            if (slideCount <= 0) {
                return;
            }
            const wrapped = ((next % slideCount) + slideCount) % slideCount;
            setIndex(wrapped);
        },
        [slideCount],
    );

    const next = useCallback(() => goTo(index + 1), [goTo, index]);
    const prev = useCallback(() => goTo(index - 1), [goTo, index]);

    useEffect(() => {
        if (slideCount <= 1 || paused) {
            return;
        }
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
            return;
        }
        const id = window.setInterval(() => {
            setIndex((i) => (i + 1) % slideCount);
        }, intervalMs);
        return () => window.clearInterval(id);
    }, [slideCount, intervalMs, paused]);

    return { index, goTo, next, prev, paused, setPaused };
}
