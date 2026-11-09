import { MarketingCard } from "../../atoms/MarketingCard.js";
import { MarketingCode } from "../../atoms/MarketingCode.js";
import { GlossaryTerm } from "../../molecules/glossary/GlossaryProvider.js";
import { FlowPipeline } from "../../molecules/marketing/FlowPipeline.js";
import { architectureLayers } from "../../molecules/marketing/product-feature-catalog.js";
import { useLL } from "../OverlaneI18nProvider.js";

export function ArchitecturePanel() {
    const LL = useLL();
    const layers = architectureLayers();
    const nodes = LL.marketing.flowNodes;
    const p = LL.marketing.panels.architecture;
    return (
        <section className="marketing-tab-panel" id="panel-architecture" role="tabpanel" aria-labelledby="tab-architecture">
            <MarketingCard title={p.title()}>
                <p className="marketing-lead">{p.lead()}</p>
                <p>
                    {p.cladLead()} <GlossaryTerm id="clad">CLAD</GlossaryTerm>
                    {p.cladTail()}
                </p>
            </MarketingCard>
            <div className="marketing-stack-cards">
                {layers.map((layer) => (
                    <MarketingCard key={layer.title} title={layer.title}>
                        <p>{layer.text}</p>
                    </MarketingCard>
                ))}
            </div>
            <FlowPipeline
                caption={p.flowCaption()}
                ariaLabel={p.flowAria()}
                rows={[
                    {
                        nodes: [
                            { label: nodes.gamePlugin(), kind: "core" },
                            { label: nodes.sidecar(), kind: "core" },
                            { label: nodes.consoleOverlays(), kind: "core" },
                        ],
                    },
                    {
                        rowLabel: <>{p.flowOptionalRow()}</>,
                        nodes: [
                            { label: nodes.sidecar(), kind: "live" },
                            { label: nodes.obsBrowser(), kind: "live" },
                        ],
                    },
                ]}
            />
        </section>
    );
}

export function DataPanel() {
    const LL = useLL();
    const nodes = LL.marketing.flowNodes;
    const p = LL.marketing.panels.data;
    return (
        <section className="marketing-tab-panel" id="panel-data" role="tabpanel" aria-labelledby="tab-data">
            <MarketingCard title={p.title()}>
                <p className="marketing-lead">{p.lead()}</p>
                <p className="marketing-callout">
                    <strong>{p.calloutStrong()}</strong>
                    {p.calloutRest()}
                </p>
                <ul className="marketing-list">
                    <li>
                        <strong>{p.timelineStrong()}</strong>
                        {p.timelineBody()}
                    </li>
                    <li>
                        <strong>{p.analyticsStrong()}</strong>
                        {p.analyticsBody()}
                    </li>
                    <li>
                        <strong>{p.vaultStrong()}</strong>
                        {p.vaultBody()}
                    </li>
                    <li>
                        <strong>{p.journalStrong()}</strong>
                        {p.journalBody()}
                    </li>
                </ul>
            </MarketingCard>
            <MarketingCard title={LL.marketing.dataScale.title()}>
                <p className="marketing-lead">{LL.marketing.dataScale.lead()}</p>
                <ul className="marketing-list">
                    <li>
                        <strong>{LL.marketing.dataScale.ingestStrong()}</strong> — {LL.marketing.dataScale.ingestBody()}
                    </li>
                    <li>
                        <strong>{LL.marketing.dataScale.foldStrong()}</strong> — {LL.marketing.dataScale.foldBody()}
                    </li>
                    <li>
                        <strong>{LL.marketing.dataScale.sizeStrong()}</strong> — {LL.marketing.dataScale.sizeBody()}
                    </li>
                    <li>
                        <strong>{LL.marketing.dataScale.hotStrong()}</strong> — {LL.marketing.dataScale.hotBody()}
                    </li>
                    <li>
                        <strong>{LL.marketing.dataScale.quotaStrong()}</strong> — {LL.marketing.dataScale.quotaBody()}
                    </li>
                </ul>
            </MarketingCard>
            <FlowPipeline
                caption={p.flowCaption()}
                ariaLabel={p.flowAria()}
                rows={[
                    {
                        nodes: [
                            { label: nodes.ingest(), kind: "hot" },
                            { label: nodes.hotLedger(), kind: "hot" },
                            { label: nodes.coldFiles(), kind: "cold" },
                        ],
                    },
                ]}
            />
        </section>
    );
}

export function LivePanel() {
    const LL = useLL();
    const p = LL.marketing.panels.live;
    return (
        <section className="marketing-tab-panel" id="panel-live" role="tabpanel" aria-labelledby="tab-live">
            <MarketingCard title={p.title()}>
                <p className="marketing-lead">
                    {p.leadBefore()} <GlossaryTerm id="sse">live events</GlossaryTerm>
                    {p.leadAfter()}
                </p>
                <ul className="marketing-list">
                    <li>
                        <strong>{p.presetsStrong()}</strong>
                        {p.presetsBody()}
                    </li>
                    <li>
                        <strong>{p.globalStrong()}</strong>
                        {p.globalBody()}
                    </li>
                    <li>
                        <strong>{p.composeStrong()}</strong>
                        {p.composeBodyBefore()}
                        <MarketingCode>/compose/your-id</MarketingCode>
                        {p.composeBodyAfter()}
                    </li>
                    <li>
                        <strong>{p.soloStrong()}</strong>
                        {p.soloBodyBefore()}
                        <MarketingCode>/w/panel/metric</MarketingCode>
                        {p.soloBodyAfter()}
                    </li>
                    <li>
                        <strong>{p.announceStrong()}</strong>
                        {p.announceBody()}
                    </li>
                </ul>
            </MarketingCard>
        </section>
    );
}

export function DesktopPanel() {
    const LL = useLL();
    const p = LL.marketing.panels.desktop;
    return (
        <section className="marketing-tab-panel" id="panel-desktop" role="tabpanel" aria-labelledby="tab-desktop">
            <MarketingCard title={p.title()}>
                <p className="marketing-lead">
                    <GlossaryTerm id="tauri">Tauri</GlossaryTerm>
                    {p.leadBetween()}
                    <GlossaryTerm id="nsis">NSIS</GlossaryTerm>
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
            </MarketingCard>
        </section>
    );
}

export function TrustPanel() {
    const LL = useLL();
    const p = LL.marketing.panels.trust;
    return (
        <section className="marketing-tab-panel" id="panel-trust" role="tabpanel" aria-labelledby="tab-trust">
            <MarketingCard title={p.title()}>
                <p className="marketing-lead">{p.lead()}</p>
                <p className="marketing-callout amber">
                    <strong>{p.calloutStrong()}</strong>
                    {p.calloutBefore()}
                    <GlossaryTerm id="loopback">localhost only</GlossaryTerm>
                    {p.calloutAfter()}
                </p>
                <p>{p.footer()}</p>
            </MarketingCard>
        </section>
    );
}
