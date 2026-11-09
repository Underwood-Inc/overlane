import { beforeEach, describe, expect, test } from "vitest";
import { initOverlaneI18n } from "../../i18n/overlane-i18n.js";
import { GLOSSARY_CATALOG_IDS, glossaryEntry } from "./glossary-catalog.js";

beforeEach(() => {
    initOverlaneI18n("en");
});

describe("glossary-catalog", () => {
    test("glossaryEntry returns clad without doc links", () => {
        const e = glossaryEntry("clad");
        expect(e?.title).toBe("CLAD");
        expect(e?.ol).not.toMatch(/docs\//);
    });

    test("every id resolves", () => {
        for (const id of GLOSSARY_CATALOG_IDS) {
            expect(glossaryEntry(id)).toBeDefined();
        }
    });
});
