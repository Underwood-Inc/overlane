import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { initOverlaneI18n } from "../../i18n/overlane-i18n.js";
import { FeatureAreaGrid } from "./FeatureAreaGrid.js";
import { consoleFeatureAreas } from "./product-feature-catalog.js";

describe("FeatureAreaGrid", () => {
    initOverlaneI18n("en");

    test("renders inline code for journal log filenames without markdown backticks", () => {
        render(<FeatureAreaGrid areas={consoleFeatureAreas().filter((a) => a.id === "journal")} />);
        expect(screen.getByText(".log").tagName).toBe("CODE");
        expect(screen.getByText(".log.gz").tagName).toBe("CODE");
        expect(screen.queryByText("`.log`")).toBeNull();
    });
});
