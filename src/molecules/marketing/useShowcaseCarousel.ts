import { useCallback, useState } from "react";

export function useShowcaseCarousel(slideCount: number) {
    const [index, setIndex] = useState(0);

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

    return { index, goTo, next, prev };
}
