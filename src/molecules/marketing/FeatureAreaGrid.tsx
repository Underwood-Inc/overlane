import { MarketingCard } from "../../atoms/MarketingCard.js";
import type { ProductFeatureArea } from "./product-feature-catalog.js";

export type FeatureAreaGridProps = {
    areas: ProductFeatureArea[];
};

export function FeatureAreaGrid({ areas }: FeatureAreaGridProps) {
    return (
        <div className="marketing-grid-3 marketing-feature-grid">
            {areas.map((area) => (
                <MarketingCard key={area.id} title={area.title}>
                    <p className="marketing-feature-summary">{area.summary}</p>
                    <ul className="marketing-list marketing-list--tight">
                        {area.bullets.map((line, bulletIndex) => (
                            <li key={`${area.id}-${bulletIndex}`}>{line}</li>
                        ))}
                    </ul>
                </MarketingCard>
            ))}
        </div>
    );
}
