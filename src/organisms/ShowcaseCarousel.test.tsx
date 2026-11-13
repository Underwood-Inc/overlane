import { afterEach, describe, expect, test } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ShowcaseCarousel } from "./ShowcaseCarousel.js";
import { showcaseSlides } from "../molecules/marketing/showcase-slides.js";
import { OverlaneI18nProvider } from "./OverlaneI18nProvider.js";

afterEach(() => cleanup());

describe("ShowcaseCarousel", () => {
    test("advances slides with next control", () => {
        const slides = showcaseSlides();
        render(
            <OverlaneI18nProvider initialLocale="en">
                <ShowcaseCarousel />
            </OverlaneI18nProvider>,
        );
        expect(screen.getByRole("heading", { level: 3, name: slides[0].title })).toBeTruthy();
        fireEvent.click(screen.getByRole("button", { name: "Next sample" }));
        expect(screen.getByRole("heading", { level: 3, name: slides[1].title })).toBeTruthy();
    });

    test("renders slide mock inside fixed viewport shell", () => {
        render(
            <OverlaneI18nProvider initialLocale="en">
                <ShowcaseCarousel />
            </OverlaneI18nProvider>,
        );
        const viewport = screen.getByTestId("showcase-carousel-mock-viewport");
        expect(viewport.firstElementChild?.classList.contains("showcase-carousel__mock")).toBe(true);
        fireEvent.click(screen.getByRole("button", { name: "Next sample" }));
        expect(viewport.firstElementChild?.classList.contains("showcase-carousel__mock")).toBe(true);
    });
});
