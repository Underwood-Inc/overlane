import { BUY_NOW_URL } from "../molecules/marketing/product-url.js";
import { useLL } from "./OverlaneI18nProvider.js";

export function StickyBuyNowCard() {
    const LL = useLL();
    return (
        <aside className="sticky-buy-card sticky-buy-card--visible sticky-buy-card--dock">
            <a className="sticky-buy-card__link" href={BUY_NOW_URL} rel="noopener noreferrer">
                {LL.marketing.stickyBuyNow()}
            </a>
        </aside>
    );
}
