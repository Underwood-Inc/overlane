import type { ReactNode } from "react";

export type FlowNodeKind = "core" | "hot" | "cold" | "search" | "live";

export type FlowRowSpec = {
    nodes: { label: string; kind?: FlowNodeKind }[];
    rowLabel?: ReactNode;
};

export type FlowPipelineProps = {
    caption?: string;
    label?: ReactNode;
    ariaLabel: string;
    rows: FlowRowSpec[];
};

export function FlowPipeline({ caption, label, ariaLabel, rows }: FlowPipelineProps) {
    return (
        <figure className="flow-pipeline-wrap">
            {caption ? <figcaption>{caption}</figcaption> : null}
            <div className="flow-pipeline" role="group" aria-label={ariaLabel}>
                {label ? <p className="flow-label">{label}</p> : null}
                {rows.map((row, i) => (
                    <FlowRow key={i} row={row} />
                ))}
            </div>
        </figure>
    );
}

function FlowRow({ row }: { row: FlowRowSpec }) {
    return (
        <>
            {row.rowLabel ? <p className="flow-label">{row.rowLabel}</p> : null}
            <div className="flow-row">
                {row.nodes.map((node, j) => (
                    <span key={j} className="flow-pair">
                        {j > 0 ? (
                            <span className="flow-arrow" aria-hidden="true">
                                →
                            </span>
                        ) : null}
                        <span className={`flow-node${node.kind ? ` flow-node--${node.kind}` : ""}`}>{node.label}</span>
                    </span>
                ))}
            </div>
        </>
    ) as ReactNode;
}
