import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { ShowcaseFeatureBand } from "./ShowcaseFeatureBand.js";

describe("ShowcaseFeatureBand", () => {
    test("renders pillar title and mock slot", () => {
        render(
            <ShowcaseFeatureBand pillar="Data" title="Archive" blurb="Searchable timeline on disk.">
                <span>Mock child</span>
            </ShowcaseFeatureBand>,
        );
        expect(screen.getByText("Data")).toBeTruthy();
        expect(screen.getByRole("heading", { name: "Archive" })).toBeTruthy();
        expect(screen.getByText("Mock child")).toBeTruthy();
    });
});
