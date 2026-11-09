import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { useLL } from "../../organisms/OverlaneI18nProvider.js";
import { glossaryEntry, type GlossaryEntry } from "./glossary-catalog.js";

type GlossaryContextValue = {
    open: (anchor: HTMLElement, id: string) => void;
    scheduleClose: () => void;
    cancelClose: () => void;
};

const GlossaryContext = createContext<GlossaryContextValue | null>(null);

export function GlossaryProvider({ children }: { children: ReactNode }) {
    const [entry, setEntry] = useState<GlossaryEntry | null>(null);
    const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const close = useCallback(() => {
        setEntry(null);
        setAnchorRect(null);
    }, []);

    const open = useCallback(
        (anchor: HTMLElement, id: string) => {
            if (hideTimer.current) clearTimeout(hideTimer.current);
            const e = glossaryEntry(id);
            if (!e) return;
            setEntry(e);
            setAnchorRect(anchor.getBoundingClientRect());
        },
        [],
    );

    const scheduleClose = useCallback(() => {
        hideTimer.current = setTimeout(close, 140);
    }, [close]);

    const cancelClose = useCallback(() => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
    }, []);

    const value = useMemo(
        () => ({ open, scheduleClose, cancelClose }),
        [open, scheduleClose, cancelClose],
    );

    return (
        <GlossaryContext.Provider value={value}>
            {children}
            <GlossaryPopover entry={entry} anchorRect={anchorRect} cancelClose={cancelClose} scheduleClose={scheduleClose} />
        </GlossaryContext.Provider>
    );
}

function GlossaryPopover({
    entry,
    anchorRect,
    cancelClose,
    scheduleClose,
}: {
    entry: GlossaryEntry | null;
    anchorRect: DOMRect | null;
    cancelClose: () => void;
    scheduleClose: () => void;
}) {
    const LL = useLL();
    if (!entry || !anchorRect) return null;
    const top = Math.max(8, anchorRect.top - 12);
    const left = Math.min(window.innerWidth - 280, Math.max(12, anchorRect.left));
    const labels = LL.marketing.glossaryLabels;

    return (
        <div
            className="glossary-float"
            style={{ top, left }}
            role="tooltip"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
        >
            <h4>{entry.title}</h4>
            <p>{entry.body}</p>
            {entry.layman ? (
                <p className="glossary-layman">
                    <strong>{labels.layman()}</strong> {entry.layman}
                </p>
            ) : null}
            {entry.ol ? (
                <p className="glossary-ol">
                    <strong>{labels.overlane()}</strong> {entry.ol}
                </p>
            ) : null}
        </div>
    );
}

export function GlossaryTerm({ id, children }: { id: string; children: ReactNode }) {
    const ctx = useContext(GlossaryContext);
    if (!ctx) return <>{children}</>;

    return (
        <span
            className="glossary-term"
            data-glossary={id}
            tabIndex={0}
            onMouseEnter={(e) => ctx.open(e.currentTarget, id)}
            onMouseLeave={ctx.scheduleClose}
            onFocus={(e) => ctx.open(e.currentTarget, id)}
            onBlur={ctx.scheduleClose}
        >
            {children}
        </span>
    );
}
