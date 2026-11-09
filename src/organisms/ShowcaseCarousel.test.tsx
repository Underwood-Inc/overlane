import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ShowcaseCarousel } from "./ShowcaseCarousel.js";
import { showcaseSlides } from "../molecules/marketing/showcase-slides.js";
import { OverlaneI18nProvider } from "./OverlaneI18nProvider.js";

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
});
