import { useEffect, useState, type CSSProperties, type RefObject } from "react";

/** Scroll-linked translate for showcase layers; disabled when user prefers reduced motion. */
export function useParallaxOffset(
    ref: RefObject<HTMLElement | null>,
    speed = 0.12,
): CSSProperties {
    const [style, setStyle] = useState<CSSProperties>({});

    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
            return;
        }

        const onScroll = () => {
            const el = ref.current;
            if (!el) {
                return;
            }
            const rect = el.getBoundingClientRect();
            const viewMid = window.innerHeight * 0.5;
            const blockMid = rect.top + rect.height * 0.5;
            const delta = (viewMid - blockMid) * speed;
            setStyle({ transform: `translate3d(0, ${delta.toFixed(2)}px, 0)` });
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [ref, speed]);

    return style;
}
