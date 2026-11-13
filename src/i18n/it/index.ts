import type { Translation } from '../i18n-types.js';

const translation = {
	"brand": {
		"name": "[it] Overlane",
		"tagline": "[it] Telemetry · overlays · archive observations"
	},
	"common": {
		"close": "[it] Close",
		"loading": "[it] Loading…",
		"save": "[it] Save",
		"cancel": "[it] Cancel",
		"overlaneJson": "[it] overlane.json"
	},
	"nav": {
		"home": "[it] Home",
		"overlays": "[it] Overlays",
		"overlaysSub": "[it] Panel URLs",
		"dashboard": "[it] Dashboard",
		"dashboardSub": "[it] Archive rollups",
		"archive": "[it] Archive",
		"archiveSub": "[it] Snapshots",
		"journal": "[it] Session log",
		"journalSub": "[it] Log files",
		"deliveries": "[it] Delivery log",
		"deliveriesSub": "[it] Completed jobs",
		"overlayBuilder": "[it] Overlay builder",
		"overlayBuilderSub": "[it] Compose layouts",
		"mockLab": "[it] Mock lab",
		"mockLabSub": "[it] Mock telemetry",
		"reference": "[it] Reference",
		"referenceSub": "[it] Icons & metrics",
		"settings": "[it] Settings",
		"support": "[it] Support",
		"supportSub": "[it] Discord community",
		"toolsAria": "[it] Reference, settings & support"
	},
	"views": {
		"home": "[it] Home",
		"overlays": "[it] Overlays",
		"dashboard": "[it] Dashboard",
		"archive": "[it] Archive",
		"journal": "[it] Session log",
		"deliveries": "[it] Delivery log",
		"settings": "[it] Settings",
		"reference": "[it] Reference"
	},
	"titlebar": {
		"brandAria": "[it] Go to Home",
		"collapseNav": "[it] Collapse navigation",
		"collapseNavSr": "[it] Collapse navigation",
		"resizeNav": "[it] Resize navigation",
		"minimize": "[it] Minimize",
		"maximize": "[it] Maximize",
		"restore": "[it] Restore",
		"close": "[it] Close"
	},
	"commandPalette": {
		"goToView": "[it] Go to view",
		"referenceHint": "[it] Icon & metric glossaries",
		"overlayBuilder": "[it] Overlay builder",
		"overlayBuilderHint": "[it] Compose layouts (/builder)",
		"vaultImportExport": "[it] Import / export vault",
		"vaultHint": "[it] Settings → Data",
		"searchMetrics": "[it] Search metrics glossary",
		"searchMetricsHint": "[it] Reference → metrics",
		"searchIcons": "[it] Search icon glossary",
		"searchIconsHint": "[it] Reference → icons"
	},
	"settings": {
		"sectionsAria": "[it] Settings sections",
		"leadBeforeConfig": "[it] Everything here is saved to your",
		"leadAfterConfig": "[it] . App theme previews as you pick a preset — use",
		"leadAfterSaveTheme": "[it] to keep it. Server, telemetry, folders, and collision tuning need a restart of Overlane (desktop app or sidecar).",
		"saveAppTheme": "[it] Save app theme",
		"tabs": {
			"look": "[it] Look",
			"language": "[it] Language",
			"connection": "[it] Connection",
			"storage": "[it] Storage",
			"data": "[it] Data",
			"careers": "[it] Careers",
			"alerts": "[it] Alerts & announce"
		},
		"languageHeading": "[it] Language",
		"languageBody": "[it] Choose the language for console labels, settings, and dialogs. Marketing pages use the same choice when opened in the app.",
		"languageLabel": "[it] Display language",
		"languageAria": "[it] Display language"
	},
	"help": {
		"title": "[it] Console help",
		"commandPalette": "[it] Ctrl+K — command palette (views, copy preset URLs).",
		"lookScale": "[it] Settings → Look — window scale for the whole console (separate from overlay UI scale).",
		"archiveChips": "[it] Archive chips — double-click to pin a search token.",
		"importPreview": "[it] Import — pick a bundle to preview files before importing."
	},
	"careers": {
		"legend": "[it] Driving career profiles",
		"hint": "[it] Organize archive, dashboard, and future content under a named career tied to ETS2 or ATS. Portrait defaults to a generated avatar from your profile name — randomize or upload PNG/WebP/JPEG (max 512×512, 384 KiB).",
		"profileUpdated": "[it] Profile updated.",
		"profileCreated": "[it] Profile created.",
		"saveFailed": "[it] Save failed."
	},
	"onboarding": {
		"steps": {
			"setup": "[it] Game & plugin",
			"verify": "[it] Verify",
			"done": "[it] Ready"
		}
	},
	"marketing": {
		"heroEyebrow": "[it] Overlane",
		"heroTitle": "[it] Drive with a live map, a mile-by-mile archive, and stream overlays",
		"heroSubhead": "[it] One Windows app for ETS2 and ATS — console beside the game, OBS browser sources, no cloud account.",
		"heroTaglineLead": "[it] One local stack",
		"heroTaglineRest": "[it]  on your PC: telemetry console, searchable drive archive, session journal, and",
		"heroTaglineEm": "[it] OBS-ready",
		"heroTaglineEnd": "[it]  overlay panels for Euro Truck Simulator 2 and American Truck Simulator.",
		"heroCtaTour": "[it] See how it works",
		"heroProofLive": "[it] Live + archive on your PC",
		"heroProofOverlays": "[it] OBS-ready overlays",
		"heroProofJournal": "[it] Session journal on disk",
		"heroProofWorker": "[it] Local worker — no sign-in",
		"badgeLocalFirst": "[it] Local-first",
		"badgeWindows": "[it] Windows · NSIS installers",
		"badgeNoCloud": "[it] No cloud account",
		"badgeStreamer": "[it] Streamer-ready",
		"heroCtaDownload": "[it] Download for Windows",
		"heroCtaDemo": "[it] Try Demo installer",
		"heroCtaDemoSub": "[it] Mock telemetry — no game",
		"playerGuide": "[it] Player guide",
		"gettingStarted": "[it] Getting started",
		"exploreFeatures": "[it] Explore features ↓",
		"proprietaryFine": "[it] Proprietary software · not open source",
		"statLive": "[it] Live",
		"statArchive": "[it] Archive",
		"statArchiveDetail": "[it] Timeline, search, inspector, compare",
		"statJournal": "[it] Session log",
		"statLiveDetailFrom": "[it]  overlay panels from ",
		"statJournalDetailBefore": "[it] On-disk ",
		"statJournalDetailAfter": "[it]  files + line viewer",
		"statVault": "[it] Vault",
		"statVaultDetail": "[it] Export settings, data, logs",
		"codeExtensions": {
			"log": "[it] .log",
			"logGz": "[it] .log.gz"
		},
		"glossaryTermText": {
			"sse": "[it] SSE",
			"mmf": "[it] shared memory",
			"tauri": "[it] Tauri",
			"nsis": "[it] NSIS",
			"loopback": "[it] localhost only"
		},
		"tabsAria": "[it] Product sections",
		"tabs": {
			"features": "[it] Features",
			"architecture": "[it] Architecture",
			"data": "[it] Data plane",
			"live": "[it] Live & overlays",
			"desktop": "[it] Desktop",
			"trust": "[it] Trust & IT",
			"docs": "[it] Guides & download"
		},
		"footerCopyright": "[it] Copyright © Strixun. Overlane is proprietary software.",
		"footerGlossary": "[it] Dotted glossary terms show a short explanation on hover or focus.",
		"mocks": {
			"tailFollow": "[it] Tail follow",
			"logFiles": "[it] Log files",
			"logHint": "[it] Download file · sort · virtualized scroll in app",
			"recording": "[it] Archive on",
			"ldpIngest": "[it] Plugin ready",
			"archiveOn": "[it] Archive on",
			"journalOn": "[it] Journal on",
			"pluginReady": "[it] Plugin ready",
			"workerReady": "[it] Worker ready",
			"archiveTimeline": "[it] Archive timeline · snapshots",
			"speed": "[it] Speed",
			"fuel": "[it] Fuel",
			"lanPort": "[it] LAN · port 8080",
			"telemetryLive": "[it] Game linked",
			"archiveRecording": "[it] Archive on",
			"journalIdle": "[it] Journal on",
			"liveDriving": "[it] Live driving",
			"liveFromGame": "[it] On job",
			"onJob": "[it] On job",
			"gear": "[it] Gear",
			"odometer": "[it] Odometer",
			"wizardTitle": "[it] Game setup",
			"wizardStepDetect": "[it] Hook up game telemetry",
			"wizardStepPlugin": "[it] Install your telemetry plugin",
			"wizardStepTest": "[it] Verify connection",
			"wizardWaiting": "[it] Waiting for telemetry",
			"serverRunning": "[it] Worker ready",
			"gameLinked": "[it] Game linked",
			"httpServer": "[it] HTTP server",
			"bindAddress": "[it] Bind address",
			"port": "[it] Port",
			"overlayBaseUrl": "[it] Overlay base URL",
			"gameLink": "[it] Game link",
			"gameLinkStatusBeforePing": "[it] ETS2 · SDK plugin active · last ping",
			"browserSources": "[it] Browser sources",
			"kmBuffered": "[it] 412 km buffered",
			"logFileCount": "[it] 2 log files",
			"sampleLogFile": "[it] overlane-2026-11-09.log",
			"presetCount": "[it] 4 presets",
			"speedUnit": "[it] km/h",
			"speedUnitLeadingSpace": "[it]  km/h",
			"routeBadge": "[it] Route",
			"onTime": "[it] On time",
			"fuelPercent": "[it] {pct}% fuel",
			"fuelLabel": "[it] Fuel {pct}%",
			"gearLabel": "[it] Gear {gear}",
			"archiveListCaption": "[it] Selected row — inspector shows {route} for this snapshot."
		},
		"dataScale": {
			"title": "[it] Scale and storage (honest)",
			"lead": "[it] Recording is sparse by design — not every game tick becomes a row — but gzip SDK samples add up when you drive for months. Folding in Archive only collapses what you see in the timeline; it does not delete history on disk.",
			"ingestStrong": "[it] Ingest sampling",
			"ingestBody": "[it] default about one second between eligible rows, plus writes when speed or job context changes, on collisions, or at job boundaries.",
			"foldStrong": "[it] Fold similar",
			"foldBody": "[it] collapse adjacent snapshots in the same minute (or second/hour) when route, cargo, truck, trailer, speed, and on-job match; fines and deliveries always stay visible.",
			"sizeStrong": "[it] Size ballpark",
			"sizeBody": "[it] on the order of half a megabyte per thousand stored observations for list data; with full inspector samples, often a few kilobytes per row — expect single-digit to low tens of gigabytes for multi-million-mile careers unless you tune sampling.",
			"hotStrong": "[it] Hot tier",
			"hotBody": "[it] recent facts stay in SQLite; older observations can move to cold column files and a search index so the console stays responsive.",
			"quotaStrong": "[it] No cloud quota",
			"quotaBody": "[it] the app does not enforce a disk cap; use Settings maintenance, vault export, and mock purge when a folder grows past what your disk comfortably holds."
		},
		"catalog": {
			"archiveFoldSimilar": "[it] Fold similar — collapse matching snapshots in a time window; fines and deliveries never fold",
			"ldpArchitectureLayer": "[it] Hot ledger, cold column files, and search index on one machine — sparse ingest and rollup buckets keep dashboards fast as observation counts climb into the millions."
		},
		"homeScroll": {
			"anchorTour": "[it] Product tour",
			"anchorOutcomes": "[it] Outcomes",
			"anchorInstall": "[it] Install",
			"anchorGuides": "[it] Guides",
			"anchorsAria": "[it] On this page",
			"outcomesTitle": "[it] What you get on day one",
			"outcomesLead": "[it] Four outcomes — live driving, memory, streaming, and setup — without hunting menus.",
			"installTitle": "[it] Install options",
			"installLead": "[it] Ship a production build or try mock telemetry before you link the game.",
			"powerUsersTitle": "[it] IT & power users",
			"powerUsersSummary": "[it] Architecture, local data plane, overlay policy, and trust boundaries for reviewers."
		},
		"homeOutcomes": {
			"liveArchiveTitle": "[it] Live map & archive",
			"liveArchiveSummary": "[it] Home card from real telemetry and a searchable timeline when recording is on.",
			"liveArchiveB0": "[it] Speed, fuel, contract, and health strip while you drive.",
			"liveArchiveB1": "[it] Search the timeline, fold similar rows, and open any snapshot in the inspector.",
			"overlaysTitle": "[it] Overlays for streams",
			"overlaysSummary": "[it] Canon preset URLs for OBS and browser sources — same metrics as the console.",
			"overlaysB0": "[it] Velocity, controls, contract, and the rest of the catalog.",
			"overlaysB1": "[it] Copy a URL once; point OBS at localhost.",
			"journalTitle": "[it] Session journal",
			"journalSummary": "[it] On-disk logs with tail-follow and download — app logging, not cloud notes.",
			"journalB0Before": "[it] Browse ",
			"journalB0Between": "[it]  and ",
			"journalB0After": "[it]  with virtualized scroll in the app.",
			"journalB1": "[it] Tail lines with follow mode during long hauls.",
			"workerTitle": "[it] Install & local worker",
			"workerSummary": "[it] Tauri shell, NSIS installers, and one telemetry worker on loopback by default.",
			"workerB0": "[it] Production installer or Demo with mock telemetry — no game required.",
			"workerB1": "[it] Bind address and port in Settings when you need LAN overlays."
		},
		"showcase": {
			"heading": "[it] Three steps beside the game",
			"lead": "[it] Live console, searchable archive, and stream overlays — pick a step below. Nothing auto-advances.",
			"galleryLabel": "[it] Product tour",
			"note": "[it] Illustrative samples — not a live session. Install Overlane for your own telemetry.",
			"carouselPrevAria": "[it] Previous sample",
			"carouselNextAria": "[it] Next sample",
			"carouselTablistAria": "[it] Product samples",
			"slideHomeTitle": "[it] Home · Live driving",
			"slideHomeBlurb": "[it] Speed, fuel, gear, odometer, and active contract — the same card you get from real telemetry.",
			"slideArchiveTitle": "[it] Archive timeline",
			"slideArchiveBlurb": "[it] Virtualized snapshot rows on disk — search, fold similar, and inspect any moment without replaying the session.",
			"slideJournalBlurbBefore": "[it] Browse ",
			"slideJournalBlurbBetween": "[it]  / ",
			"slideJournalBlurbAfter": "[it]  files, tail lines with follow mode, and download — app logging, not sticky notes.",
			"slideOverlaysTitle": "[it] Overlays for OBS",
			"slideOverlaysBlurb": "[it] Copy browser-source URLs for Velocity, Controls, Contract, and stream-ready layouts that match the live console.",
			"slideStreamTitle": "[it] Stream overlays",
			"slideStreamBlurb": "[it] Telemetry glass styling — speed focus, minimal, or route-first on one feed.",
			"slideSettingsTitle": "[it] Settings · Connection",
			"slideSettingsBlurb": "[it] Bind address, port, and overlay base URL on your machine.",
			"slideGameLinkTitle": "[it] Game link wizard",
			"slideGameLinkBlurb": "[it] Pick your sim folder and confirm the official telemetry plugin before you roll.",
			"pillarLive": "[it] Live",
			"pillarData": "[it] Data",
			"pillarFeatures": "[it] Features",
			"pillarDesktop": "[it] Desktop",
			"pillarSetup": "[it] Setup"
		},
		"guidesPanel": {
			"onPageTitle": "[it] On this page",
			"onPageLead": "[it] Everything here is self-contained. Engineering source and internal docs are not published on GitHub.",
			"linkDownloads": "[it] Windows installers",
			"linkGettingStarted": "[it] Getting started",
			"linkPlayerGuide": "[it] Player guide",
			"linkLicense": "[it] Proprietary notice",
			"getOverlaneTitle": "[it] Get Overlane"
		},
		"flowNodes": {
			"gamePlugin": "[it] Game plugin",
			"sidecar": "[it] Sidecar",
			"consoleOverlays": "[it] Console / overlays",
			"obsBrowser": "[it] OBS browser",
			"localService": "[it] Telemetry worker",
			"console": "[it] Console",
			"you": "[it] You",
			"overlayPanels": "[it] Overlay panels",
			"obsSlashBrowser": "[it] OBS / browser",
			"ingest": "[it] Ingest",
			"hotLedger": "[it] Hot ledger",
			"coldFiles": "[it] Cold files"
		},
		"panels": {
			"features": {
				"title": "[it] Built for the long haul",
				"lead": "[it] Overlane reads the game, serves a rich operator console, feeds your stream, and records every mile you opt into for dashboards and archive replay — all on your PC.",
				"calloutStrong": "[it] Your data stays local.",
				"calloutRest": "[it]  No cloud account is required.",
				"flowCaption": "[it] Game → telemetry worker → you and your stream",
				"flowAria": "[it] End-to-end product flow",
				"flowStreamLabel": "[it] Stream path",
				"flowStreamRest": "[it]  — same worker, different surface"
			},
			"architecture": {
				"title": "[it] Composable local product",
				"lead": "[it] UI, live feed, recording, and overlays share explicit boundaries so features evolve without a monolith.",
				"cladLead": "[it] House structure follows",
				"cladTail": "[it]  — small units wired through clear interfaces (ports/adapters, catalog-driven overlay policy).",
				"flowCaption": "[it] Requests stay on loopback by default",
				"flowAria": "[it] Architecture request flow",
				"flowOptionalRow": "[it] Optional — LAN bind in Settings"
			},
			"data": {
				"title": "[it] Local data plane",
				"lead": "[it] Recent observations stay in a fast ledger; older facts move to compact column files; search has its own index — no hosted warehouse.",
				"calloutStrong": "[it] Large archive design",
				"calloutRest": "[it]  — hot/cold tiering on one machine.",
				"timelineStrong": "[it] Archive timeline",
				"timelineBody": "[it]  — snapshot folds and inspector for haul-level replay.",
				"analyticsStrong": "[it] Analytics index",
				"analyticsBody": "[it]  — backs Dashboard charts and delivery rollups when ingest is on.",
				"vaultStrong": "[it] Vault export",
				"vaultBody": "[it]  — settings, data paths, and logs for backup or support bundles.",
				"journalStrong": "[it] Session log files",
				"journalBody": "[it]  — plain logs on disk; not the same store as archive snapshots.",
				"flowCaption": "[it] Write and read paths",
				"flowAria": "[it] Data tiering"
			},
			"live": {
				"title": "[it] Live telemetry and overlays",
				"leadBefore": "[it] Overlay panels subscribe to",
				"leadAfter": "[it]  from the same user-session telemetry worker that powers the console — MMF capture from the game, fan-out to browser sources.",
				"presetsStrong": "[it] Preset panels",
				"presetsBody": "[it]  — canon paths such as speed, fuel, contract; per-panel metric toggles and order.",
				"globalStrong": "[it] Global overlay look",
				"globalBody": "[it]  — glass, typography, and shared styling saved to config.",
				"composeStrong": "[it] Compose layouts",
				"composeBodyBefore": "[it]  — ",
				"composeBodyAfter": "[it]  from the builder workspace.",
				"soloStrong": "[it] Solo metrics",
				"soloBodyBefore": "[it]  — ",
				"soloBodyAfter": "[it]  for minimal stream layouts.",
				"announceStrong": "[it] Announce",
				"announceBody": "[it]  — job completion strip configurable from Settings and Overlays."
			},
			"desktop": {
				"title": "[it] Windows desktop",
				"leadBefore": "",
				"leadBetween": "[it]  bundles a per-user telemetry worker (not a Windows service), analytics library, and official telemetry DLL into ",
				"leadAfter": "[it]  installers.",
				"colInstaller": "[it] Installer",
				"colAudience": "[it] Audience",
				"colBehaviour": "[it] Behaviour",
				"rowProdName": "[it] Overlane",
				"rowProdAudience": "[it] Players & streamers",
				"rowProdBehaviour": "[it] Live telemetry, console, overlays, archive, and journal — current-user NSIS install",
				"rowDemoName": "[it] Overlane Demo",
				"rowDemoAudience": "[it] Trials",
				"rowDemoBehaviour": "[it] Mock telemetry + pre-seeded archive — explore console, overlays, and journal without the game",
				"installCalloutStrong": "[it] User-session only.",
				"installCalloutBody": "[it]  Neither production nor Demo registers a Windows service or SCM entry — the worker starts when you launch the desktop app and stops when you quit."
			},
			"trust": {
				"title": "[it] Trust & privacy",
				"lead": "[it] Single-user local product — your haul data is not a hosted multi-tenant service.",
				"calloutStrong": "[it] Default bind:",
				"calloutBefore": " ",
				"calloutAfter": "[it] . LAN exposure is opt-in in Settings.",
				"footer": "[it] Proprietary software. Shipped installers include third-party components under their own licenses.",
				"noServiceNote": "[it] No elevated admin install is required for normal use — telemetry stays in your Windows user session."
			}
		},
		"architectureLayers": {
			"desktopTitle": "[it] Desktop shell",
			"desktopText": "[it] Tauri window with custom titlebar, opens the console webview on localhost, starts and stops the telemetry worker with the app.",
			"serviceTitle": "[it] Telemetry worker",
			"serviceText": "[it] Go HTTP server in your user session: telemetry ingest, archive API, overlay routes, console bundles, and SSE live feed.",
			"consoleTitle": "[it] Console UI",
			"consoleText": "[it] CLAD-shaped React views with custom elements for heavy widgets; one operator surface for archive, journal, overlays.",
			"overlayTitle": "[it] Overlay surfaces",
			"overlayTextBefore": "[it] Separate browser URLs (",
			"overlayTextMid": "[it] , ",
			"overlayTextAfter": "[it] ) fed by the same live feed and saved visual config.",
			"ldpTitle": "[it] Local data plane"
		},
		"featureAreas": {
			"homeTitle": "[it] Home",
			"homeSummary": "[it] Live driving card beside the game.",
			"homeB0": "[it] Speed, fuel %, gear, odometer from the live telemetry snapshot",
			"homeB1": "[it] Active route and cargo when a job is in progress",
			"homeB2": "[it] Health strip and capture status at a glance",
			"dashboardTitle": "[it] Dashboard",
			"dashboardSummary": "[it] Rollups and charts over your archive — not the raw timeline.",
			"dashboardB0": "[it] Editable tile layout with profiles you can save",
			"dashboardB1": "[it] Time-series charts and exception lists from indexed analytics",
			"dashboardB2": "[it] Jumps into Archive when a chart references a specific span",
			"archiveTitle": "[it] Archive",
			"archiveSummary": "[it] Searchable drive memory on disk.",
			"archiveB1": "[it] Timeline with hierarchical folds and virtualized rows",
			"archiveB3": "[it] Search tokens, range filters, and inspector detail",
			"archiveB4": "[it] SDK payload view and neighbor diff for support/debug",
			"journalTitle": "[it] Session log",
			"journalSummary": "[it] Read Overlane log files — not an in-app notes pad.",
			"journalB0Before": "[it] Lists plain ",
			"journalB0Between": "[it]  and rotated ",
			"journalB0After": "[it]  files on disk",
			"journalB1": "[it] Virtualized log viewer with sort and tail-style follow",
			"journalB2": "[it] Download a file; driving snapshots stay under Archive / Dashboard",
			"deliveriesTitle": "[it] Deliveries",
			"deliveriesSummary": "[it] Job history from telemetry-backed delivery records.",
			"deliveriesB0": "[it] Sortable delivery log with job summary panels",
			"deliveriesB1": "[it] Event groups and durations when analytics are available",
			"deliveriesB2": "[it] Open detail without leaving the console",
			"overlaysTitle": "[it] Overlays",
			"overlaysSummary": "[it] OBS browser sources from the same telemetry worker as the console.",
			"overlaysB0": "[it] Preset panels (Velocity, Controls, Contract, …) with live thumbnails",
			"overlaysB1": "[it] Per-panel configure, metric order, and global overlay appearance",
			"overlaysB2Before": "[it] Full-screen builder at ",
			"overlaysB2Mid": "[it]  plus solo metric URLs at ",
			"settingsTitle": "[it] Settings",
			"settingsSummary": "[it] Connection, storage, announce, and maintenance.",
			"settingsB0": "[it] Bind address, port, overlay base URL, units, and appearance",
			"settingsB1": "[it] Game link wizard and official telemetry plugin install",
			"settingsB2": "[it] Archive maintenance, vault export, speed alerts, dirty-save bar",
			"referenceTitle": "[it] Reference",
			"referenceSummary": "[it] SDK and capture glossary for operators.",
			"referenceB0": "[it] Official SCS SDK channels vs Overlane wiring",
			"referenceB1": "[it] MMF path, live-feed key, and capture status explainers"
		},
		"stickyBuyNow": "[it] BUY NOW",
		"glossaryLabels": {
			"layman": "[it] Layman:",
			"overlane": "[it] Overlane:"
		},
		"glossary": {
			"arrowIpc": {
				"title": "[it] Arrow IPC",
				"body": "[it] Column-oriented tables streamed between processes in a compact binary format.",
				"layman": "[it] A wide pipe that moves spreadsheet-style columns in bulk.",
				"ol": "[it] Desktop archive uses this for large timeline windows."
			},
			"sse": {
				"title": "[it] Server-Sent Events (SSE)",
				"body": "[it] A one-way HTTP channel where the server pushes live updates to the browser.",
				"layman": "[it] Overlay pages keep a light connection open for fresh numbers.",
				"ol": "[it] Panel URLs subscribe for live speed, job, and compose widgets."
			},
			"mmf": {
				"title": "[it] Memory-mapped file (MMF)",
				"body": "[it] On Windows, shared RAM the game plugin and Overlane both map into.",
				"layman": "[it] A shared clipboard both the game and Overlane read instantly.",
				"ol": "[it] Official path uses Local\\OverlaneTelemetry via overlane-telemetry.dll."
			},
			"duckdb": {
				"title": "[it] DuckDB",
				"body": "[it] Embedded analytical SQL for local files without a separate database server.",
				"layman": "[it] SQL analytics on your trip files on disk.",
				"ol": "[it] Shipped in Windows installers for archive viewports and rollups."
			},
			"tantivy": {
				"title": "[it] Tantivy",
				"body": "[it] Full-text search engine for fast keyword queries over archive text.",
				"layman": "[it] What makes search-as-you-type feel instant.",
				"ol": "[it] Indexes journal and archive text on your machine."
			},
			"parquet": {
				"title": "[it] Apache Parquet",
				"body": "[it] Compressed columnar files suited to cold historical facts.",
				"layman": "[it] Efficient packing for older trips on disk.",
				"ol": "[it] Cold tier storage for archived observations."
			},
			"sqlite": {
				"title": "[it] SQLite",
				"body": "[it] Embedded SQL database used as the hot ledger for recent observations.",
				"layman": "[it] Today's drive notes land here first.",
				"ol": "[it] Live telemetry does not write here; ingest does when recording is on."
			},
			"wal": {
				"title": "[it] SQLite WAL",
				"body": "[it] Write-ahead logging for safer concurrent reads and writes.",
				"layman": "[it] Browse the archive while new rows still land.",
				"ol": "[it] Hot ledger mode for ingest overlap."
			},
			"zstd": {
				"title": "[it] ZSTD",
				"body": "[it] Modern compression for smaller cold files.",
				"layman": "[it] Tighter packing so disks fill slower.",
				"ol": "[it] Used when tiering observations to cold storage."
			},
			"fts": {
				"title": "[it] Full-text search (FTS)",
				"body": "[it] Inverted index for keyword search without scanning every row.",
				"layman": "[it] The lookup table behind archive search.",
				"ol": "[it] Works with filters like @cargo: in the console."
			},
			"clad": {
				"title": "[it] CLAD",
				"body": "[it] Composable Layered Agnostic Design — small units wired through explicit interfaces.",
				"layman": "[it] Labeled blocks instead of one tangled script.",
				"ol": "[it] How this marketing site and the product UI stay modular."
			},
			"nsis": {
				"title": "[it] NSIS",
				"body": "[it] Windows installer technology used for Overlane setup bundles.",
				"layman": "[it] The familiar Next → Next installer wizard.",
				"ol": "[it] Production and Demo are separate downloads."
			},
			"tauri": {
				"title": "[it] Tauri",
				"body": "[it] Native Windows shell hosting the web console and user-session telemetry worker lifecycle.",
				"layman": "[it] The desktop app wrapper around the browser console.",
				"ol": "[it] Boot splash, health-gated startup, bundled telemetry DLL — worker is not a Windows service."
			},
			"loopback": {
				"title": "[it] Loopback bind",
				"body": "[it] HTTP listens on localhost unless you opt into LAN exposure in Settings.",
				"layman": "[it] Overlane talks on your PC by default—not the whole café Wi‑Fi.",
				"ol": "[it] Default for console and overlay URLs."
			},
			"sidecar": {
				"title": "[it] Telemetry worker",
				"body": "[it] Companion Go process for API, live feed, ingest, and archive — runs in your user session, not as a Windows service.",
				"layman": "[it] The engine running while the desktop window is open.",
				"ol": "[it] Started by the desktop app at launch; exits when you quit Overlane."
			},
			"spa": {
				"title": "[it] Single-page app (SPA)",
				"body": "[it] Web UI that swaps views without full page reloads.",
				"layman": "[it] One window; hop between Archive, Journal, Settings.",
				"ol": "[it] The operator console experience."
			},
			"scsSdk": {
				"title": "[it] SCS SDK",
				"body": "[it] Official plugin SDK for ETS2 and ATS telemetry.",
				"layman": "[it] The hook that reads what the truck is doing in-game.",
				"ol": "[it] overlane-telemetry.dll targets this SDK."
			},
			"oltp": {
				"title": "[it] OLTP",
				"body": "[it] Many small, fast writes as you drive.",
				"layman": "[it] Recording each moment as it happens.",
				"ol": "[it] Hot ledger tuning for ingest."
			}
		}
	},
	"guides": {
		"gettingStarted": {
			"title": "[it] Getting started",
			"lead": "[it] Overlane runs on your PC. Nothing is uploaded off your machine by default.",
			"b0": "[it] Get the latest production NSIS installer from https://short.army/overlane (hero Download button or sticky Buy now).",
			"b1": "[it] Run the installer — per-user, not a Windows service — and start Overlane from the Start menu or tray.",
			"b2": "[it] Follow the game-link wizard: pick your ETS2 or ATS folder and install the official telemetry plugin when prompted.",
			"b3": "[it] Open Overlays and copy a panel URL into OBS or a browser beside the game.",
			"b4": "[it] Optional: enable recording under Settings → Storage for archive timelines, dashboard rollups, and search."
		},
		"playerGuide": {
			"title": "[it] Player guide",
			"lead0": "[it] You need a supported telemetry plugin in the game’s plugins folder and the Overlane Windows app.",
			"b0": "[it] Load a profile in the game — the console health strip shows when telemetry is live.",
			"b1": "[it] Open Home for the Live driving card: speed, fuel, gear, odometer, and active route when you are on a job.",
			"b2": "[it] Use Overlays to copy panel URLs into your streaming app.",
			"b3": "[it] Tray menu: open the console or quit before running an installer upgrade.",
			"b4": "[it] Overlane Demo ships mock telemetry and sample archive data — console, overlays, archive, and journal work with no game."
		},
		"license": {
			"title": "[it] Proprietary notice",
			"p0": "[it] Copyright © Strixun. All rights reserved.",
			"p1": "[it] Overlane is proprietary software. This public site is marketing materials only — Windows installers ship through licensed purchase channels, not this repository.",
			"p2": "[it] You may not copy, modify, or redistribute the software except as permitted by your license agreement or the terms on the release you downloaded.",
			"p3": "[it] Shipped installers include third-party components under their own licenses."
		},
		"downloads": {
			"title": "[it] Windows installers",
			"p0": "[it] Windows builds ship as NSIS setup bundles from the purchase link below. Licensed artifacts also publish on the public GitHub release page when a build is promoted.",
			"p1": "[it] Production Overlane connects to live ETS2/ATS telemetry. Overlane Demo uses a built-in mock feed and pre-seeded archive so you can tour every console surface without installing the game.",
			"p2": "[it] Demo install targets the current user profile (for example under LocalAppData) and does not touch Windows services or the Service Control Manager.",
			"b0": "[it] Overlane — live game link, archive, journal, overlays, and operator console.",
			"b1": "[it] Overlane Demo — mock telemetry worker session for trials and stream layout testing.",
			"b2": "[it] Quit Overlane from the tray before upgrading either installer."
		}
	}
} as Translation;

export default translation;
