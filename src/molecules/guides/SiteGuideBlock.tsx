import type { GuideSection } from "./guide-content.js";

export function SiteGuideBlock({ section }: { section: GuideSection }) {
    return (
        <article className="marketing-card site-guide" id={section.id}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="marketing-lead">
                    {p}
                </p>
            ))}
            {section.bullets ? (
                <ul className="marketing-list">
                    {section.bullets.map((b) => (
                        <li key={b.slice(0, 32)}>{b}</li>
                    ))}
                </ul>
            ) : null}
        </article>
    );
}
