import { MarketingCard } from "../../atoms/MarketingCard.js";
import { GlossaryTerm } from "../glossary/GlossaryProvider.js";
import { useLL } from "../../organisms/OverlaneI18nProvider.js";

export function InstallOptionsSection() {
    const LL = useLL();
    const p = LL.marketing.panels.desktop;
    const scroll = LL.marketing.homeScroll;
    const g = LL.marketing.glossaryTermText;
    return (
        <section className="marketing-home-section" id="home-install" aria-labelledby="home-install-heading">
            <header className="marketing-home-section__head">
                <h2 id="home-install-heading">{scroll.installTitle()}</h2>
                <p className="marketing-lead marketing-home-section__lead">{scroll.installLead()}</p>
            </header>
            <MarketingCard title={p.title()}>
                <p className="marketing-body-copy">
                    <GlossaryTerm id="tauri">{g.tauri()}</GlossaryTerm>
                    {p.leadBetween()}
                    <GlossaryTerm id="nsis">{g.nsis()}</GlossaryTerm>
                    {p.leadAfter()}
                </p>
                <table className="marketing-table">
                    <thead>
                        <tr>
                            <th>{p.colInstaller()}</th>
                            <th>{p.colAudience()}</th>
                            <th>{p.colBehaviour()}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{p.rowProdName()}</td>
                            <td>{p.rowProdAudience()}</td>
                            <td>{p.rowProdBehaviour()}</td>
                        </tr>
                        <tr>
                            <td>{p.rowDemoName()}</td>
                            <td>{p.rowDemoAudience()}</td>
                            <td>{p.rowDemoBehaviour()}</td>
                        </tr>
                    </tbody>
                </table>
                <p className="marketing-callout">
                    <strong>{p.installCalloutStrong()}</strong>
                    {p.installCalloutBody()}
                </p>
            </MarketingCard>
        </section>
    );
}
