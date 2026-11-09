import type { ReactNode } from "react";

export type ShowcaseFeatureBandProps = {
    pillar: string;
    title: string;
    blurb: string;
    children: ReactNode;
};

/** One scroll-snap band: copy plus a decorative mock sample. */
export function ShowcaseFeatureBand({ pillar, title, blurb, children }: ShowcaseFeatureBandProps) {
    return (
        <article className="marketing-showcase-band">
            <header className="marketing-showcase-band__head">
                <p className="marketing-showcase-band__pillar">{pillar}</p>
                <h3 className="marketing-showcase-band__title">{title}</h3>
                <p className="marketing-showcase-band__blurb">{blurb}</p>
            </header>
            <div className="marketing-showcase-band__mock">{children}</div>
        </article>
    );
}
