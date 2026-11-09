import { useParallaxOffset } from "../molecules/marketing/useParallaxOffset.js";
import { useRef } from "react";

/** Ambient mesh + orbs behind the landing page. */
export function MarketingParallaxBackdrop() {
    const shellRef = useRef<HTMLDivElement>(null);
    const slow = useParallaxOffset(shellRef, 0.04);
    const fast = useParallaxOffset(shellRef, -0.07);

    return (
        <div className="marketing-parallax-backdrop" ref={shellRef} aria-hidden="true">
            <div className="marketing-parallax-backdrop__mesh" />
            <div className="marketing-parallax-backdrop__grid" style={slow} />
            <div className="marketing-parallax-backdrop__orb marketing-parallax-backdrop__orb--a" style={slow} />
            <div className="marketing-parallax-backdrop__orb marketing-parallax-backdrop__orb--b" style={fast} />
            <div className="marketing-parallax-backdrop__orb marketing-parallax-backdrop__orb--c" />
        </div>
    );
}
