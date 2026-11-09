# Component library

| Unit | Path | Tests |
|------|------|-------|
| `MarketingCard` | `src/atoms/MarketingCard.tsx` | `MarketingCard.test.tsx` |
| `Badge` | `src/atoms/Badge.tsx` | — |
| `StatTile` | `src/atoms/StatTile.tsx` | — |
| `StickyBuyNowCard` | `src/organisms/StickyBuyNowCard.tsx` | `StickyBuyNowCard.test.tsx` |
| `FlowPipeline` | `src/molecules/marketing/FlowPipeline.tsx` | `FlowPipeline.test.tsx` |
| `MarketingTabBar` | `src/molecules/marketing/MarketingTabBar.tsx` | `MarketingTabBar.test.tsx` |
| `GlossaryProvider` / `GlossaryTerm` | `src/molecules/glossary/` | `glossary-catalog.test.ts` |
| `SiteGuideBlock` | `src/molecules/guides/SiteGuideBlock.tsx` | `guide-content.test.ts` |
| `MarketingHero` | `src/organisms/MarketingHero.tsx` | via view tests |
| `MarketingShowcase` | `src/organisms/MarketingShowcase.tsx` — hero parallax stage + horizontal feature gallery | `MarketingShowcase.test.tsx` |
| UI mocks | `ConsoleUIMock`, `OverlayPanelMock`, `ArchiveTimelineMock`, `JournalMock`, `OverlaysGridMock`, `StreamOverlayMocks`, `SettingsConnectionMock`, `GameLinkWizardMock` | colocated `*.test.tsx` |
| Mock chrome | `MockConsoleShell`, `mock-session-fixture`, `ShowcaseFeatureBand` | colocated tests |
| Parallax | `MarketingParallaxBackdrop`, `ParallaxLayer`, `useParallaxOffset` | via showcase tests |
| Tab panels | `src/organisms/panels/` | via `ProductMarketingView.test.tsx` |
| `ProductMarketingView` | `src/views/ProductMarketingView.tsx` | `ProductMarketingView.test.tsx` |

Add a colocated test when adding or changing behaviour in atoms/molecules.
