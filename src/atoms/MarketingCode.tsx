export type MarketingCodeProps = { children: string };

/** Monospace inline path / filename chip — styled via `.marketing-list code` and allies in main.scss */
export function MarketingCode({ children }: MarketingCodeProps) {
    return <code className="marketing-code">{children}</code>;
}
