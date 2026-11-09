import type { ReactNode } from "react";
import { getLL } from "../../i18n/overlane-i18n.js";

const NAV_IDS = ["home", "overlays", "dashboard", "archive", "journal", "deliveries", "settings"] as const;

export type MockConsoleNavId = (typeof NAV_IDS)[number];

function navLabel(id: MockConsoleNavId): string {
    const nav = getLL().nav;
    switch (id) {
        case "home":
            return nav.home();
        case "overlays":
            return nav.overlays();
        case "dashboard":
            return nav.dashboard();
        case "archive":
            return nav.archive();
        case "journal":
            return nav.journal();
        case "deliveries":
            return nav.deliveries();
        case "settings":
            return nav.settings();
        default:
            return id;
    }
}

export type MockConsoleShellProps = {
    activeNav: MockConsoleNavId;
    children: ReactNode;
    className?: string;
};

/** Decorative window chrome shared by console UI samples. */
export function MockConsoleShell({ activeNav, children, className = "" }: MockConsoleShellProps) {
    const rootCls = ["ui-mock", "ui-mock--console", className].filter(Boolean).join(" ");
    const activeLabel = navLabel(activeNav);

    return (
        <div className={rootCls} aria-hidden="true">
            <div className="ui-mock__window">
                <div className="ui-mock__titlebar">
                    <span className="ui-mock__dots" />
                    <span className="ui-mock__title">{activeLabel}</span>
                </div>
                <div className="ui-mock__body">
                    <nav className="ui-mock__nav">
                        <p className="ui-mock__brand">
                            Over<span>lane</span>
                        </p>
                        <p className="ui-mock__nav-tag">{getLL().brand.tagline()}</p>
                        <ul className="ui-mock__menu">
                            {NAV_IDS.map((id) => {
                                const label = navLabel(id);
                                return (
                                    <li key={id} className={id === activeNav ? "is-active" : undefined}>
                                        {label}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className="ui-mock__main">{children}</div>
                </div>
            </div>
        </div>
    );
}
