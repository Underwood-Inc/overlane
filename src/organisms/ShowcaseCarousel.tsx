import { showcaseSlides } from "../molecules/marketing/showcase-slides.js";
import { useShowcaseCarousel } from "../molecules/marketing/useShowcaseCarousel.js";
import { useLL } from "./OverlaneI18nProvider.js";

export function ShowcaseCarousel() {
    const LL = useLL();
    const slides = showcaseSlides();
    const { index, goTo, next, prev } = useShowcaseCarousel(slides.length);
    const slide = slides[index];

    if (!slide) {
        return null;
    }

    const Mock = slide.Mock;
    const s = LL.marketing.showcase;

    return (
        <div className="showcase-carousel">
            <div className="showcase-carousel__stage" aria-live="polite">
                <div className="showcase-carousel__meta">
                    <span className="showcase-carousel__pillar">{slide.pillar}</span>
                    <h3 className="showcase-carousel__title">{slide.title}</h3>
                    <p className="showcase-carousel__blurb">{slide.blurb}</p>
                </div>
                <div className="showcase-carousel__mock-viewport" data-testid="showcase-carousel-mock-viewport">
                    <div className="showcase-carousel__mock" key={slide.id}>
                        <Mock />
                    </div>
                </div>
            </div>
            <div className="showcase-carousel__controls">
                <button type="button" className="showcase-carousel__nav" onClick={prev} aria-label={s.carouselPrevAria()}>
                    ‹
                </button>
                <div className="showcase-carousel__dots" role="tablist" aria-label={s.carouselTablistAria()}>
                    {slides.map((row, i) => (
                        <button
                            key={row.id}
                            type="button"
                            role="tab"
                            className={`showcase-carousel__dot${i === index ? " is-active" : ""}`}
                            aria-selected={i === index}
                            aria-label={row.title}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>
                <button type="button" className="showcase-carousel__nav" onClick={next} aria-label={s.carouselNextAria()}>
                    ›
                </button>
            </div>
        </div>
    );
}
