import { useRef, type ReactNode } from "react";
import { useParallaxOffset } from "./useParallaxOffset.js";

export type ParallaxLayerProps = {
    children: ReactNode;
    className?: string;
    speed?: number;
};

export function ParallaxLayer({ children, className = "", speed = 0.1 }: ParallaxLayerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const motion = useParallaxOffset(ref, speed);
    const cls = ["marketing-parallax-layer", className].filter(Boolean).join(" ");

    return (
        <div ref={ref} className={cls} style={motion}>
            {children}
        </div>
    );
}
