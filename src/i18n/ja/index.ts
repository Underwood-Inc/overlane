import type { Translation } from '../i18n-types.js';

const translation = {
	"brand": {
		"name": "[ja] Overlane",
		"tagline": "[ja] Telemetry · overlays · archive observations"
	},
	"common": {
		"close": "[ja] Close",
		"loading": "[ja] Loading…",
		"save": "[ja] Save",
		"cancel": "[ja] Cancel",
		"overlaneJson": "[ja] overlane.json"
	},
	"nav": {
		"home": "[ja] Home",
		"overlays": "[ja] Overlays",
		"overlaysSub": "[ja] Panel URLs",
		"dashboard": "[ja] Dashboard",
		"dashboardSub": "[ja] Archive rollups",
		"archive": "[ja] Archive",
		"archiveSub": "[ja] Snapshots",
		"journal": "[ja] Session log",
		"journalSub": "[ja] Log files",
		"deliveries": "[ja] Delivery log",
		"deliveriesSub": "[ja] Completed jobs",
		"overlayBuilder": "[ja] Overlay builder",
		"overlayBuilderSub": "[ja] Compose layouts",
		"mockLab": "[ja] Mock lab",
		"mockLabSub": "[ja] Mock telemetry",
		"reference": "[ja] Reference",
		"referenceSub": "[ja] Icons & metrics",
		"settings": "[ja] Settings",
		"support": "[ja] Support",
		"supportSub": "[ja] Discord community",
		"toolsAria": "[ja] Reference, settings & support"
	},
	"views": {
		"home": "[ja] Home",
		"overlays": "[ja] Overlays",
		"dashboard": "[ja] Dashboard",
		"archive": "[ja] Archive",
		"journal": "[ja] Session log",
		"deliveries": "[ja] Delivery log",
		"settings": "[ja] Settings",
		"reference": "[ja] Reference"
	},
	"titlebar": {
		"brandAria": "[ja] Go to Home",
		"collapseNav": "[ja] Collapse navigation",
		"collapseNavSr": "[ja] Collapse navigation",
		"resizeNav": "[ja] Resize navigation",
		"minimize": "[ja] Minimize",
		"maximize": "[ja] Maximize",
		"restore": "[ja] Restore",
		"close": "[ja] Close"
	},
	"commandPalette": {
		"goToView": "[ja] Go to view",
		"referenceHint": "[ja] Icon & metric glossaries",
		"overlayBuilder": "[ja] Overlay builder",
		"overlayBuilderHint": "[ja] Compose layouts (/builder)",
		"vaultImportExport": "[ja] Import / export vault",
		"vaultHint": "[ja] Settings → Data",
		"searchMetrics": "[ja] Search metrics glossary",
		"searchMetricsHint": "[ja] Reference → metrics",
		"searchIcons": "[ja] Search icon glossary",
		"searchIconsHint": "[ja] Reference → icons"
	},
	"settings": {
		"sectionsAria": "[ja] Settings sections",
		"leadBeforeConfig": "[ja] Everything here is saved to your",
		"leadAfterConfig": "[ja] . App theme previews as you pick a preset — use",
		"leadAfterSaveTheme": "[ja] to keep it. Server, telemetry, folders, and collision tuning need a restart of Overlane (desktop app or sidecar).",
		"saveAppTheme": "[ja] Save app theme",
		"tabs": {
			"look": "[ja] Look",
			"language": "[ja] Language",
			"connection": "[ja] Connection",
			"storage": "[ja] Storage",
			"data": "[ja] Data",
			"careers": "[ja] Careers",
			"alerts": "[ja] Alerts & announce"
		},
		"languageHeading": "[ja] Language",
		"languageBody": "[ja] Choose the language for console labels, settings, and dialogs. Marketing pages use the same choice when opened in the app.",
		"languageLabel": "[ja] Display language",
		"languageAria": "[ja] Display language"
	},
	"help": {
		"title": "[ja] Console help",
		"commandPalette": "[ja] Ctrl+K — command palette (views, copy preset URLs).",
		"lookScale": "[ja] Settings → Look — window scale for the whole console (separate from overlay UI scale).",
		"archiveChips": "[ja] Archive chips — double-click to pin a search token.",
		"importPreview": "[ja] Import — pick a bundle to preview files before importing."
	},
	"careers": {
		"legend": "[ja] Driving career profiles",
		"hint": "[ja] Organize archive, dashboard, and future content under a named career tied to ETS2 or ATS. Portrait defaults to a generated avatar from your profile name — randomize or upload PNG/WebP/JPEG (max 512×512, 384 KiB).",
		"profileUpdated": "[ja] Profile updated.",
		"profileCreated": "[ja] Profile created.",
		"saveFailed": "[ja] Save failed."
	},
	"onboarding": {
		"steps": {
			"setup": "[ja] Game & plugin",
			"verify": "[ja] Verify",
			"done": "[ja] Ready"
		}
	},
	"marketing": {
		"heroEyebrow": "[ja] Overlane",
		"heroTitle": "[ja] Drive with a live map, a mile-by-mile archive, and stream overlays",
		"heroSubhead": "[ja] One Windows app for ETS2 and ATS — console beside the game, OBS browser sources, no cloud account.",
		"heroTaglineLead": "[ja] One local stack",
		"heroTaglineRest": "[ja]  on your PC: telemetry console, searchable drive archive, session journal, and",
		"heroTaglineEm": "[ja] OBS-ready",
		"heroTaglineEnd": "[ja]  overlay panels for Euro Truck Simulator 2 and American Truck Simulator.",
		"heroCtaTour": "[ja] See how it works",
		"heroProofLive": "[ja] Live + archive on your PC",
		"heroProofOverlays": "[ja] OBS-ready overlays",
		"heroProofJournal": "[ja] Session journal on disk",
		"heroProofWorker": "[ja] Local worker — no sign-in",
		"badgeLocalFirst": "[ja] Local-first",
		"badgeWindows": "[ja] Windows · NSIS installers",
		"badgeNoCloud": "[ja] No cloud account",
		"badgeStreamer": "[ja] Streamer-ready",
		"heroCtaDownload": "[ja] Download for Windows",
		"heroCtaDemo": "[ja] Try Demo installer",
		"heroCtaDemoSub": "[ja] Mock telemetry — no game",
		"playerGuide": "[ja] Player guide",
		"gettingStarted": "[ja] Getting started",
		"exploreFeatures": "[ja] Explore features ↓",
		"proprietaryFine": "[ja] Proprietary software · not open source",
		"statLive": "[ja] Live",
		"statArchive": "[ja] Archive",
		"statArchiveDetail": "[ja] Timeline, search, inspector, compare",
		"statJournal": "[ja] Session log",
		"statLiveDetailFrom": "[ja]  overlay panels from ",
		"statJournalDetailBefore": "[ja] On-disk ",
		"statJournalDetailAfter": "[ja]  files + line viewer",
		"statVault": "[ja] Vault",
		"statVaultDetail": "[ja] Export settings, data, logs",
		"codeExtensions": {
			"log": "[ja] .log",
			"logGz": "[ja] .log.gz"
		},
		"glossaryTermText": {
			"sse": "[ja] SSE",
			"mmf": "[ja] shared memory",
			"tauri": "[ja] Tauri",
			"nsis": "[ja] NSIS",
			"loopback": "[ja] localhost only"
		},
		"tabsAria": "[ja] Product sections",
		"tabs": {
			"features": "[ja] Features",
			"architecture": "[ja] Architecture",
			"data": "[ja] Data plane",
			"live": "[ja] Live & overlays",
			"desktop": "[ja] Desktop",
			"trust": "[ja] Trust & IT",
			"docs": "[ja] Guides & download"
		},
		"footerCopyright": "[ja] Copyright © Strixun. Overlane is proprietary software.",
		"footerGlossary": "[ja] Dotted glossary terms show a short explanation on hover or focus.",
		"mocks": {
			"tailFollow": "[ja] Tail follow",
			"logFiles": "[ja] Log files",
			"logHint": "[ja] Download file · sort · virtualized scroll in app",
			"recording": "[ja] Archive on",
			"ldpIngest": "[ja] Plugin ready",
			"archiveOn": "[ja] Archive on",
			"journalOn": "[ja] Journal on",
			"pluginReady": "[ja] Plugin ready",
			"workerReady": "[ja] Worker ready",
			"archiveTimeline": "[ja] Archive timeline · snapshots",
			"speed": "[ja] Speed",
			"fuel": "[ja] Fuel",
			"lanPort": "[ja] LAN · port 8080",
			"telemetryLive": "[ja] Game linked",
			"archiveRecording": "[ja] Archive on",
			"journalIdle": "[ja] Journal on",
			"liveDriving": "[ja] Live driving",
			"liveFromGame": "[ja] On job",
			"onJob": "[ja] On job",
			"gear": "[ja] Gear",
			"odometer": "[ja] Odometer",
			"wizardTitle": "[ja] Game setup",
			"wizardStepDetect": "[ja] Hook up game telemetry",
			"wizardStepPlugin": "[ja] Install your telemetry plugin",
			"wizardStepTest": "[ja] Verify connection",
			"wizardWaiting": "[ja] Waiting for telemetry",
			"serverRunning": "[ja] Worker ready",
			"gameLinked": "[ja] Game linked",
			"httpServer": "[ja] HTTP server",
			"bindAddress": "[ja] Bind address",
			"port": "[ja] Port",
			"overlayBaseUrl": "[ja] Overlay base URL",
			"gameLink": "[ja] Game link",
			"gameLinkStatusBeforePing": "[ja] ETS2 · SDK plugin active · last ping",
			"browserSources": "[ja] Browser sources",
			"kmBuffered": "[ja] 412 km buffered",
			"logFileCount": "[ja] 2 log files",
			"sampleLogFile": "[ja] overlane-2026-11-09.log",
			"presetCount": "[ja] 4 presets",
			"speedUnit": "[ja] km/h",
			"speedUnitLeadingSpace": "[ja]  km/h",
			"routeBadge": "[ja] Route",
			"onTime": "[ja] On time",
			"fuelPercent": "[ja] {pct}% fuel",
			"fuelLabel": "[ja] Fuel {pct}%",
			"gearLabel": "[ja] Gear {gear}",
			"archiveListCaption": "[ja] Selected row — inspector shows {route} for this snapshot."
		},
		"dataScale": {
			"title": "[ja] Scale and storage (honest)",
			"lead": "[ja] Recording is sparse by design — not every game tick becomes a row — but gzip SDK samples add up when you drive for months. Folding in Archive only collapses what you see in the timeline; it does not delete history on disk.",
			"ingestStrong": "[ja] Ingest sampling",
			"ingestBody": "[ja] default about one second between eligible rows, plus writes when speed or job context changes, on collisions, or at job boundaries.",
			"foldStrong": "[ja] Fold similar",
			"foldBody": "[ja] collapse adjacent snapshots in the same minute (or second/hour) when route, cargo, truck, trailer, speed, and on-job match; fines and deliveries always stay visible.",
			"sizeStrong": "[ja] Size ballpark",
			"sizeBody": "[ja] on the order of half a megabyte per thousand stored observations for list data; with full inspector samples, often a few kilobytes per row — expect single-digit to low tens of gigabytes for multi-million-mile careers unless you tune sampling.",
			"hotStrong": "[ja] Hot tier",
			"hotBody": "[ja] recent facts stay in SQLite; older observations can move to cold column files and a search index so the console stays responsive.",
			"quotaStrong": "[ja] No cloud quota",
			"quotaBody": "[ja] the app does not enforce a disk cap; use Settings maintenance, vault export, and mock purge when a folder grows past what your disk comfortably holds."
		},
		"catalog": {
			"archiveFoldSimilar": "[ja] Fold similar — collapse matching snapshots in a time window; fines and deliveries never fold",
			"ldpArchitectureLayer": "[ja] Hot ledger, cold column files, and search index on one machine — sparse ingest and rollup buckets keep dashboards fast as observation counts climb into the millions."
		},
		"homeScroll": {
			"anchorTour": "[ja] Product tour",
			"anchorOutcomes": "[ja] Outcomes",
			"anchorInstall": "[ja] Install",
			"anchorGuides": "[ja] Guides",
			"anchorsAria": "[ja] On this page",
			"outcomesTitle": "[ja] What you get on day one",
			"outcomesLead": "[ja] Four outcomes — live driving, memory, streaming, and setup — without hunting menus.",
			"installTitle": "[ja] Install options",
			"installLead": "[ja] Ship a production build or try mock telemetry before you link the game.",
			"powerUsersTitle": "[ja] IT & power users",
			"powerUsersSummary": "[ja] Architecture, local data plane, overlay policy, and trust boundaries for reviewers."
		},
		"homeOutcomes": {
			"liveArchiveTitle": "[ja] Live map & archive",
			"liveArchiveSummary": "[ja] Home card from real telemetry and a searchable timeline when recording is on.",
			"liveArchiveB0": "[ja] Speed, fuel, contract, and health strip while you drive.",
			"liveArchiveB1": "[ja] Search the timeline, fold similar rows, and open any snapshot in the inspector.",
			"overlaysTitle": "[ja] Overlays for streams",
			"overlaysSummary": "[ja] Canon preset URLs for OBS and browser sources — same metrics as the console.",
			"overlaysB0": "[ja] Velocity, controls, contract, and the rest of the catalog.",
			"overlaysB1": "[ja] Copy a URL once; point OBS at localhost.",
			"journalTitle": "[ja] Session journal",
			"journalSummary": "[ja] On-disk logs with tail-follow and download — app logging, not cloud notes.",
			"journalB0Before": "[ja] Browse ",
			"journalB0Between": "[ja]  and ",
			"journalB0After": "[ja]  with virtualized scroll in the app.",
			"journalB1": "[ja] Tail lines with follow mode during long hauls.",
			"workerTitle": "[ja] Install & local worker",
			"workerSummary": "[ja] Tauri shell, NSIS installers, and one telemetry worker on loopback by default.",
			"workerB0": "[ja] Production installer or Demo with mock telemetry — no game required.",
			"workerB1": "[ja] Bind address and port in Settings when you need LAN overlays."
		},
		"showcase": {
			"heading": "[ja] Three steps beside the game",
			"lead": "[ja] Live console, searchable archive, and stream overlays — pick a step below. Nothing auto-advances.",
			"galleryLabel": "[ja] Product tour",
			"note": "[ja] Illustrative samples — not a live session. Install Overlane for your own telemetry.",
			"carouselPrevAria": "[ja] Previous sample",
			"carouselNextAria": "[ja] Next sample",
			"carouselTablistAria": "[ja] Product samples",
			"slideHomeTitle": "[ja] Home · Live driving",
			"slideHomeBlurb": "[ja] Speed, fuel, gear, odometer, and active contract — the same card you get from real telemetry.",
			"slideArchiveTitle": "[ja] Archive timeline",
			"slideArchiveBlurb": "[ja] Virtualized snapshot rows on disk — search, fold similar, and inspect any moment without replaying the session.",
			"slideJournalBlurbBefore": "[ja] Browse ",
			"slideJournalBlurbBetween": "[ja]  / ",
			"slideJournalBlurbAfter": "[ja]  files, tail lines with follow mode, and download — app logging, not sticky notes.",
			"slideOverlaysTitle": "[ja] Overlays for OBS",
			"slideOverlaysBlurb": "[ja] Copy browser-source URLs for Velocity, Controls, Contract, and stream-ready layouts that match the live console.",
			"slideStreamTitle": "[ja] Stream overlays",
			"slideStreamBlurb": "[ja] Telemetry glass styling — speed focus, minimal, or route-first on one feed.",
			"slideSettingsTitle": "[ja] Settings · Connection",
			"slideSettingsBlurb": "[ja] Bind address, port, and overlay base URL on your machine.",
			"slideGameLinkTitle": "[ja] Game link wizard",
			"slideGameLinkBlurb": "[ja] Pick your sim folder and confirm the official telemetry plugin before you roll.",
			"pillarLive": "[ja] Live",
			"pillarData": "[ja] Data",
			"pillarFeatures": "[ja] Features",
			"pillarDesktop": "[ja] Desktop",
			"pillarSetup": "[ja] Setup"
		},
		"guidesPanel": {
			"onPageTitle": "[ja] On this page",
			"onPageLead": "[ja] Everything here is self-contained. Engineering source and internal docs are not published on GitHub.",
			"linkDownloads": "[ja] Windows installers",
			"linkGettingStarted": "[ja] Getting started",
			"linkPlayerGuide": "[ja] Player guide",
			"linkLicense": "[ja] Proprietary notice",
			"getOverlaneTitle": "[ja] Get Overlane"
		},
		"flowNodes": {
			"gamePlugin": "[ja] Game plugin",
			"sidecar": "[ja] Sidecar",
			"consoleOverlays": "[ja] Console / overlays",
			"obsBrowser": "[ja] OBS browser",
			"localService": "[ja] Telemetry worker",
			"console": "[ja] Console",
			"you": "[ja] You",
			"overlayPanels": "[ja] Overlay panels",
			"obsSlashBrowser": "[ja] OBS / browser",
			"ingest": "[ja] Ingest",
			"hotLedger": "[ja] Hot ledger",
			"coldFiles": "[ja] Cold files"
		},
		"panels": {
			"features": {
				"title": "[ja] Built for the long haul",
				"lead": "[ja] Overlane reads the game, serves a rich operator console, feeds your stream, and records every mile you opt into for dashboards and archive replay — all on your PC.",
				"calloutStrong": "[ja] Your data stays local.",
				"calloutRest": "[ja]  No cloud account is required.",
				"flowCaption": "[ja] Game → telemetry worker → you and your stream",
				"flowAria": "[ja] End-to-end product flow",
				"flowStreamLabel": "[ja] Stream path",
				"flowStreamRest": "[ja]  — same worker, different surface"
			},
			"architecture": {
				"title": "[ja] Composable local product",
				"lead": "[ja] UI, live feed, recording, and overlays share explicit boundaries so features evolve without a monolith.",
				"cladLead": "[ja] House structure follows",
				"cladTail": "[ja]  — small units wired through clear interfaces (ports/adapters, catalog-driven overlay policy).",
				"flowCaption": "[ja] Requests stay on loopback by default",
				"flowAria": "[ja] Architecture request flow",
				"flowOptionalRow": "[ja] Optional — LAN bind in Settings"
			},
			"data": {
				"title": "[ja] Local data plane",
				"lead": "[ja] Recent observations stay in a fast ledger; older facts move to compact column files; search has its own index — no hosted warehouse.",
				"calloutStrong": "[ja] Large archive design",
				"calloutRest": "[ja]  — hot/cold tiering on one machine.",
				"timelineStrong": "[ja] Archive timeline",
				"timelineBody": "[ja]  — snapshot folds and inspector for haul-level replay.",
				"analyticsStrong": "[ja] Analytics index",
				"analyticsBody": "[ja]  — backs Dashboard charts and delivery rollups when ingest is on.",
				"vaultStrong": "[ja] Vault export",
				"vaultBody": "[ja]  — settings, data paths, and logs for backup or support bundles.",
				"journalStrong": "[ja] Session log files",
				"journalBody": "[ja]  — plain logs on disk; not the same store as archive snapshots.",
				"flowCaption": "[ja] Write and read paths",
				"flowAria": "[ja] Data tiering"
			},
			"live": {
				"title": "[ja] Live telemetry and overlays",
				"leadBefore": "[ja] Overlay panels subscribe to",
				"leadAfter": "[ja]  from the same user-session telemetry worker that powers the console — MMF capture from the game, fan-out to browser sources.",
				"presetsStrong": "[ja] Preset panels",
				"presetsBody": "[ja]  — canon paths such as speed, fuel, contract; per-panel metric toggles and order.",
				"globalStrong": "[ja] Global overlay look",
				"globalBody": "[ja]  — glass, typography, and shared styling saved to config.",
				"composeStrong": "[ja] Compose layouts",
				"composeBodyBefore": "[ja]  — ",
				"composeBodyAfter": "[ja]  from the builder workspace.",
				"soloStrong": "[ja] Solo metrics",
				"soloBodyBefore": "[ja]  — ",
				"soloBodyAfter": "[ja]  for minimal stream layouts.",
				"announceStrong": "[ja] Announce",
				"announceBody": "[ja]  — job completion strip configurable from Settings and Overlays."
			},
			"desktop": {
				"title": "[ja] Windows desktop",
				"leadBefore": "",
				"leadBetween": "[ja]  bundles a per-user telemetry worker (not a Windows service), analytics library, and official telemetry DLL into ",
				"leadAfter": "[ja]  installers.",
				"colInstaller": "[ja] Installer",
				"colAudience": "[ja] Audience",
				"colBehaviour": "[ja] Behaviour",
				"rowProdName": "[ja] Overlane",
				"rowProdAudience": "[ja] Players & streamers",
				"rowProdBehaviour": "[ja] Live telemetry, console, overlays, archive, and journal — current-user NSIS install",
				"rowDemoName": "[ja] Overlane Demo",
				"rowDemoAudience": "[ja] Trials",
				"rowDemoBehaviour": "[ja] Mock telemetry + pre-seeded archive — explore console, overlays, and journal without the game",
				"installCalloutStrong": "[ja] User-session only.",
				"installCalloutBody": "[ja]  Neither production nor Demo registers a Windows service or SCM entry — the worker starts when you launch the desktop app and stops when you quit."
			},
			"trust": {
				"title": "[ja] Trust & privacy",
				"lead": "[ja] Single-user local product — your haul data is not a hosted multi-tenant service.",
				"calloutStrong": "[ja] Default bind:",
				"calloutBefore": " ",
				"calloutAfter": "[ja] . LAN exposure is opt-in in Settings.",
				"footer": "[ja] Proprietary software. Shipped installers include third-party components under their own licenses.",
				"noServiceNote": "[ja] No elevated admin install is required for normal use — telemetry stays in your Windows user session."
			}
		},
		"architectureLayers": {
			"desktopTitle": "[ja] Desktop shell",
			"desktopText": "[ja] Tauri window with custom titlebar, opens the console webview on localhost, starts and stops the telemetry worker with the app.",
			"serviceTitle": "[ja] Telemetry worker",
			"serviceText": "[ja] Go HTTP server in your user session: telemetry ingest, archive API, overlay routes, console bundles, and SSE live feed.",
			"consoleTitle": "[ja] Console UI",
			"consoleText": "[ja] CLAD-shaped React views with custom elements for heavy widgets; one operator surface for archive, journal, overlays.",
			"overlayTitle": "[ja] Overlay surfaces",
			"overlayTextBefore": "[ja] Separate browser URLs (",
			"overlayTextMid": "[ja] , ",
			"overlayTextAfter": "[ja] ) fed by the same live feed and saved visual config.",
			"ldpTitle": "[ja] Local data plane"
		},
		"featureAreas": {
			"homeTitle": "[ja] Home",
			"homeSummary": "[ja] Live driving card beside the game.",
			"homeB0": "[ja] Speed, fuel %, gear, odometer from the live telemetry snapshot",
			"homeB1": "[ja] Active route and cargo when a job is in progress",
			"homeB2": "[ja] Health strip and capture status at a glance",
			"dashboardTitle": "[ja] Dashboard",
			"dashboardSummary": "[ja] Rollups and charts over your archive — not the raw timeline.",
			"dashboardB0": "[ja] Editable tile layout with profiles you can save",
			"dashboardB1": "[ja] Time-series charts and exception lists from indexed analytics",
			"dashboardB2": "[ja] Jumps into Archive when a chart references a specific span",
			"archiveTitle": "[ja] Archive",
			"archiveSummary": "[ja] Searchable drive memory on disk.",
			"archiveB1": "[ja] Timeline with hierarchical folds and virtualized rows",
			"archiveB3": "[ja] Search tokens, range filters, and inspector detail",
			"archiveB4": "[ja] SDK payload view and neighbor diff for support/debug",
			"journalTitle": "[ja] Session log",
			"journalSummary": "[ja] Read Overlane log files — not an in-app notes pad.",
			"journalB0Before": "[ja] Lists plain ",
			"journalB0Between": "[ja]  and rotated ",
			"journalB0After": "[ja]  files on disk",
			"journalB1": "[ja] Virtualized log viewer with sort and tail-style follow",
			"journalB2": "[ja] Download a file; driving snapshots stay under Archive / Dashboard",
			"deliveriesTitle": "[ja] Deliveries",
			"deliveriesSummary": "[ja] Job history from telemetry-backed delivery records.",
			"deliveriesB0": "[ja] Sortable delivery log with job summary panels",
			"deliveriesB1": "[ja] Event groups and durations when analytics are available",
			"deliveriesB2": "[ja] Open detail without leaving the console",
			"overlaysTitle": "[ja] Overlays",
			"overlaysSummary": "[ja] OBS browser sources from the same telemetry worker as the console.",
			"overlaysB0": "[ja] Preset panels (Velocity, Controls, Contract, …) with live thumbnails",
			"overlaysB1": "[ja] Per-panel configure, metric order, and global overlay appearance",
			"overlaysB2Before": "[ja] Full-screen builder at ",
			"overlaysB2Mid": "[ja]  plus solo metric URLs at ",
			"settingsTitle": "[ja] Settings",
			"settingsSummary": "[ja] Connection, storage, announce, and maintenance.",
			"settingsB0": "[ja] Bind address, port, overlay base URL, units, and appearance",
			"settingsB1": "[ja] Game link wizard and official telemetry plugin install",
			"settingsB2": "[ja] Archive maintenance, vault export, speed alerts, dirty-save bar",
			"referenceTitle": "[ja] Reference",
			"referenceSummary": "[ja] SDK and capture glossary for operators.",
			"referenceB0": "[ja] Official SCS SDK channels vs Overlane wiring",
			"referenceB1": "[ja] MMF path, live-feed key, and capture status explainers"
		},
		"stickyBuyNow": "[ja] BUY NOW",
		"glossaryLabels": {
			"layman": "[ja] Layman:",
			"overlane": "[ja] Overlane:"
		},
		"glossary": {
			"arrowIpc": {
				"title": "[ja] Arrow IPC",
				"body": "[ja] Column-oriented tables streamed between processes in a compact binary format.",
				"layman": "[ja] A wide pipe that moves spreadsheet-style columns in bulk.",
				"ol": "[ja] Desktop archive uses this for large timeline windows."
			},
			"sse": {
				"title": "[ja] Server-Sent Events (SSE)",
				"body": "[ja] A one-way HTTP channel where the server pushes live updates to the browser.",
				"layman": "[ja] Overlay pages keep a light connection open for fresh numbers.",
				"ol": "[ja] Panel URLs subscribe for live speed, job, and compose widgets."
			},
			"mmf": {
				"title": "[ja] Memory-mapped file (MMF)",
				"body": "[ja] On Windows, shared RAM the game plugin and Overlane both map into.",
				"layman": "[ja] A shared clipboard both the game and Overlane read instantly.",
				"ol": "[ja] Official path uses Local\\OverlaneTelemetry via overlane-telemetry.dll."
			},
			"duckdb": {
				"title": "[ja] DuckDB",
				"body": "[ja] Embedded analytical SQL for local files without a separate database server.",
				"layman": "[ja] SQL analytics on your trip files on disk.",
				"ol": "[ja] Shipped in Windows installers for archive viewports and rollups."
			},
			"tantivy": {
				"title": "[ja] Tantivy",
				"body": "[ja] Full-text search engine for fast keyword queries over archive text.",
				"layman": "[ja] What makes search-as-you-type feel instant.",
				"ol": "[ja] Indexes journal and archive text on your machine."
			},
			"parquet": {
				"title": "[ja] Apache Parquet",
				"body": "[ja] Compressed columnar files suited to cold historical facts.",
				"layman": "[ja] Efficient packing for older trips on disk.",
				"ol": "[ja] Cold tier storage for archived observations."
			},
			"sqlite": {
				"title": "[ja] SQLite",
				"body": "[ja] Embedded SQL database used as the hot ledger for recent observations.",
				"layman": "[ja] Today's drive notes land here first.",
				"ol": "[ja] Live telemetry does not write here; ingest does when recording is on."
			},
			"wal": {
				"title": "[ja] SQLite WAL",
				"body": "[ja] Write-ahead logging for safer concurrent reads and writes.",
				"layman": "[ja] Browse the archive while new rows still land.",
				"ol": "[ja] Hot ledger mode for ingest overlap."
			},
			"zstd": {
				"title": "[ja] ZSTD",
				"body": "[ja] Modern compression for smaller cold files.",
				"layman": "[ja] Tighter packing so disks fill slower.",
				"ol": "[ja] Used when tiering observations to cold storage."
			},
			"fts": {
				"title": "[ja] Full-text search (FTS)",
				"body": "[ja] Inverted index for keyword search without scanning every row.",
				"layman": "[ja] The lookup table behind archive search.",
				"ol": "[ja] Works with filters like @cargo: in the console."
			},
			"clad": {
				"title": "[ja] CLAD",
				"body": "[ja] Composable Layered Agnostic Design — small units wired through explicit interfaces.",
				"layman": "[ja] Labeled blocks instead of one tangled script.",
				"ol": "[ja] How this marketing site and the product UI stay modular."
			},
			"nsis": {
				"title": "[ja] NSIS",
				"body": "[ja] Windows installer technology used for Overlane setup bundles.",
				"layman": "[ja] The familiar Next → Next installer wizard.",
				"ol": "[ja] Production and Demo are separate downloads."
			},
			"tauri": {
				"title": "[ja] Tauri",
				"body": "[ja] Native Windows shell hosting the web console and user-session telemetry worker lifecycle.",
				"layman": "[ja] The desktop app wrapper around the browser console.",
				"ol": "[ja] Boot splash, health-gated startup, bundled telemetry DLL — worker is not a Windows service."
			},
			"loopback": {
				"title": "[ja] Loopback bind",
				"body": "[ja] HTTP listens on localhost unless you opt into LAN exposure in Settings.",
				"layman": "[ja] Overlane talks on your PC by default—not the whole café Wi‑Fi.",
				"ol": "[ja] Default for console and overlay URLs."
			},
			"sidecar": {
				"title": "[ja] Telemetry worker",
				"body": "[ja] Companion Go process for API, live feed, ingest, and archive — runs in your user session, not as a Windows service.",
				"layman": "[ja] The engine running while the desktop window is open.",
				"ol": "[ja] Started by the desktop app at launch; exits when you quit Overlane."
			},
			"spa": {
				"title": "[ja] Single-page app (SPA)",
				"body": "[ja] Web UI that swaps views without full page reloads.",
				"layman": "[ja] One window; hop between Archive, Journal, Settings.",
				"ol": "[ja] The operator console experience."
			},
			"scsSdk": {
				"title": "[ja] SCS SDK",
				"body": "[ja] Official plugin SDK for ETS2 and ATS telemetry.",
				"layman": "[ja] The hook that reads what the truck is doing in-game.",
				"ol": "[ja] overlane-telemetry.dll targets this SDK."
			},
			"oltp": {
				"title": "[ja] OLTP",
				"body": "[ja] Many small, fast writes as you drive.",
				"layman": "[ja] Recording each moment as it happens.",
				"ol": "[ja] Hot ledger tuning for ingest."
			}
		}
	},
	"guides": {
		"gettingStarted": {
			"title": "[ja] Getting started",
			"lead": "[ja] Overlane runs on your PC. Nothing is uploaded off your machine by default.",
			"b0": "[ja] Get the latest production NSIS installer from https://short.army/overlane (hero Download button or sticky Buy now).",
			"b1": "[ja] Run the installer — per-user, not a Windows service — and start Overlane from the Start menu or tray.",
			"b2": "[ja] Follow the game-link wizard: pick your ETS2 or ATS folder and install the official telemetry plugin when prompted.",
			"b3": "[ja] Open Overlays and copy a panel URL into OBS or a browser beside the game.",
			"b4": "[ja] Optional: enable recording under Settings → Storage for archive timelines, dashboard rollups, and search."
		},
		"playerGuide": {
			"title": "[ja] Player guide",
			"lead0": "[ja] You need a supported telemetry plugin in the game’s plugins folder and the Overlane Windows app.",
			"b0": "[ja] Load a profile in the game — the console health strip shows when telemetry is live.",
			"b1": "[ja] Open Home for the Live driving card: speed, fuel, gear, odometer, and active route when you are on a job.",
			"b2": "[ja] Use Overlays to copy panel URLs into your streaming app.",
			"b3": "[ja] Tray menu: open the console or quit before running an installer upgrade.",
			"b4": "[ja] Overlane Demo ships mock telemetry and sample archive data — console, overlays, archive, and journal work with no game."
		},
		"license": {
			"title": "[ja] Proprietary notice",
			"p0": "[ja] Copyright © Strixun. All rights reserved.",
			"p1": "[ja] Overlane is proprietary software. This public site is marketing materials only — Windows installers ship through licensed purchase channels, not this repository.",
			"p2": "[ja] You may not copy, modify, or redistribute the software except as permitted by your license agreement or the terms on the release you downloaded.",
			"p3": "[ja] Shipped installers include third-party components under their own licenses."
		},
		"downloads": {
			"title": "[ja] Windows installers",
			"p0": "[ja] Windows builds ship as NSIS setup bundles from the purchase link below. Licensed artifacts also publish on the public GitHub release page when a build is promoted.",
			"p1": "[ja] Production Overlane connects to live ETS2/ATS telemetry. Overlane Demo uses a built-in mock feed and pre-seeded archive so you can tour every console surface without installing the game.",
			"p2": "[ja] Demo install targets the current user profile (for example under LocalAppData) and does not touch Windows services or the Service Control Manager.",
			"b0": "[ja] Overlane — live game link, archive, journal, overlays, and operator console.",
			"b1": "[ja] Overlane Demo — mock telemetry worker session for trials and stream layout testing.",
			"b2": "[ja] Quit Overlane from the tray before upgrading either installer."
		}
	}
} as Translation;

export default translation;
