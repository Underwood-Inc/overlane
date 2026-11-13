import type { ComponentType, ReactNode } from "react";
import { getLL } from "../../i18n/overlane-i18n.js";
import { ArchiveTimelineMock } from "./ArchiveTimelineMock.js";
import { ConsoleUIMock } from "./ConsoleUIMock.js";
import { OverlaysGridMock } from "./OverlaysGridMock.js";

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
            id: "overlays",
            pillar: s.pillarFeatures(),
            title: s.slideOverlaysTitle(),
            blurb: s.slideOverlaysBlurb(),
            Mock: OverlaysGridMock,
        },
    ];
}
