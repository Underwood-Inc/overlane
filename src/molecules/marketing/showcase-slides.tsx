import type { ComponentType, ReactNode } from "react";
import { MarketingCode } from "../../atoms/MarketingCode.js";
import { getLL } from "../../i18n/overlane-i18n.js";
import { ArchiveTimelineMock } from "./ArchiveTimelineMock.js";
import { ConsoleUIMock } from "./ConsoleUIMock.js";
import { GameLinkWizardMock } from "./GameLinkWizardMock.js";
import { JournalMock } from "./JournalMock.js";
import { OverlaysGridMock } from "./OverlaysGridMock.js";
import { SettingsConnectionMock } from "./SettingsConnectionMock.js";
import { StreamOverlayMocks } from "./StreamOverlayMocks.js";

export type ShowcaseSlide = {
    id: string;
    pillar: string;
    title: string;
    blurb: ReactNode;
    Mock: ComponentType;
};

export function showcaseSlides(): ShowcaseSlide[] {
    const LL = getLL();
    const s = LL.marketing.showcase;
    return [
        {
            id: "home",
            pillar: s.pillarLive(),
            title: s.slideHomeTitle(),
            blurb: s.slideHomeBlurb(),
            Mock: ConsoleUIMock,
        },
        {
            id: "archive",
            pillar: s.pillarData(),
            title: s.slideArchiveTitle(),
            blurb: s.slideArchiveBlurb(),
            Mock: ArchiveTimelineMock,
        },
        {
            id: "journal",
            pillar: s.pillarLive(),
            title: LL.marketing.featureAreas.journalTitle(),
            blurb: (
                <>
                    {s.slideJournalBlurbBefore()}
                    <MarketingCode>.log</MarketingCode>
                    {s.slideJournalBlurbBetween()}
                    <MarketingCode>.log.gz</MarketingCode>
                    {s.slideJournalBlurbAfter()}
                </>
            ),
            Mock: JournalMock,
        },
        {
            id: "overlays",
            pillar: s.pillarFeatures(),
            title: s.slideOverlaysTitle(),
            blurb: s.slideOverlaysBlurb(),
            Mock: OverlaysGridMock,
        },
        {
            id: "stream",
            pillar: s.pillarLive(),
            title: s.slideStreamTitle(),
            blurb: s.slideStreamBlurb(),
            Mock: StreamOverlayMocks,
        },
        {
            id: "settings",
            pillar: s.pillarDesktop(),
            title: s.slideSettingsTitle(),
            blurb: s.slideSettingsBlurb(),
            Mock: SettingsConnectionMock,
        },
        {
            id: "game-link",
            pillar: s.pillarSetup(),
            title: s.slideGameLinkTitle(),
            blurb: s.slideGameLinkBlurb(),
            Mock: GameLinkWizardMock,
        },
    ];
}
