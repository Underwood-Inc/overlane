import { useEffect, useState } from "react";

export const STICKY_BUY_SCROLL_PX = 48;

export function useStickyBuyVisible(thresholdPx = STICKY_BUY_SCROLL_PX): boolean {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > thresholdPx);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [thresholdPx]);

    return visible;
}
