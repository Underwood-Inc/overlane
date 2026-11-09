import type { BaseTranslation } from '../i18n-types.js';

const translation = {
	"brand": {
		"name": "Overlane",
		"tagline": "Telemetry · overlays · archive observations"
	},
	"common": {
		"close": "Close",
		"loading": "Loading…",
		"save": "Save",
		"cancel": "Cancel",
		"overlaneJson": "overlane.json"
	},
	"nav": {
		"home": "Home",
		"overlays": "Overlays",
		"overlaysSub": "Panel URLs",
		"dashboard": "Dashboard",
		"dashboardSub": "Archive rollups",
		"archive": "Archive",
		"archiveSub": "Snapshots",
		"journal": "Session log",
		"journalSub": "Log files",
		"deliveries": "Delivery log",
		"deliveriesSub": "Completed jobs",
		"overlayBuilder": "Overlay builder",
		"overlayBuilderSub": "Compose layouts",
		"mockLab": "Mock lab",
		"mockLabSub": "Mock telemetry",
		"reference": "Reference",
		"referenceSub": "Icons & metrics",
		"settings": "Settings",
		"support": "Support",
		"supportSub": "Discord community",
		"toolsAria": "Reference, settings & support"
	},
	"views": {
		"home": "Home",
		"overlays": "Overlays",
		"dashboard": "Dashboard",
		"archive": "Archive",
		"journal": "Session log",
		"deliveries": "Delivery log",
		"settings": "Settings",
		"reference": "Reference"
	},
	"titlebar": {
		"brandAria": "Go to Home",
		"collapseNav": "Collapse navigation",
		"collapseNavSr": "Collapse navigation",
		"resizeNav": "Resize navigation",
		"minimize": "Minimize",
		"maximize": "Maximize",
		"restore": "Restore",
		"close": "Close"
	},
	"commandPalette": {
		"goToView": "Go to view",
		"referenceHint": "Icon & metric glossaries",
		"overlayBuilder": "Overlay builder",
		"overlayBuilderHint": "Compose layouts (/builder)",
		"vaultImportExport": "Import / export vault",
		"vaultHint": "Settings → Data",
		"searchMetrics": "Search metrics glossary",
		"searchMetricsHint": "Reference → metrics",
		"searchIcons": "Search icon glossary",
		"searchIconsHint": "Reference → icons"
	},
	"settings": {
		"sectionsAria": "Settings sections",
		"leadBeforeConfig": "Everything here is saved to your",
		"leadAfterConfig": ". App theme previews as you pick a preset — use",
		"leadAfterSaveTheme": "to keep it. Server, telemetry, folders, and collision tuning need a restart of Overlane (desktop app or sidecar).",
		"saveAppTheme": "Save app theme",
		"tabs": {
			"look": "Look",
			"language": "Language",
			"connection": "Connection",
			"storage": "Storage",
			"data": "Data",
			"careers": "Careers",
			"alerts": "Alerts & announce"
		},
		"languageHeading": "Language",
		"languageBody": "Choose the language for console labels, settings, and dialogs. Marketing pages use the same choice when opened in the app.",
		"languageLabel": "Display language",
		"languageAria": "Display language"
	},
	"help": {
		"title": "Console help",
		"commandPalette": "Ctrl+K — command palette (views, copy preset URLs).",
		"lookScale": "Settings → Look — window scale for the whole console (separate from overlay UI scale).",
		"archiveChips": "Archive chips — double-click to pin a search token.",
		"importPreview": "Import — pick a bundle to preview files before importing."
	},
	"careers": {
		"legend": "Driving career profiles",
		"hint": "Organize archive, dashboard, and future content under a named career tied to ETS2 or ATS. Portrait defaults to a generated avatar from your profile name — randomize or upload PNG/WebP/JPEG (max 512×512, 384 KiB).",
		"profileUpdated": "Profile updated.",
		"profileCreated": "Profile created.",
		"saveFailed": "Save failed."
	},
	"onboarding": {
		"steps": {
			"setup": "Game & plugin",
			"verify": "Verify",
			"done": "Ready"
		}
	},
	"marketing": {
		"heroTitle": "Overlane",
		"heroTaglineLead": "One local stack",
		"heroTaglineRest": " on your PC: telemetry console, searchable drive archive, session journal, and",
		"heroTaglineEm": "OBS-ready",
		"heroTaglineEnd": " overlay panels for Euro Truck Simulator 2 and American Truck Simulator.",
		"badgeLocalFirst": "Local-first",
		"badgeWindows": "Windows desktop + browser",
		"badgeNoCloud": "No cloud account",
		"badgeStreamer": "Streamer-ready",
		"playerGuide": "Player guide",
		"gettingStarted": "Getting started",
		"exploreFeatures": "Explore features ↓",
		"proprietaryFine": "Proprietary software · not open source",
		"statLive": "Live",
		"statArchive": "Archive",
		"statArchiveDetail": "Timeline, search, inspector, compare",
		"statJournal": "Session log",
		"statVault": "Vault",
		"statVaultDetail": "Export settings, data, logs",
		"tabsAria": "Product sections",
		"tabs": {
			"features": "Features",
			"architecture": "Architecture",
			"data": "Data plane",
			"live": "Live & overlays",
			"desktop": "Desktop",
			"trust": "Trust & IT",
			"docs": "Guides & download"
		},
		"footerCopyright": "Copyright © Strixun. Overlane is proprietary software.",
		"footerGlossary": "Dotted glossary terms show a short explanation on hover or focus.",
		"mocks": {
			"tailFollow": "Tail follow",
			"logFiles": "Log files",
			"logHint": "Download file · sort · virtualized scroll in app",
			"recording": "Recording",
			"ldpIngest": "LDP ingest",
			"archiveTimeline": "Archive timeline · snapshots",
			"speed": "Speed",
			"fuel": "Fuel",
			"lanPort": "LAN · port 8080",
			"telemetryLive": "Telemetry live",
			"archiveRecording": "Archive recording",
			"journalIdle": "Journal idle",
			"liveDriving": "Live driving",
			"liveFromGame": "Live from game",
			"gear": "Gear",
			"odometer": "Odometer",
			"wizardTitle": "Link your game",
			"wizardStepDetect": "Detect ETS2 / ATS install",
			"wizardStepPlugin": "Enable SDK telemetry plugin",
			"wizardStepTest": "Test live speed & job fields",
			"wizardWaiting": "Waiting for first telemetry frame…",
			"serverRunning": "Server running",
			"gameLinked": "Game linked",
			"httpServer": "HTTP server",
			"bindAddress": "Bind address",
			"port": "Port",
			"overlayBaseUrl": "Overlay base URL",
			"gameLink": "Game link",
			"gameLinkStatusBeforePing": "ETS2 · SDK plugin active · last ping",
			"browserSources": "Browser sources"
		},
		"dataScale": {
			"title": "Scale and storage (honest)",
			"lead": "Recording is sparse by design — not every game tick becomes a row — but gzip SDK samples add up when you drive for months. Folding in Archive only collapses what you see in the timeline; it does not delete history on disk.",
			"ingestStrong": "Ingest sampling",
			"ingestBody": "default about one second between eligible rows, plus writes when speed or job context changes, on collisions, or at job boundaries.",
			"foldStrong": "Fold similar",
			"foldBody": "collapse adjacent snapshots in the same minute (or second/hour) when route, cargo, truck, trailer, speed, and on-job match; fines and deliveries always stay visible.",
			"sizeStrong": "Size ballpark",
			"sizeBody": "on the order of half a megabyte per thousand stored observations for list data; with full inspector samples, often a few kilobytes per row — expect single-digit to low tens of gigabytes for multi-million-mile careers unless you tune sampling.",
			"hotStrong": "Hot tier",
			"hotBody": "recent facts stay in SQLite; older observations can move to cold column files and a search index so the console stays responsive.",
			"quotaStrong": "No cloud quota",
			"quotaBody": "the app does not enforce a disk cap; use Settings maintenance, vault export, and mock purge when a folder grows past what your disk comfortably holds."
		},
		"catalog": {
			"archiveFoldSimilar": "Fold similar — collapse matching snapshots in a time window; fines and deliveries never fold",
			"ldpArchitectureLayer": "Hot ledger, cold column files, and search index on one machine — sparse ingest and rollup buckets keep dashboards fast as observation counts climb into the millions."
		},
		"showcase": {
			"heading": "The console you run beside the game",
			"lead": "One operator surface in the desktop app and browser: health strip, archive, overlays, and settings — samples rotate below so you can see each area without hunting through tabs.",
			"galleryLabel": "Tour the product",
			"note": "Illustrative samples — not a live session. Install Overlane for your own telemetry.",
			"carouselPrevAria": "Previous sample",
			"carouselNextAria": "Next sample",
			"carouselTablistAria": "Product samples",
			"slideHomeTitle": "Home · Live driving",
			"slideHomeBlurb": "Speed, fuel, gear, odometer, and active contract — the same card you get from real telemetry.",
			"slideArchiveTitle": "Archive timeline",
			"slideArchiveBlurb": "Scrub snapshots on disk and compare lanes without replaying the entire session.",
			"slideJournalBlurbBefore": "Browse ",
			"slideJournalBlurbBetween": " / ",
			"slideJournalBlurbAfter": " files, tail lines with follow mode, and download — app logging, not sticky notes.",
			"slideOverlaysTitle": "Overlay presets",
			"slideOverlaysBlurb": "Copy browser-source URLs for Velocity, Controls, Contract, and the rest of the canon catalog.",
			"slideStreamTitle": "Stream overlays",
			"slideStreamBlurb": "Telemetry glass styling — speed focus, minimal, or route-first on one feed.",
			"slideSettingsTitle": "Settings · Connection",
			"slideSettingsBlurb": "Bind address, port, and overlay base URL on your machine.",
			"slideGameLinkTitle": "Game link wizard",
			"slideGameLinkBlurb": "Pick your sim folder and confirm the official telemetry plugin before you roll.",
			"pillarLive": "Live",
			"pillarData": "Data",
			"pillarFeatures": "Features",
			"pillarDesktop": "Desktop",
			"pillarSetup": "Setup"
		},
		"guidesPanel": {
			"onPageTitle": "On this page",
			"onPageLead": "Everything here is self-contained. Engineering source and internal docs are not published on GitHub.",
			"linkDownloads": "Windows installers",
			"linkGettingStarted": "Getting started",
			"linkPlayerGuide": "Player guide",
			"linkLicense": "Proprietary notice",
			"getOverlaneTitle": "Get Overlane"
		},
		"flowNodes": {
			"gamePlugin": "Game plugin",
			"sidecar": "Sidecar",
			"consoleOverlays": "Console / overlays",
			"obsBrowser": "OBS browser",
			"localService": "Local service",
			"console": "Console",
			"you": "You",
			"overlayPanels": "Overlay panels",
			"obsSlashBrowser": "OBS / browser",
			"ingest": "Ingest",
			"hotLedger": "Hot ledger",
			"coldFiles": "Cold files"
		},
		"panels": {
			"features": {
				"title": "Built for the long haul",
				"lead": "Overlane reads the game, serves a rich operator console, feeds your stream, and records every mile you opt into for dashboards and archive replay — all on your PC.",
				"calloutStrong": "Your data stays local.",
				"calloutRest": " No cloud account is required.",
				"flowCaption": "Game → local service → you and your stream",
				"flowAria": "End-to-end product flow",
				"flowStreamLabel": "Stream path",
				"flowStreamRest": " — same service, different surface"
			},
			"architecture": {
				"title": "Composable local product",
				"lead": "UI, live feed, recording, and overlays share explicit boundaries so features evolve without a monolith.",
				"cladLead": "House structure follows",
				"cladTail": " — small units wired through clear interfaces (ports/adapters, catalog-driven overlay policy).",
				"flowCaption": "Requests stay on loopback by default",
				"flowAria": "Architecture request flow",
				"flowOptionalRow": "Optional — LAN bind in Settings"
			},
			"data": {
				"title": "Local data plane",
				"lead": "Recent observations stay in a fast ledger; older facts move to compact column files; search has its own index — no hosted warehouse.",
				"calloutStrong": "Large archive design",
				"calloutRest": " — hot/cold tiering on one machine.",
				"timelineStrong": "Archive timeline",
				"timelineBody": " — snapshot folds and inspector for haul-level replay.",
				"analyticsStrong": "Analytics index",
				"analyticsBody": " — backs Dashboard charts and delivery rollups when ingest is on.",
				"vaultStrong": "Vault export",
				"vaultBody": " — settings, data paths, and logs for backup or support bundles.",
				"journalStrong": "Session log files",
				"journalBody": " — plain logs on disk; not the same store as archive snapshots.",
				"flowCaption": "Write and read paths",
				"flowAria": "Data tiering"
			},
			"live": {
				"title": "Live telemetry and overlays",
				"leadBefore": "Overlay panels subscribe to",
				"leadAfter": " from the same local service that powers the console — MMF capture from the game, fan-out to browser sources.",
				"presetsStrong": "Preset panels",
				"presetsBody": " — canon paths such as speed, fuel, contract; per-panel metric toggles and order.",
				"globalStrong": "Global overlay look",
				"globalBody": " — glass, typography, and shared styling saved to config.",
				"composeStrong": "Compose layouts",
				"composeBodyBefore": " — ",
				"composeBodyAfter": " from the builder workspace.",
				"soloStrong": "Solo metrics",
				"soloBodyBefore": " — ",
				"soloBodyAfter": " for minimal stream layouts.",
				"announceStrong": "Announce",
				"announceBody": " — job completion strip configurable from Settings and Overlays."
			},
			"desktop": {
				"title": "Windows desktop",
				"leadBefore": "",
				"leadBetween": " packages the local service, analytics library, and official telemetry DLL into ",
				"leadAfter": " installers.",
				"colInstaller": "Installer",
				"colAudience": "Audience",
				"colBehaviour": "Behaviour",
				"rowProdName": "Overlane",
				"rowProdAudience": "Players & streamers",
				"rowProdBehaviour": "Live telemetry, full archive, game-link wizard",
				"rowDemoName": "Overlane Demo",
				"rowDemoAudience": "Trials",
				"rowDemoBehaviour": "Sample telemetry and archive without the game"
			},
			"trust": {
				"title": "Trust & privacy",
				"lead": "Single-user local product — your haul data is not a hosted multi-tenant service.",
				"calloutStrong": "Default bind:",
				"calloutBefore": " ",
				"calloutAfter": ". LAN exposure is opt-in in Settings.",
				"footer": "Proprietary software. Shipped installers include third-party components under their own licenses."
			}
		},
		"architectureLayers": {
			"desktopTitle": "Desktop shell",
			"desktopText": "Tauri window with custom titlebar, opens the console webview on localhost, manages sidecar lifecycle.",
			"serviceTitle": "Local service",
			"serviceText": "Go HTTP server: telemetry ingest, archive API, overlay routes, static console bundles, SSE live feed.",
			"consoleTitle": "Console UI",
			"consoleText": "CLAD-shaped React views with custom elements for heavy widgets; one operator surface for archive, journal, overlays.",
			"overlayTitle": "Overlay surfaces",
			"overlayTextBefore": "Separate browser URLs (",
			"overlayTextMid": ", ",
			"overlayTextAfter": ") fed by the same live feed and saved visual config.",
			"ldpTitle": "Local data plane"
		},
		"featureAreas": {
			"homeTitle": "Home",
			"homeSummary": "Live driving card beside the game.",
			"homeB0": "Speed, fuel %, gear, odometer from the live telemetry snapshot",
			"homeB1": "Active route and cargo when a job is in progress",
			"homeB2": "Health strip and capture status at a glance",
			"dashboardTitle": "Dashboard",
			"dashboardSummary": "Rollups and charts over your archive — not the raw timeline.",
			"dashboardB0": "Editable tile layout with profiles you can save",
			"dashboardB1": "Time-series charts and exception lists from indexed analytics",
			"dashboardB2": "Jumps into Archive when a chart references a specific span",
			"archiveTitle": "Archive",
			"archiveSummary": "Searchable drive memory on disk.",
			"archiveB1": "Timeline with hierarchical folds and virtualized rows",
			"archiveB3": "Search tokens, range filters, and inspector detail",
			"archiveB4": "SDK payload view and neighbor diff for support/debug",
			"journalTitle": "Session log",
			"journalSummary": "Read Overlane log files — not an in-app notes pad.",
			"journalB0Before": "Lists plain ",
			"journalB0Between": " and rotated ",
			"journalB0After": " files on disk",
			"journalB1": "Virtualized log viewer with sort and tail-style follow",
			"journalB2": "Download a file; driving snapshots stay under Archive / Dashboard",
			"deliveriesTitle": "Deliveries",
			"deliveriesSummary": "Job history from telemetry-backed delivery records.",
			"deliveriesB0": "Sortable delivery log with job summary panels",
			"deliveriesB1": "Event groups and durations when analytics are available",
			"deliveriesB2": "Open detail without leaving the console",
			"overlaysTitle": "Overlays",
			"overlaysSummary": "OBS browser sources from the same local service.",
			"overlaysB0": "Preset panels (Velocity, Controls, Contract, …) with live thumbnails",
			"overlaysB1": "Per-panel configure, metric order, and global overlay appearance",
			"overlaysB2Before": "Full-screen builder at ",
			"overlaysB2Mid": " plus solo metric URLs at ",
			"settingsTitle": "Settings",
			"settingsSummary": "Connection, storage, announce, and maintenance.",
			"settingsB0": "Bind address, port, overlay base URL, units, and appearance",
			"settingsB1": "Game link wizard and official telemetry plugin install",
			"settingsB2": "Archive maintenance, vault export, speed alerts, dirty-save bar",
			"referenceTitle": "Reference",
			"referenceSummary": "SDK and capture glossary for operators.",
			"referenceB0": "Official SCS SDK channels vs Overlane wiring",
			"referenceB1": "MMF path, live-feed key, and capture status explainers"
		},
		"stickyBuyNow": "BUY NOW",
		"glossaryLabels": {
			"layman": "Layman:",
			"overlane": "Overlane:"
		},
		"glossary": {
			"arrowIpc": {
				"title": "Arrow IPC",
				"body": "Column-oriented tables streamed between processes in a compact binary format.",
				"layman": "A wide pipe that moves spreadsheet-style columns in bulk.",
				"ol": "Desktop archive uses this for large timeline windows."
			},
			"sse": {
				"title": "Server-Sent Events (SSE)",
				"body": "A one-way HTTP channel where the server pushes live updates to the browser.",
				"layman": "Overlay pages keep a light connection open for fresh numbers.",
				"ol": "Panel URLs subscribe for live speed, job, and compose widgets."
			},
			"mmf": {
				"title": "Memory-mapped file (MMF)",
				"body": "On Windows, shared RAM the game plugin and Overlane both map into.",
				"layman": "A shared clipboard both the game and Overlane read instantly.",
				"ol": "Official path uses Local\\OverlaneTelemetry via overlane-telemetry.dll."
			},
			"duckdb": {
				"title": "DuckDB",
				"body": "Embedded analytical SQL for local files without a separate database server.",
				"layman": "SQL analytics on your trip files on disk.",
				"ol": "Shipped in Windows installers for archive viewports and rollups."
			},
			"tantivy": {
				"title": "Tantivy",
				"body": "Full-text search engine for fast keyword queries over archive text.",
				"layman": "What makes search-as-you-type feel instant.",
				"ol": "Indexes journal and archive text on your machine."
			},
			"parquet": {
				"title": "Apache Parquet",
				"body": "Compressed columnar files suited to cold historical facts.",
				"layman": "Efficient packing for older trips on disk.",
				"ol": "Cold tier storage for archived observations."
			},
			"sqlite": {
				"title": "SQLite",
				"body": "Embedded SQL database used as the hot ledger for recent observations.",
				"layman": "Today's drive notes land here first.",
				"ol": "Live telemetry does not write here; ingest does when recording is on."
			},
			"wal": {
				"title": "SQLite WAL",
				"body": "Write-ahead logging for safer concurrent reads and writes.",
				"layman": "Browse the archive while new rows still land.",
				"ol": "Hot ledger mode for ingest overlap."
			},
			"zstd": {
				"title": "ZSTD",
				"body": "Modern compression for smaller cold files.",
				"layman": "Tighter packing so disks fill slower.",
				"ol": "Used when tiering observations to cold storage."
			},
			"fts": {
				"title": "Full-text search (FTS)",
				"body": "Inverted index for keyword search without scanning every row.",
				"layman": "The lookup table behind archive search.",
				"ol": "Works with filters like @cargo: in the console."
			},
			"clad": {
				"title": "CLAD",
				"body": "Composable Layered Agnostic Design — small units wired through explicit interfaces.",
				"layman": "Labeled blocks instead of one tangled script.",
				"ol": "How this marketing site and the product UI stay modular."
			},
			"nsis": {
				"title": "NSIS",
				"body": "Windows installer technology used for Overlane setup bundles.",
				"layman": "The familiar Next → Next installer wizard.",
				"ol": "Production and Demo are separate downloads."
			},
			"tauri": {
				"title": "Tauri",
				"body": "Native Windows shell hosting the web console and local service lifecycle.",
				"layman": "The desktop app wrapper around the browser console.",
				"ol": "Boot splash, health-gated startup, bundled telemetry DLL."
			},
			"loopback": {
				"title": "Loopback bind",
				"body": "HTTP listens on localhost unless you opt into LAN exposure in Settings.",
				"layman": "Overlane talks on your PC by default—not the whole café Wi‑Fi.",
				"ol": "Default for console and overlay URLs."
			},
			"sidecar": {
				"title": "Sidecar process",
				"body": "Companion service for API, live feed, ingest, and archive.",
				"layman": "The engine running while the desktop window is open.",
				"ol": "Started by the desktop app at launch."
			},
			"spa": {
				"title": "Single-page app (SPA)",
				"body": "Web UI that swaps views without full page reloads.",
				"layman": "One window; hop between Archive, Journal, Settings.",
				"ol": "The operator console experience."
			},
			"scsSdk": {
				"title": "SCS SDK",
				"body": "Official plugin SDK for ETS2 and ATS telemetry.",
				"layman": "The hook that reads what the truck is doing in-game.",
				"ol": "overlane-telemetry.dll targets this SDK."
			},
			"oltp": {
				"title": "OLTP",
				"body": "Many small, fast writes as you drive.",
				"layman": "Recording each moment as it happens.",
				"ol": "Hot ledger tuning for ingest."
			}
		}
	},
	"guides": {
		"gettingStarted": {
			"title": "Getting started",
			"lead": "Overlane runs on your PC. Nothing is uploaded off your machine by default.",
			"b0": "Get the latest Windows installer from https://short.army/overlane (Buy now card appears after you scroll).",
			"b1": "Run the installer and start Overlane from the Start menu.",
			"b2": "Follow the game-link wizard: pick your ETS2 or ATS folder and install the official telemetry plugin when prompted.",
			"b3": "Open Overlays and copy a panel URL into OBS or a browser beside the game.",
			"b4": "Optional: enable recording under Settings → Storage for timelines and search."
		},
		"playerGuide": {
			"title": "Player guide",
			"lead0": "You need a supported telemetry plugin in the game’s plugins folder and the Overlane Windows app.",
			"b0": "Load a profile in the game — the console health strip shows when telemetry is live.",
			"b1": "Open Home for the Live driving card: speed, fuel, gear, odometer, and active route when you are on a job.",
			"b2": "Use Overlays to copy panel URLs into your streaming app.",
			"b3": "Tray menu: open the console or quit before running an installer upgrade.",
			"b4": "Overlane Demo includes sample data so you can explore without the game."
		},
		"license": {
			"title": "Proprietary notice",
			"p0": "Copyright © Strixun. All rights reserved.",
			"p1": "Overlane is proprietary software. This public site is marketing materials only — Windows installers ship through licensed purchase channels, not this repository.",
			"p2": "You may not copy, modify, or redistribute the software except as permitted by your license agreement or the terms on the release you downloaded.",
			"p3": "Shipped installers include third-party components under their own licenses."
		},
		"downloads": {
			"title": "Windows installers",
			"p0": "Production Overlane includes live telemetry and the full archive stack.",
			"p1": "Overlane Demo lets you explore the console with sample telemetry — no game required."
		}
	}
} as BaseTranslation;

export default translation;
