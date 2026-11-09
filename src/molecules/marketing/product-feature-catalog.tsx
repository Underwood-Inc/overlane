/** Canon marketing copy for console surfaces — keep mocks and tab panels aligned. */

import type { ReactNode } from "react";
import { MarketingCode } from "../../atoms/MarketingCode.js";
import { getLL } from "../../i18n/overlane-i18n.js";

export type ProductFeatureArea = {
    id: string;
    title: string;
    summary: string;
    bullets: ReactNode[];
};

export function consoleFeatureAreas(): ProductFeatureArea[] {
    const LL = getLL();
    const a = LL.marketing.featureAreas;
    return [
        {
            id: "home",
            title: a.homeTitle(),
            summary: a.homeSummary(),
            bullets: [a.homeB0(), a.homeB1(), a.homeB2()],
        },
        {
            id: "dashboard",
            title: a.dashboardTitle(),
            summary: a.dashboardSummary(),
            bullets: [a.dashboardB0(), a.dashboardB1(), a.dashboardB2()],
        },
        {
            id: "archive",
            title: a.archiveTitle(),
            summary: a.archiveSummary(),
            bullets: [
                a.archiveB1(),
                LL.marketing.catalog.archiveFoldSimilar(),
                a.archiveB3(),
                a.archiveB4(),
            ],
        },
        {
            id: "journal",
            title: a.journalTitle(),
            summary: a.journalSummary(),
            bullets: [
                <>
                    {a.journalB0Before()}
                    <MarketingCode>.log</MarketingCode>
                    {a.journalB0Between()}
                    <MarketingCode>.log.gz</MarketingCode>
                    {a.journalB0After()}
                </>,
                a.journalB1(),
                a.journalB2(),
            ],
        },
        {
            id: "deliveries",
            title: a.deliveriesTitle(),
            summary: a.deliveriesSummary(),
            bullets: [a.deliveriesB0(), a.deliveriesB1(), a.deliveriesB2()],
        },
        {
            id: "overlays",
            title: a.overlaysTitle(),
            summary: a.overlaysSummary(),
            bullets: [
                a.overlaysB0(),
                a.overlaysB1(),
                <>
                    {a.overlaysB2Before()}
                    <MarketingCode>/builder</MarketingCode>
                    {a.overlaysB2Mid()}
                    <MarketingCode>/w/…</MarketingCode>
                </>,
            ],
        },
        {
            id: "settings",
            title: a.settingsTitle(),
            summary: a.settingsSummary(),
            bullets: [a.settingsB0(), a.settingsB1(), a.settingsB2()],
        },
        {
            id: "reference",
            title: a.referenceTitle(),
            summary: a.referenceSummary(),
            bullets: [a.referenceB0(), a.referenceB1()],
        },
    ];
}

export function architectureLayers(): { title: string; text: ReactNode }[] {
    const LL = getLL();
    const a = LL.marketing.architectureLayers;
    return [
        {
            title: a.desktopTitle(),
            text: a.desktopText(),
        },
        {
            title: a.serviceTitle(),
            text: a.serviceText(),
        },
        {
            title: a.consoleTitle(),
            text: a.consoleText(),
        },
        {
            title: a.overlayTitle(),
            text: (
                <>
                    {a.overlayTextBefore()}
                    <MarketingCode>/speed</MarketingCode>
                    {a.overlayTextMid()}
                    <MarketingCode>/compose/…</MarketingCode>
                    {", "}
                    <MarketingCode>/w/…</MarketingCode>
                    {a.overlayTextAfter()}
                </>
            ),
        },
        {
            title: a.ldpTitle(),
            text: LL.marketing.catalog.ldpArchitectureLayer(),
        },
    ];
}
