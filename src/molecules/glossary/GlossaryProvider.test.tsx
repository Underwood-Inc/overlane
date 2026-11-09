import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { OverlaneI18nProvider } from "../../organisms/OverlaneI18nProvider.js";
import { GlossaryProvider, GlossaryTerm } from "./GlossaryProvider.js";

describe("GlossaryProvider", () => {
    test("GlossaryTerm renders children", () => {
        render(
            <OverlaneI18nProvider initialLocale="en">
                <GlossaryProvider>
                    <GlossaryTerm id="sse">live feed</GlossaryTerm>
                </GlossaryProvider>
            </OverlaneI18nProvider>,
        );
        expect(screen.getByText("live feed")).toBeTruthy();
    });
});
