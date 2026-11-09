import type { ReactNode } from "react";

export type StatTileProps = { label: string; detail: ReactNode };

export function StatTile({ label, detail }: StatTileProps) {
    return (
        <div className="marketing-stat">
            <strong>{label}</strong>
            <span>{detail}</span>
        </div>
    );
}
