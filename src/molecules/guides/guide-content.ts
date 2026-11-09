/** In-site guide copy — no links to private repositories. */
import { getLL } from "../../i18n/overlane-i18n.js";

export type GuideSection = {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
};

export function gettingStartedGuide(): GuideSection {
    const LL = getLL();
    return {
        id: "site-getting-started",
        title: LL.guides.gettingStarted.title(),
        paragraphs: [LL.guides.gettingStarted.lead()],
        bullets: [
            LL.guides.gettingStarted.b0(),
            LL.guides.gettingStarted.b1(),
            LL.guides.gettingStarted.b2(),
            LL.guides.gettingStarted.b3(),
            LL.guides.gettingStarted.b4(),
        ],
    };
}

export function playerGuide(): GuideSection {
    const LL = getLL();
    return {
        id: "site-player-guide",
        title: LL.guides.playerGuide.title(),
        paragraphs: [LL.guides.playerGuide.lead0()],
        bullets: [
            LL.guides.playerGuide.b0(),
            LL.guides.playerGuide.b1(),
            LL.guides.playerGuide.b2(),
            LL.guides.playerGuide.b3(),
            LL.guides.playerGuide.b4(),
        ],
    };
}

export function licenseNotice(): GuideSection {
    const LL = getLL();
    return {
        id: "site-license",
        title: LL.guides.license.title(),
        paragraphs: [
            LL.guides.license.p0(),
            LL.guides.license.p1(),
            LL.guides.license.p2(),
            LL.guides.license.p3(),
        ],
    };
}
