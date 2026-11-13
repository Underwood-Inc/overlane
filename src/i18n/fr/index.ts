import type { Translation } from '../i18n-types.js';

const translation = {
	"brand": {
		"name": "[fr] Overlane",
		"tagline": "[fr] Telemetry · overlays · archive observations"
	},
	"common": {
		"close": "[fr] Close",
		"loading": "[fr] Loading…",
		"save": "[fr] Save",
		"cancel": "[fr] Cancel",
		"overlaneJson": "[fr] overlane.json"
	},
	"nav": {
		"home": "[fr] Home",
		"overlays": "[fr] Overlays",
		"overlaysSub": "[fr] Panel URLs",
		"dashboard": "[fr] Dashboard",
		"dashboardSub": "[fr] Archive rollups",
		"archive": "[fr] Archive",
		"archiveSub": "[fr] Snapshots",
		"journal": "[fr] Session log",
		"journalSub": "[fr] Log files",
		"deliveries": "[fr] Delivery log",
		"deliveriesSub": "[fr] Completed jobs",
		"overlayBuilder": "[fr] Overlay builder",
		"overlayBuilderSub": "[fr] Compose layouts",
		"mockLab": "[fr] Mock lab",
		"mockLabSub": "[fr] Mock telemetry",
		"reference": "[fr] Reference",
		"referenceSub": "[fr] Icons & metrics",
		"settings": "[fr] Settings",
		"support": "[fr] Support",
		"supportSub": "[fr] Discord community",
		"toolsAria": "[fr] Reference, settings & support"
	},
	"views": {
		"home": "[fr] Home",
		"overlays": "[fr] Overlays",
		"dashboard": "[fr] Dashboard",
		"archive": "[fr] Archive",
		"journal": "[fr] Session log",
		"deliveries": "[fr] Delivery log",
		"settings": "[fr] Settings",
		"reference": "[fr] Reference"
	},
	"titlebar": {
		"brandAria": "[fr] Go to Home",
		"collapseNav": "[fr] Collapse navigation",
		"collapseNavSr": "[fr] Collapse navigation",
		"resizeNav": "[fr] Resize navigation",
		"minimize": "[fr] Minimize",
		"maximize": "[fr] Maximize",
		"restore": "[fr] Restore",
		"close": "[fr] Close"
	},
	"commandPalette": {
		"goToView": "[fr] Go to view",
		"referenceHint": "[fr] Icon & metric glossaries",
		"overlayBuilder": "[fr] Overlay builder",
		"overlayBuilderHint": "[fr] Compose layouts (/builder)",
		"vaultImportExport": "[fr] Import / export vault",
		"vaultHint": "[fr] Settings → Data",
		"searchMetrics": "[fr] Search metrics glossary",
		"searchMetricsHint": "[fr] Reference → metrics",
		"searchIcons": "[fr] Search icon glossary",
		"searchIconsHint": "[fr] Reference → icons"
	},
	"settings": {
		"sectionsAria": "[fr] Settings sections",
		"leadBeforeConfig": "[fr] Everything here is saved to your",
		"leadAfterConfig": "[fr] . App theme previews as you pick a preset — use",
		"leadAfterSaveTheme": "[fr] to keep it. Server, telemetry, folders, and collision tuning need a restart of Overlane (desktop app or sidecar).",
		"saveAppTheme": "[fr] Save app theme",
		"tabs": {
			"look": "[fr] Look",
			"language": "[fr] Language",
			"connection": "[fr] Connection",
			"storage": "[fr] Storage",
			"data": "[fr] Data",
			"careers": "[fr] Careers",
			"alerts": "[fr] Alerts & announce"
		},
		"languageHeading": "[fr] Language",
		"languageBody": "[fr] Choose the language for console labels, settings, and dialogs. Marketing pages use the same choice when opened in the app.",
		"languageLabel": "[fr] Display language",
		"languageAria": "[fr] Display language"
	},
	"help": {
		"title": "[fr] Console help",
		"commandPalette": "[fr] Ctrl+K — command palette (views, copy preset URLs).",
		"lookScale": "[fr] Settings → Look — window scale for the whole console (separate from overlay UI scale).",
		"archiveChips": "[fr] Archive chips — double-click to pin a search token.",
		"importPreview": "[fr] Import — pick a bundle to preview files before importing."
	},
	"careers": {
		"legend": "[fr] Driving career profiles",
		"hint": "[fr] Organize archive, dashboard, and future content under a named career tied to ETS2 or ATS. Portrait defaults to a generated avatar from your profile name — randomize or upload PNG/WebP/JPEG (max 512×512, 384 KiB).",
		"profileUpdated": "[fr] Profile updated.",
		"profileCreated": "[fr] Profile created.",
		"saveFailed": "[fr] Save failed."
	},
	"onboarding": {
		"steps": {
			"setup": "[fr] Game & plugin",
			"verify": "[fr] Verify",
			"done": "[fr] Ready"
		}
	},
	"marketing": {
		"heroEyebrow": "[fr] Overlane",
		"heroTitle": "[fr] Drive with a live map, a mile-by-mile archive, and stream overlays",
		"heroSubhead": "[fr] One Windows app for ETS2 and ATS — console beside the game, OBS browser sources, no cloud account.",
		"heroTaglineLead": "[fr] One local stack",
		"heroTaglineRest": "[fr]  on your PC: telemetry console, searchable drive archive, session journal, and",
		"heroTaglineEm": "[fr] OBS-ready",
		"heroTaglineEnd": "[fr]  overlay panels for Euro Truck Simulator 2 and American Truck Simulator.",
		"heroCtaTour": "[fr] See how it works",
		"heroProofLive": "[fr] Live + archive on your PC",
		"heroProofOverlays": "[fr] OBS-ready overlays",
		"heroProofJournal": "[fr] Session journal on disk",
		"heroProofWorker": "[fr] Local worker — no sign-in",
		"badgeLocalFirst": "[fr] Local-first",
		"badgeWindows": "[fr] Windows · NSIS installers",
		"badgeNoCloud": "[fr] No cloud account",
		"badgeStreamer": "[fr] Streamer-ready",
		"heroCtaDownload": "[fr] Download for Windows",
		"heroCtaDemo": "[fr] Try Demo installer",
		"heroCtaDemoSub": "[fr] Mock telemetry — no game",
		"playerGuide": "[fr] Player guide",
		"gettingStarted": "[fr] Getting started",
		"exploreFeatures": "[fr] Explore features ↓",
		"proprietaryFine": "[fr] Proprietary software · not open source",
		"statLive": "[fr] Live",
		"statArchive": "[fr] Archive",
		"statArchiveDetail": "[fr] Timeline, search, inspector, compare",
		"statJournal": "[fr] Session log",
		"statLiveDetailFrom": "[fr]  overlay panels from ",
		"statJournalDetailBefore": "[fr] On-disk ",
		"statJournalDetailAfter": "[fr]  files + line viewer",
		"statVault": "[fr] Vault",
		"statVaultDetail": "[fr] Export settings, data, logs",
		"codeExtensions": {
			"log": "[fr] .log",
			"logGz": "[fr] .log.gz"
		},
		"glossaryTermText": {
			"sse": "[fr] SSE",
			"mmf": "[fr] shared memory",
			"tauri": "[fr] Tauri",
			"nsis": "[fr] NSIS",
			"loopback": "[fr] localhost only"
		},
		"tabsAria": "[fr] Product sections",
		"tabs": {
			"features": "[fr] Features",
			"architecture": "[fr] Architecture",
			"data": "[fr] Data plane",
			"live": "[fr] Live & overlays",
			"desktop": "[fr] Desktop",
			"trust": "[fr] Trust & IT",
			"docs": "[fr] Guides & download"
		},
		"footerCopyright": "[fr] Copyright © Strixun. Overlane is proprietary software.",
		"footerGlossary": "[fr] Dotted glossary terms show a short explanation on hover or focus.",
		"mocks": {
			"tailFollow": "[fr] Tail follow",
			"logFiles": "[fr] Log files",
			"logHint": "[fr] Download file · sort · virtualized scroll in app",
			"recording": "[fr] Archive on",
			"ldpIngest": "[fr] Plugin ready",
			"archiveOn": "[fr] Archive on",
			"journalOn": "[fr] Journal on",
			"pluginReady": "[fr] Plugin ready",
			"workerReady": "[fr] Worker ready",
			"archiveTimeline": "[fr] Archive timeline · snapshots",
			"speed": "[fr] Speed",
			"fuel": "[fr] Fuel",
			"lanPort": "[fr] LAN · port 8080",
			"telemetryLive": "[fr] Game linked",
			"archiveRecording": "[fr] Archive on",
			"journalIdle": "[fr] Journal on",
			"liveDriving": "[fr] Live driving",
			"liveFromGame": "[fr] On job",
			"onJob": "[fr] On job",
			"gear": "[fr] Gear",
			"odometer": "[fr] Odometer",
			"wizardTitle": "[fr] Game setup",
			"wizardStepDetect": "[fr] Hook up game telemetry",
			"wizardStepPlugin": "[fr] Install your telemetry plugin",
			"wizardStepTest": "[fr] Verify connection",
			"wizardWaiting": "[fr] Waiting for telemetry",
			"serverRunning": "[fr] Worker ready",
			"gameLinked": "[fr] Game linked",
			"httpServer": "[fr] HTTP server",
			"bindAddress": "[fr] Bind address",
			"port": "[fr] Port",
			"overlayBaseUrl": "[fr] Overlay base URL",
			"gameLink": "[fr] Game link",
			"gameLinkStatusBeforePing": "[fr] ETS2 · SDK plugin active · last ping",
			"browserSources": "[fr] Browser sources",
			"kmBuffered": "[fr] 412 km buffered",
			"logFileCount": "[fr] 2 log files",
			"sampleLogFile": "[fr] overlane-2026-11-09.log",
			"presetCount": "[fr] 4 presets",
			"speedUnit": "[fr] km/h",
			"speedUnitLeadingSpace": "[fr]  km/h",
			"routeBadge": "[fr] Route",
			"onTime": "[fr] On time",
			"fuelPercent": "[fr] {pct}% fuel",
			"fuelLabel": "[fr] Fuel {pct}%",
			"gearLabel": "[fr] Gear {gear}",
			"archiveListCaption": "[fr] Selected row — inspector shows {route} for this snapshot."
		},
		"dataScale": {
			"title": "[fr] Scale and storage (honest)",
			"lead": "[fr] Recording is sparse by design — not every game tick becomes a row — but gzip SDK samples add up when you drive for months. Folding in Archive only collapses what you see in the timeline; it does not delete history on disk.",
			"ingestStrong": "[fr] Ingest sampling",
			"ingestBody": "[fr] default about one second between eligible rows, plus writes when speed or job context changes, on collisions, or at job boundaries.",
			"foldStrong": "[fr] Fold similar",
			"foldBody": "[fr] collapse adjacent snapshots in the same minute (or second/hour) when route, cargo, truck, trailer, speed, and on-job match; fines and deliveries always stay visible.",
			"sizeStrong": "[fr] Size ballpark",
			"sizeBody": "[fr] on the order of half a megabyte per thousand stored observations for list data; with full inspector samples, often a few kilobytes per row — expect single-digit to low tens of gigabytes for multi-million-mile careers unless you tune sampling.",
			"hotStrong": "[fr] Hot tier",
			"hotBody": "[fr] recent facts stay in SQLite; older observations can move to cold column files and a search index so the console stays responsive.",
			"quotaStrong": "[fr] No cloud quota",
			"quotaBody": "[fr] the app does not enforce a disk cap; use Settings maintenance, vault export, and mock purge when a folder grows past what your disk comfortably holds."
		},
		"catalog": {
			"archiveFoldSimilar": "[fr] Fold similar — collapse matching snapshots in a time window; fines and deliveries never fold",
			"ldpArchitectureLayer": "[fr] Hot ledger, cold column files, and search index on one machine — sparse ingest and rollup buckets keep dashboards fast as observation counts climb into the millions."
		},
		"homeScroll": {
			"anchorTour": "[fr] Product tour",
			"anchorOutcomes": "[fr] Outcomes",
			"anchorInstall": "[fr] Install",
			"anchorGuides": "[fr] Guides",
			"anchorsAria": "[fr] On this page",
			"outcomesTitle": "[fr] What you get on day one",
			"outcomesLead": "[fr] Four outcomes — live driving, memory, streaming, and setup — without hunting menus.",
			"installTitle": "[fr] Install options",
			"installLead": "[fr] Ship a production build or try mock telemetry before you link the game.",
			"powerUsersTitle": "[fr] IT & power users",
			"powerUsersSummary": "[fr] Architecture, local data plane, overlay policy, and trust boundaries for reviewers."
		},
		"homeOutcomes": {
			"liveArchiveTitle": "[fr] Live map & archive",
			"liveArchiveSummary": "[fr] Home card from real telemetry and a searchable timeline when recording is on.",
			"liveArchiveB0": "[fr] Speed, fuel, contract, and health strip while you drive.",
			"liveArchiveB1": "[fr] Search the timeline, fold similar rows, and open any snapshot in the inspector.",
			"overlaysTitle": "[fr] Overlays for streams",
			"overlaysSummary": "[fr] Canon preset URLs for OBS and browser sources — same metrics as the console.",
			"overlaysB0": "[fr] Velocity, controls, contract, and the rest of the catalog.",
			"overlaysB1": "[fr] Copy a URL once; point OBS at localhost.",
			"journalTitle": "[fr] Session journal",
			"journalSummary": "[fr] On-disk logs with tail-follow and download — app logging, not cloud notes.",
			"journalB0Before": "[fr] Browse ",
			"journalB0Between": "[fr]  and ",
			"journalB0After": "[fr]  with virtualized scroll in the app.",
			"journalB1": "[fr] Tail lines with follow mode during long hauls.",
			"workerTitle": "[fr] Install & local worker",
			"workerSummary": "[fr] Tauri shell, NSIS installers, and one telemetry worker on loopback by default.",
			"workerB0": "[fr] Production installer or Demo with mock telemetry — no game required.",
			"workerB1": "[fr] Bind address and port in Settings when you need LAN overlays."
		},
		"showcase": {
			"heading": "[fr] Three steps beside the game",
			"lead": "[fr] Live console, searchable archive, and stream overlays — pick a step below. Nothing auto-advances.",
			"galleryLabel": "[fr] Product tour",
			"note": "[fr] Illustrative samples — not a live session. Install Overlane for your own telemetry.",
			"carouselPrevAria": "[fr] Previous sample",
			"carouselNextAria": "[fr] Next sample",
			"carouselTablistAria": "[fr] Product samples",
			"slideHomeTitle": "[fr] Home · Live driving",
			"slideHomeBlurb": "[fr] Speed, fuel, gear, odometer, and active contract — the same card you get from real telemetry.",
			"slideArchiveTitle": "[fr] Archive timeline",
			"slideArchiveBlurb": "[fr] Virtualized snapshot rows on disk — search, fold similar, and inspect any moment without replaying the session.",
			"slideJournalBlurbBefore": "[fr] Browse ",
			"slideJournalBlurbBetween": "[fr]  / ",
			"slideJournalBlurbAfter": "[fr]  files, tail lines with follow mode, and download — app logging, not sticky notes.",
			"slideOverlaysTitle": "[fr] Overlays for OBS",
			"slideOverlaysBlurb": "[fr] Copy browser-source URLs for Velocity, Controls, Contract, and stream-ready layouts that match the live console.",
			"slideStreamTitle": "[fr] Stream overlays",
			"slideStreamBlurb": "[fr] Telemetry glass styling — speed focus, minimal, or route-first on one feed.",
			"slideSettingsTitle": "[fr] Settings · Connection",
			"slideSettingsBlurb": "[fr] Bind address, port, and overlay base URL on your machine.",
			"slideGameLinkTitle": "[fr] Game link wizard",
			"slideGameLinkBlurb": "[fr] Pick your sim folder and confirm the official telemetry plugin before you roll.",
			"pillarLive": "[fr] Live",
			"pillarData": "[fr] Data",
			"pillarFeatures": "[fr] Features",
			"pillarDesktop": "[fr] Desktop",
			"pillarSetup": "[fr] Setup"
		},
		"guidesPanel": {
			"onPageTitle": "[fr] On this page",
			"onPageLead": "[fr] Everything here is self-contained. Engineering source and internal docs are not published on GitHub.",
			"linkDownloads": "[fr] Windows installers",
			"linkGettingStarted": "[fr] Getting started",
			"linkPlayerGuide": "[fr] Player guide",
			"linkLicense": "[fr] Proprietary notice",
			"getOverlaneTitle": "[fr] Get Overlane"
		},
		"flowNodes": {
			"gamePlugin": "[fr] Game plugin",
			"sidecar": "[fr] Sidecar",
			"consoleOverlays": "[fr] Console / overlays",
			"obsBrowser": "[fr] OBS browser",
			"localService": "[fr] Telemetry worker",
			"console": "[fr] Console",
			"you": "[fr] You",
			"overlayPanels": "[fr] Overlay panels",
			"obsSlashBrowser": "[fr] OBS / browser",
			"ingest": "[fr] Ingest",
			"hotLedger": "[fr] Hot ledger",
			"coldFiles": "[fr] Cold files"
		},
		"panels": {
			"features": {
				"title": "[fr] Built for the long haul",
				"lead": "[fr] Overlane reads the game, serves a rich operator console, feeds your stream, and records every mile you opt into for dashboards and archive replay — all on your PC.",
				"calloutStrong": "[fr] Your data stays local.",
				"calloutRest": "[fr]  No cloud account is required.",
				"flowCaption": "[fr] Game → telemetry worker → you and your stream",
				"flowAria": "[fr] End-to-end product flow",
				"flowStreamLabel": "[fr] Stream path",
				"flowStreamRest": "[fr]  — same worker, different surface"
			},
			"architecture": {
				"title": "[fr] Composable local product",
				"lead": "[fr] UI, live feed, recording, and overlays share explicit boundaries so features evolve without a monolith.",
				"cladLead": "[fr] House structure follows",
				"cladTail": "[fr]  — small units wired through clear interfaces (ports/adapters, catalog-driven overlay policy).",
				"flowCaption": "[fr] Requests stay on loopback by default",
				"flowAria": "[fr] Architecture request flow",
				"flowOptionalRow": "[fr] Optional — LAN bind in Settings"
			},
			"data": {
				"title": "[fr] Local data plane",
				"lead": "[fr] Recent observations stay in a fast ledger; older facts move to compact column files; search has its own index — no hosted warehouse.",
				"calloutStrong": "[fr] Large archive design",
				"calloutRest": "[fr]  — hot/cold tiering on one machine.",
				"timelineStrong": "[fr] Archive timeline",
				"timelineBody": "[fr]  — snapshot folds and inspector for haul-level replay.",
				"analyticsStrong": "[fr] Analytics index",
				"analyticsBody": "[fr]  — backs Dashboard charts and delivery rollups when ingest is on.",
				"vaultStrong": "[fr] Vault export",
				"vaultBody": "[fr]  — settings, data paths, and logs for backup or support bundles.",
				"journalStrong": "[fr] Session log files",
				"journalBody": "[fr]  — plain logs on disk; not the same store as archive snapshots.",
				"flowCaption": "[fr] Write and read paths",
				"flowAria": "[fr] Data tiering"
			},
			"live": {
				"title": "[fr] Live telemetry and overlays",
				"leadBefore": "[fr] Overlay panels subscribe to",
				"leadAfter": "[fr]  from the same user-session telemetry worker that powers the console — MMF capture from the game, fan-out to browser sources.",
				"presetsStrong": "[fr] Preset panels",
				"presetsBody": "[fr]  — canon paths such as speed, fuel, contract; per-panel metric toggles and order.",
				"globalStrong": "[fr] Global overlay look",
				"globalBody": "[fr]  — glass, typography, and shared styling saved to config.",
				"composeStrong": "[fr] Compose layouts",
				"composeBodyBefore": "[fr]  — ",
				"composeBodyAfter": "[fr]  from the builder workspace.",
				"soloStrong": "[fr] Solo metrics",
				"soloBodyBefore": "[fr]  — ",
				"soloBodyAfter": "[fr]  for minimal stream layouts.",
				"announceStrong": "[fr] Announce",
				"announceBody": "[fr]  — job completion strip configurable from Settings and Overlays."
			},
			"desktop": {
				"title": "[fr] Windows desktop",
				"leadBefore": "",
				"leadBetween": "[fr]  bundles a per-user telemetry worker (not a Windows service), analytics library, and official telemetry DLL into ",
				"leadAfter": "[fr]  installers.",
				"colInstaller": "[fr] Installer",
				"colAudience": "[fr] Audience",
				"colBehaviour": "[fr] Behaviour",
				"rowProdName": "[fr] Overlane",
				"rowProdAudience": "[fr] Players & streamers",
				"rowProdBehaviour": "[fr] Live telemetry, console, overlays, archive, and journal — current-user NSIS install",
				"rowDemoName": "[fr] Overlane Demo",
				"rowDemoAudience": "[fr] Trials",
				"rowDemoBehaviour": "[fr] Mock telemetry + pre-seeded archive — explore console, overlays, and journal without the game",
				"installCalloutStrong": "[fr] User-session only.",
				"installCalloutBody": "[fr]  Neither production nor Demo registers a Windows service or SCM entry — the worker starts when you launch the desktop app and stops when you quit."
			},
			"trust": {
				"title": "[fr] Trust & privacy",
				"lead": "[fr] Single-user local product — your haul data is not a hosted multi-tenant service.",
				"calloutStrong": "[fr] Default bind:",
				"calloutBefore": " ",
				"calloutAfter": "[fr] . LAN exposure is opt-in in Settings.",
				"footer": "[fr] Proprietary software. Shipped installers include third-party components under their own licenses.",
				"noServiceNote": "[fr] No elevated admin install is required for normal use — telemetry stays in your Windows user session."
			}
		},
		"architectureLayers": {
			"desktopTitle": "[fr] Desktop shell",
			"desktopText": "[fr] Tauri window with custom titlebar, opens the console webview on localhost, starts and stops the telemetry worker with the app.",
			"serviceTitle": "[fr] Telemetry worker",
			"serviceText": "[fr] Go HTTP server in your user session: telemetry ingest, archive API, overlay routes, console bundles, and SSE live feed.",
			"consoleTitle": "[fr] Console UI",
			"consoleText": "[fr] CLAD-shaped React views with custom elements for heavy widgets; one operator surface for archive, journal, overlays.",
			"overlayTitle": "[fr] Overlay surfaces",
			"overlayTextBefore": "[fr] Separate browser URLs (",
			"overlayTextMid": "[fr] , ",
			"overlayTextAfter": "[fr] ) fed by the same live feed and saved visual config.",
			"ldpTitle": "[fr] Local data plane"
		},
		"featureAreas": {
			"homeTitle": "[fr] Home",
			"homeSummary": "[fr] Live driving card beside the game.",
			"homeB0": "[fr] Speed, fuel %, gear, odometer from the live telemetry snapshot",
			"homeB1": "[fr] Active route and cargo when a job is in progress",
			"homeB2": "[fr] Health strip and capture status at a glance",
			"dashboardTitle": "[fr] Dashboard",
			"dashboardSummary": "[fr] Rollups and charts over your archive — not the raw timeline.",
			"dashboardB0": "[fr] Editable tile layout with profiles you can save",
			"dashboardB1": "[fr] Time-series charts and exception lists from indexed analytics",
			"dashboardB2": "[fr] Jumps into Archive when a chart references a specific span",
			"archiveTitle": "[fr] Archive",
			"archiveSummary": "[fr] Searchable drive memory on disk.",
			"archiveB1": "[fr] Timeline with hierarchical folds and virtualized rows",
			"archiveB3": "[fr] Search tokens, range filters, and inspector detail",
			"archiveB4": "[fr] SDK payload view and neighbor diff for support/debug",
			"journalTitle": "[fr] Session log",
			"journalSummary": "[fr] Read Overlane log files — not an in-app notes pad.",
			"journalB0Before": "[fr] Lists plain ",
			"journalB0Between": "[fr]  and rotated ",
			"journalB0After": "[fr]  files on disk",
			"journalB1": "[fr] Virtualized log viewer with sort and tail-style follow",
			"journalB2": "[fr] Download a file; driving snapshots stay under Archive / Dashboard",
			"deliveriesTitle": "[fr] Deliveries",
			"deliveriesSummary": "[fr] Job history from telemetry-backed delivery records.",
			"deliveriesB0": "[fr] Sortable delivery log with job summary panels",
			"deliveriesB1": "[fr] Event groups and durations when analytics are available",
			"deliveriesB2": "[fr] Open detail without leaving the console",
			"overlaysTitle": "[fr] Overlays",
			"overlaysSummary": "[fr] OBS browser sources from the same telemetry worker as the console.",
			"overlaysB0": "[fr] Preset panels (Velocity, Controls, Contract, …) with live thumbnails",
			"overlaysB1": "[fr] Per-panel configure, metric order, and global overlay appearance",
			"overlaysB2Before": "[fr] Full-screen builder at ",
			"overlaysB2Mid": "[fr]  plus solo metric URLs at ",
			"settingsTitle": "[fr] Settings",
			"settingsSummary": "[fr] Connection, storage, announce, and maintenance.",
			"settingsB0": "[fr] Bind address, port, overlay base URL, units, and appearance",
			"settingsB1": "[fr] Game link wizard and official telemetry plugin install",
			"settingsB2": "[fr] Archive maintenance, vault export, speed alerts, dirty-save bar",
			"referenceTitle": "[fr] Reference",
			"referenceSummary": "[fr] SDK and capture glossary for operators.",
			"referenceB0": "[fr] Official SCS SDK channels vs Overlane wiring",
			"referenceB1": "[fr] MMF path, live-feed key, and capture status explainers"
		},
		"stickyBuyNow": "[fr] BUY NOW",
		"glossaryLabels": {
			"layman": "[fr] Layman:",
			"overlane": "[fr] Overlane:"
		},
		"glossary": {
			"arrowIpc": {
				"title": "[fr] Arrow IPC",
				"body": "[fr] Column-oriented tables streamed between processes in a compact binary format.",
				"layman": "[fr] A wide pipe that moves spreadsheet-style columns in bulk.",
				"ol": "[fr] Desktop archive uses this for large timeline windows."
			},
			"sse": {
				"title": "[fr] Server-Sent Events (SSE)",
				"body": "[fr] A one-way HTTP channel where the server pushes live updates to the browser.",
				"layman": "[fr] Overlay pages keep a light connection open for fresh numbers.",
				"ol": "[fr] Panel URLs subscribe for live speed, job, and compose widgets."
			},
			"mmf": {
				"title": "[fr] Memory-mapped file (MMF)",
				"body": "[fr] On Windows, shared RAM the game plugin and Overlane both map into.",
				"layman": "[fr] A shared clipboard both the game and Overlane read instantly.",
				"ol": "[fr] Official path uses Local\\OverlaneTelemetry via overlane-telemetry.dll."
			},
			"duckdb": {
				"title": "[fr] DuckDB",
				"body": "[fr] Embedded analytical SQL for local files without a separate database server.",
				"layman": "[fr] SQL analytics on your trip files on disk.",
				"ol": "[fr] Shipped in Windows installers for archive viewports and rollups."
			},
			"tantivy": {
				"title": "[fr] Tantivy",
				"body": "[fr] Full-text search engine for fast keyword queries over archive text.",
				"layman": "[fr] What makes search-as-you-type feel instant.",
				"ol": "[fr] Indexes journal and archive text on your machine."
			},
			"parquet": {
				"title": "[fr] Apache Parquet",
				"body": "[fr] Compressed columnar files suited to cold historical facts.",
				"layman": "[fr] Efficient packing for older trips on disk.",
				"ol": "[fr] Cold tier storage for archived observations."
			},
			"sqlite": {
				"title": "[fr] SQLite",
				"body": "[fr] Embedded SQL database used as the hot ledger for recent observations.",
				"layman": "[fr] Today's drive notes land here first.",
				"ol": "[fr] Live telemetry does not write here; ingest does when recording is on."
			},
			"wal": {
				"title": "[fr] SQLite WAL",
				"body": "[fr] Write-ahead logging for safer concurrent reads and writes.",
				"layman": "[fr] Browse the archive while new rows still land.",
				"ol": "[fr] Hot ledger mode for ingest overlap."
			},
			"zstd": {
				"title": "[fr] ZSTD",
				"body": "[fr] Modern compression for smaller cold files.",
				"layman": "[fr] Tighter packing so disks fill slower.",
				"ol": "[fr] Used when tiering observations to cold storage."
			},
			"fts": {
				"title": "[fr] Full-text search (FTS)",
				"body": "[fr] Inverted index for keyword search without scanning every row.",
				"layman": "[fr] The lookup table behind archive search.",
				"ol": "[fr] Works with filters like @cargo: in the console."
			},
			"clad": {
				"title": "[fr] CLAD",
				"body": "[fr] Composable Layered Agnostic Design — small units wired through explicit interfaces.",
				"layman": "[fr] Labeled blocks instead of one tangled script.",
				"ol": "[fr] How this marketing site and the product UI stay modular."
			},
			"nsis": {
				"title": "[fr] NSIS",
				"body": "[fr] Windows installer technology used for Overlane setup bundles.",
				"layman": "[fr] The familiar Next → Next installer wizard.",
				"ol": "[fr] Production and Demo are separate downloads."
			},
			"tauri": {
				"title": "[fr] Tauri",
				"body": "[fr] Native Windows shell hosting the web console and user-session telemetry worker lifecycle.",
				"layman": "[fr] The desktop app wrapper around the browser console.",
				"ol": "[fr] Boot splash, health-gated startup, bundled telemetry DLL — worker is not a Windows service."
			},
			"loopback": {
				"title": "[fr] Loopback bind",
				"body": "[fr] HTTP listens on localhost unless you opt into LAN exposure in Settings.",
				"layman": "[fr] Overlane talks on your PC by default—not the whole café Wi‑Fi.",
				"ol": "[fr] Default for console and overlay URLs."
			},
			"sidecar": {
				"title": "[fr] Telemetry worker",
				"body": "[fr] Companion Go process for API, live feed, ingest, and archive — runs in your user session, not as a Windows service.",
				"layman": "[fr] The engine running while the desktop window is open.",
				"ol": "[fr] Started by the desktop app at launch; exits when you quit Overlane."
			},
			"spa": {
				"title": "[fr] Single-page app (SPA)",
				"body": "[fr] Web UI that swaps views without full page reloads.",
				"layman": "[fr] One window; hop between Archive, Journal, Settings.",
				"ol": "[fr] The operator console experience."
			},
			"scsSdk": {
				"title": "[fr] SCS SDK",
				"body": "[fr] Official plugin SDK for ETS2 and ATS telemetry.",
				"layman": "[fr] The hook that reads what the truck is doing in-game.",
				"ol": "[fr] overlane-telemetry.dll targets this SDK."
			},
			"oltp": {
				"title": "[fr] OLTP",
				"body": "[fr] Many small, fast writes as you drive.",
				"layman": "[fr] Recording each moment as it happens.",
				"ol": "[fr] Hot ledger tuning for ingest."
			}
		}
	},
	"guides": {
		"gettingStarted": {
			"title": "[fr] Getting started",
			"lead": "[fr] Overlane runs on your PC. Nothing is uploaded off your machine by default.",
			"b0": "[fr] Get the latest production NSIS installer from https://short.army/overlane (hero Download button or sticky Buy now).",
			"b1": "[fr] Run the installer — per-user, not a Windows service — and start Overlane from the Start menu or tray.",
			"b2": "[fr] Follow the game-link wizard: pick your ETS2 or ATS folder and install the official telemetry plugin when prompted.",
			"b3": "[fr] Open Overlays and copy a panel URL into OBS or a browser beside the game.",
			"b4": "[fr] Optional: enable recording under Settings → Storage for archive timelines, dashboard rollups, and search."
		},
		"playerGuide": {
			"title": "[fr] Player guide",
			"lead0": "[fr] You need a supported telemetry plugin in the game’s plugins folder and the Overlane Windows app.",
			"b0": "[fr] Load a profile in the game — the console health strip shows when telemetry is live.",
			"b1": "[fr] Open Home for the Live driving card: speed, fuel, gear, odometer, and active route when you are on a job.",
			"b2": "[fr] Use Overlays to copy panel URLs into your streaming app.",
			"b3": "[fr] Tray menu: open the console or quit before running an installer upgrade.",
			"b4": "[fr] Overlane Demo ships mock telemetry and sample archive data — console, overlays, archive, and journal work with no game."
		},
		"license": {
			"title": "[fr] Proprietary notice",
			"p0": "[fr] Copyright © Strixun. All rights reserved.",
			"p1": "[fr] Overlane is proprietary software. This public site is marketing materials only — Windows installers ship through licensed purchase channels, not this repository.",
			"p2": "[fr] You may not copy, modify, or redistribute the software except as permitted by your license agreement or the terms on the release you downloaded.",
			"p3": "[fr] Shipped installers include third-party components under their own licenses."
		},
		"downloads": {
			"title": "[fr] Windows installers",
			"p0": "[fr] Windows builds ship as NSIS setup bundles from the purchase link below. Licensed artifacts also publish on the public GitHub release page when a build is promoted.",
			"p1": "[fr] Production Overlane connects to live ETS2/ATS telemetry. Overlane Demo uses a built-in mock feed and pre-seeded archive so you can tour every console surface without installing the game.",
			"p2": "[fr] Demo install targets the current user profile (for example under LocalAppData) and does not touch Windows services or the Service Control Manager.",
			"b0": "[fr] Overlane — live game link, archive, journal, overlays, and operator console.",
			"b1": "[fr] Overlane Demo — mock telemetry worker session for trials and stream layout testing.",
			"b2": "[fr] Quit Overlane from the tray before upgrading either installer."
		}
	}
} as Translation;

export default translation;
