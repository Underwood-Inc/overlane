import type { ReactNode } from "react";

export type MarketingCardProps = {
    title?: string;
    children: ReactNode;
    className?: string;
};

export function MarketingCard({ title, children, className = "" }: MarketingCardProps) {
    return (
        <div className={`marketing-card ${className}`.trim()}>
            {title ? <h2>{title}</h2> : null}
            {children}
        </div>
    );
}
