import { MarketingCard } from "../../atoms/MarketingCard.js";
import { FlowPipeline } from "../../molecules/marketing/FlowPipeline.js";
import { FeatureAreaGrid } from "../../molecules/marketing/FeatureAreaGrid.js";
import { consoleFeatureAreas } from "../../molecules/marketing/product-feature-catalog.js";
import { useLL } from "../OverlaneI18nProvider.js";

export function FeaturesPanel() {
    const LL = useLL();
    const areas = consoleFeatureAreas();
    const nodes = LL.marketing.flowNodes;
    const p = LL.marketing.panels.features;
    return (
        <section className="marketing-tab-panel" id="panel-features" role="tabpanel" aria-labelledby="tab-features">
            <MarketingCard title={p.title()}>
                <p className="marketing-lead">{p.lead()}</p>
                <p className="marketing-callout">
                    <strong>{p.calloutStrong()}</strong>
                    {p.calloutRest()}
                </p>
            </MarketingCard>
            <FeatureAreaGrid areas={areas} />
            <FlowPipeline
                caption={p.flowCaption()}
                ariaLabel={p.flowAria()}
                rows={[
                    {
                        nodes: [
                            { label: nodes.gamePlugin(), kind: "core" },
                            { label: nodes.localService(), kind: "core" },
                            { label: nodes.console(), kind: "core" },
                            { label: nodes.you(), kind: "core" },
                        ],
                    },
                    {
                        rowLabel: (
                            <>
                                <span className="em-amber">{p.flowStreamLabel()}</span>
                                {p.flowStreamRest()}
                            </>
                        ),
                        nodes: [
                            { label: nodes.localService(), kind: "core" },
                            { label: nodes.overlayPanels(), kind: "live" },
                            { label: nodes.obsSlashBrowser(), kind: "live" },
                        ],
                    },
                ]}
            />
        </section>
    );
}
