import type { Translation } from '../i18n-types.js';

const translation = {
	"brand": {
		"name": "[ko] Overlane",
		"tagline": "[ko] Telemetry · overlays · archive observations"
	},
	"common": {
		"close": "[ko] Close",
		"loading": "[ko] Loading…",
		"save": "[ko] Save",
		"cancel": "[ko] Cancel",
		"overlaneJson": "[ko] overlane.json"
	},
	"nav": {
		"home": "[ko] Home",
		"overlays": "[ko] Overlays",
		"overlaysSub": "[ko] Panel URLs",
		"dashboard": "[ko] Dashboard",
		"dashboardSub": "[ko] Archive rollups",
		"archive": "[ko] Archive",
		"archiveSub": "[ko] Snapshots",
		"journal": "[ko] Session log",
		"journalSub": "[ko] Log files",
		"deliveries": "[ko] Delivery log",
		"deliveriesSub": "[ko] Completed jobs",
		"overlayBuilder": "[ko] Overlay builder",
		"overlayBuilderSub": "[ko] Compose layouts",
		"mockLab": "[ko] Mock lab",
		"mockLabSub": "[ko] Mock telemetry",
		"reference": "[ko] Reference",
		"referenceSub": "[ko] Icons & metrics",
		"settings": "[ko] Settings",
		"support": "[ko] Support",
		"supportSub": "[ko] Discord community",
		"toolsAria": "[ko] Reference, settings & support"
	},
	"views": {
		"home": "[ko] Home",
		"overlays": "[ko] Overlays",
		"dashboard": "[ko] Dashboard",
		"archive": "[ko] Archive",
		"journal": "[ko] Session log",
		"deliveries": "[ko] Delivery log",
		"settings": "[ko] Settings",
		"reference": "[ko] Reference"
	},
	"titlebar": {
		"brandAria": "[ko] Go to Home",
		"collapseNav": "[ko] Collapse navigation",
		"collapseNavSr": "[ko] Collapse navigation",
		"resizeNav": "[ko] Resize navigation",
		"minimize": "[ko] Minimize",
		"maximize": "[ko] Maximize",
		"restore": "[ko] Restore",
		"close": "[ko] Close"
	},
	"commandPalette": {
		"goToView": "[ko] Go to view",
		"referenceHint": "[ko] Icon & metric glossaries",
		"overlayBuilder": "[ko] Overlay builder",
		"overlayBuilderHint": "[ko] Compose layouts (/builder)",
		"vaultImportExport": "[ko] Import / export vault",
		"vaultHint": "[ko] Settings → Data",
		"searchMetrics": "[ko] Search metrics glossary",
		"searchMetricsHint": "[ko] Reference → metrics",
		"searchIcons": "[ko] Search icon glossary",
		"searchIconsHint": "[ko] Reference → icons"
	},
	"settings": {
		"sectionsAria": "[ko] Settings sections",
		"leadBeforeConfig": "[ko] Everything here is saved to your",
		"leadAfterConfig": "[ko] . App theme previews as you pick a preset — use",
		"leadAfterSaveTheme": "[ko] to keep it. Server, telemetry, folders, and collision tuning need a restart of Overlane (desktop app or sidecar).",
		"saveAppTheme": "[ko] Save app theme",
		"tabs": {
			"look": "[ko] Look",
			"language": "[ko] Language",
			"connection": "[ko] Connection",
			"storage": "[ko] Storage",
			"data": "[ko] Data",
			"careers": "[ko] Careers",
			"alerts": "[ko] Alerts & announce"
		},
		"languageHeading": "[ko] Language",
		"languageBody": "[ko] Choose the language for console labels, settings, and dialogs. Marketing pages use the same choice when opened in the app.",
		"languageLabel": "[ko] Display language",
		"languageAria": "[ko] Display language"
	},
	"help": {
		"title": "[ko] Console help",
		"commandPalette": "[ko] Ctrl+K — command palette (views, copy preset URLs).",
		"lookScale": "[ko] Settings → Look — window scale for the whole console (separate from overlay UI scale).",
		"archiveChips": "[ko] Archive chips — double-click to pin a search token.",
		"importPreview": "[ko] Import — pick a bundle to preview files before importing."
	},
	"careers": {
		"legend": "[ko] Driving career profiles",
		"hint": "[ko] Organize archive, dashboard, and future content under a named career tied to ETS2 or ATS. Portrait defaults to a generated avatar from your profile name — randomize or upload PNG/WebP/JPEG (max 512×512, 384 KiB).",
		"profileUpdated": "[ko] Profile updated.",
		"profileCreated": "[ko] Profile created.",
		"saveFailed": "[ko] Save failed."
	},
	"onboarding": {
		"steps": {
			"setup": "[ko] Game & plugin",
			"verify": "[ko] Verify",
			"done": "[ko] Ready"
		}
	},
	"marketing": {
		"heroEyebrow": "[ko] Overlane",
		"heroTitle": "[ko] Drive with a live map, a mile-by-mile archive, and stream overlays",
		"heroSubhead": "[ko] One Windows app for ETS2 and ATS — console beside the game, OBS browser sources, no cloud account.",
		"heroTaglineLead": "[ko] One local stack",
		"heroTaglineRest": "[ko]  on your PC: telemetry console, searchable drive archive, session journal, and",
		"heroTaglineEm": "[ko] OBS-ready",
		"heroTaglineEnd": "[ko]  overlay panels for Euro Truck Simulator 2 and American Truck Simulator.",
		"heroCtaTour": "[ko] See how it works",
		"heroProofLive": "[ko] Live + archive on your PC",
		"heroProofOverlays": "[ko] OBS-ready overlays",
		"heroProofJournal": "[ko] Session journal on disk",
		"heroProofWorker": "[ko] Local worker — no sign-in",
		"badgeLocalFirst": "[ko] Local-first",
		"badgeWindows": "[ko] Windows · NSIS installers",
		"badgeNoCloud": "[ko] No cloud account",
		"badgeStreamer": "[ko] Streamer-ready",
		"heroCtaDownload": "[ko] Download for Windows",
		"heroCtaDemo": "[ko] Try Demo installer",
		"heroCtaDemoSub": "[ko] Mock telemetry — no game",
		"playerGuide": "[ko] Player guide",
		"gettingStarted": "[ko] Getting started",
		"exploreFeatures": "[ko] Explore features ↓",
		"proprietaryFine": "[ko] Proprietary software · not open source",
		"statLive": "[ko] Live",
		"statArchive": "[ko] Archive",
		"statArchiveDetail": "[ko] Timeline, search, inspector, compare",
		"statJournal": "[ko] Session log",
		"statLiveDetailFrom": "[ko]  overlay panels from ",
		"statJournalDetailBefore": "[ko] On-disk ",
		"statJournalDetailAfter": "[ko]  files + line viewer",
		"statVault": "[ko] Vault",
		"statVaultDetail": "[ko] Export settings, data, logs",
		"codeExtensions": {
			"log": "[ko] .log",
			"logGz": "[ko] .log.gz"
		},
		"glossaryTermText": {
			"sse": "[ko] SSE",
			"mmf": "[ko] shared memory",
			"tauri": "[ko] Tauri",
			"nsis": "[ko] NSIS",
			"loopback": "[ko] localhost only"
		},
		"tabsAria": "[ko] Product sections",
		"tabs": {
			"features": "[ko] Features",
			"architecture": "[ko] Architecture",
			"data": "[ko] Data plane",
			"live": "[ko] Live & overlays",
			"desktop": "[ko] Desktop",
			"trust": "[ko] Trust & IT",
			"docs": "[ko] Guides & download"
		},
		"footerCopyright": "[ko] Copyright © Strixun. Overlane is proprietary software.",
		"footerGlossary": "[ko] Dotted glossary terms show a short explanation on hover or focus.",
		"mocks": {
			"tailFollow": "[ko] Tail follow",
			"logFiles": "[ko] Log files",
			"logHint": "[ko] Download file · sort · virtualized scroll in app",
			"recording": "[ko] Archive on",
			"ldpIngest": "[ko] Plugin ready",
			"archiveOn": "[ko] Archive on",
			"journalOn": "[ko] Journal on",
			"pluginReady": "[ko] Plugin ready",
			"workerReady": "[ko] Worker ready",
			"archiveTimeline": "[ko] Archive timeline · snapshots",
			"speed": "[ko] Speed",
			"fuel": "[ko] Fuel",
			"lanPort": "[ko] LAN · port 8080",
			"telemetryLive": "[ko] Game linked",
			"archiveRecording": "[ko] Archive on",
			"journalIdle": "[ko] Journal on",
			"liveDriving": "[ko] Live driving",
			"liveFromGame": "[ko] On job",
			"onJob": "[ko] On job",
			"gear": "[ko] Gear",
			"odometer": "[ko] Odometer",
			"wizardTitle": "[ko] Game setup",
			"wizardStepDetect": "[ko] Hook up game telemetry",
			"wizardStepPlugin": "[ko] Install your telemetry plugin",
			"wizardStepTest": "[ko] Verify connection",
			"wizardWaiting": "[ko] Waiting for telemetry",
			"serverRunning": "[ko] Worker ready",
			"gameLinked": "[ko] Game linked",
			"httpServer": "[ko] HTTP server",
			"bindAddress": "[ko] Bind address",
			"port": "[ko] Port",
			"overlayBaseUrl": "[ko] Overlay base URL",
			"gameLink": "[ko] Game link",
			"gameLinkStatusBeforePing": "[ko] ETS2 · SDK plugin active · last ping",
			"browserSources": "[ko] Browser sources",
			"kmBuffered": "[ko] 412 km buffered",
			"logFileCount": "[ko] 2 log files",
			"sampleLogFile": "[ko] overlane-2026-11-09.log",
			"presetCount": "[ko] 4 presets",
			"speedUnit": "[ko] km/h",
			"speedUnitLeadingSpace": "[ko]  km/h",
			"routeBadge": "[ko] Route",
			"onTime": "[ko] On time",
			"fuelPercent": "[ko] {pct}% fuel",
			"fuelLabel": "[ko] Fuel {pct}%",
			"gearLabel": "[ko] Gear {gear}",
			"archiveListCaption": "[ko] Selected row — inspector shows {route} for this snapshot."
		},
		"dataScale": {
			"title": "[ko] Scale and storage (honest)",
			"lead": "[ko] Recording is sparse by design — not every game tick becomes a row — but gzip SDK samples add up when you drive for months. Folding in Archive only collapses what you see in the timeline; it does not delete history on disk.",
			"ingestStrong": "[ko] Ingest sampling",
			"ingestBody": "[ko] default about one second between eligible rows, plus writes when speed or job context changes, on collisions, or at job boundaries.",
			"foldStrong": "[ko] Fold similar",
			"foldBody": "[ko] collapse adjacent snapshots in the same minute (or second/hour) when route, cargo, truck, trailer, speed, and on-job match; fines and deliveries always stay visible.",
			"sizeStrong": "[ko] Size ballpark",
			"sizeBody": "[ko] on the order of half a megabyte per thousand stored observations for list data; with full inspector samples, often a few kilobytes per row — expect single-digit to low tens of gigabytes for multi-million-mile careers unless you tune sampling.",
			"hotStrong": "[ko] Hot tier",
			"hotBody": "[ko] recent facts stay in SQLite; older observations can move to cold column files and a search index so the console stays responsive.",
			"quotaStrong": "[ko] No cloud quota",
			"quotaBody": "[ko] the app does not enforce a disk cap; use Settings maintenance, vault export, and mock purge when a folder grows past what your disk comfortably holds."
		},
		"catalog": {
			"archiveFoldSimilar": "[ko] Fold similar — collapse matching snapshots in a time window; fines and deliveries never fold",
			"ldpArchitectureLayer": "[ko] Hot ledger, cold column files, and search index on one machine — sparse ingest and rollup buckets keep dashboards fast as observation counts climb into the millions."
		},
		"homeScroll": {
			"anchorTour": "[ko] Product tour",
			"anchorOutcomes": "[ko] Outcomes",
			"anchorInstall": "[ko] Install",
			"anchorGuides": "[ko] Guides",
			"anchorsAria": "[ko] On this page",
			"outcomesTitle": "[ko] What you get on day one",
			"outcomesLead": "[ko] Four outcomes — live driving, memory, streaming, and setup — without hunting menus.",
			"installTitle": "[ko] Install options",
			"installLead": "[ko] Ship a production build or try mock telemetry before you link the game.",
			"powerUsersTitle": "[ko] IT & power users",
			"powerUsersSummary": "[ko] Architecture, local data plane, overlay policy, and trust boundaries for reviewers."
		},
		"homeOutcomes": {
			"liveArchiveTitle": "[ko] Live map & archive",
			"liveArchiveSummary": "[ko] Home card from real telemetry and a searchable timeline when recording is on.",
			"liveArchiveB0": "[ko] Speed, fuel, contract, and health strip while you drive.",
			"liveArchiveB1": "[ko] Search the timeline, fold similar rows, and open any snapshot in the inspector.",
			"overlaysTitle": "[ko] Overlays for streams",
			"overlaysSummary": "[ko] Canon preset URLs for OBS and browser sources — same metrics as the console.",
			"overlaysB0": "[ko] Velocity, controls, contract, and the rest of the catalog.",
			"overlaysB1": "[ko] Copy a URL once; point OBS at localhost.",
			"journalTitle": "[ko] Session journal",
			"journalSummary": "[ko] On-disk logs with tail-follow and download — app logging, not cloud notes.",
			"journalB0Before": "[ko] Browse ",
			"journalB0Between": "[ko]  and ",
			"journalB0After": "[ko]  with virtualized scroll in the app.",
			"journalB1": "[ko] Tail lines with follow mode during long hauls.",
			"workerTitle": "[ko] Install & local worker",
			"workerSummary": "[ko] Tauri shell, NSIS installers, and one telemetry worker on loopback by default.",
			"workerB0": "[ko] Production installer or Demo with mock telemetry — no game required.",
			"workerB1": "[ko] Bind address and port in Settings when you need LAN overlays."
		},
		"showcase": {
			"heading": "[ko] Three steps beside the game",
			"lead": "[ko] Live console, searchable archive, and stream overlays — pick a step below. Nothing auto-advances.",
			"galleryLabel": "[ko] Product tour",
			"note": "[ko] Illustrative samples — not a live session. Install Overlane for your own telemetry.",
			"carouselPrevAria": "[ko] Previous sample",
			"carouselNextAria": "[ko] Next sample",
			"carouselTablistAria": "[ko] Product samples",
			"slideHomeTitle": "[ko] Home · Live driving",
			"slideHomeBlurb": "[ko] Speed, fuel, gear, odometer, and active contract — the same card you get from real telemetry.",
			"slideArchiveTitle": "[ko] Archive timeline",
			"slideArchiveBlurb": "[ko] Virtualized snapshot rows on disk — search, fold similar, and inspect any moment without replaying the session.",
			"slideJournalBlurbBefore": "[ko] Browse ",
			"slideJournalBlurbBetween": "[ko]  / ",
			"slideJournalBlurbAfter": "[ko]  files, tail lines with follow mode, and download — app logging, not sticky notes.",
			"slideOverlaysTitle": "[ko] Overlays for OBS",
			"slideOverlaysBlurb": "[ko] Copy browser-source URLs for Velocity, Controls, Contract, and stream-ready layouts that match the live console.",
			"slideStreamTitle": "[ko] Stream overlays",
			"slideStreamBlurb": "[ko] Telemetry glass styling — speed focus, minimal, or route-first on one feed.",
			"slideSettingsTitle": "[ko] Settings · Connection",
			"slideSettingsBlurb": "[ko] Bind address, port, and overlay base URL on your machine.",
			"slideGameLinkTitle": "[ko] Game link wizard",
			"slideGameLinkBlurb": "[ko] Pick your sim folder and confirm the official telemetry plugin before you roll.",
			"pillarLive": "[ko] Live",
			"pillarData": "[ko] Data",
			"pillarFeatures": "[ko] Features",
			"pillarDesktop": "[ko] Desktop",
			"pillarSetup": "[ko] Setup"
		},
		"guidesPanel": {
			"onPageTitle": "[ko] On this page",
			"onPageLead": "[ko] Everything here is self-contained. Engineering source and internal docs are not published on GitHub.",
			"linkDownloads": "[ko] Windows installers",
			"linkGettingStarted": "[ko] Getting started",
			"linkPlayerGuide": "[ko] Player guide",
			"linkLicense": "[ko] Proprietary notice",
			"getOverlaneTitle": "[ko] Get Overlane"
		},
		"flowNodes": {
			"gamePlugin": "[ko] Game plugin",
			"sidecar": "[ko] Sidecar",
			"consoleOverlays": "[ko] Console / overlays",
			"obsBrowser": "[ko] OBS browser",
			"localService": "[ko] Telemetry worker",
			"console": "[ko] Console",
			"you": "[ko] You",
			"overlayPanels": "[ko] Overlay panels",
			"obsSlashBrowser": "[ko] OBS / browser",
			"ingest": "[ko] Ingest",
			"hotLedger": "[ko] Hot ledger",
			"coldFiles": "[ko] Cold files"
		},
		"panels": {
			"features": {
				"title": "[ko] Built for the long haul",
				"lead": "[ko] Overlane reads the game, serves a rich operator console, feeds your stream, and records every mile you opt into for dashboards and archive replay — all on your PC.",
				"calloutStrong": "[ko] Your data stays local.",
				"calloutRest": "[ko]  No cloud account is required.",
				"flowCaption": "[ko] Game → telemetry worker → you and your stream",
				"flowAria": "[ko] End-to-end product flow",
				"flowStreamLabel": "[ko] Stream path",
				"flowStreamRest": "[ko]  — same worker, different surface"
			},
			"architecture": {
				"title": "[ko] Composable local product",
				"lead": "[ko] UI, live feed, recording, and overlays share explicit boundaries so features evolve without a monolith.",
				"cladLead": "[ko] House structure follows",
				"cladTail": "[ko]  — small units wired through clear interfaces (ports/adapters, catalog-driven overlay policy).",
				"flowCaption": "[ko] Requests stay on loopback by default",
				"flowAria": "[ko] Architecture request flow",
				"flowOptionalRow": "[ko] Optional — LAN bind in Settings"
			},
			"data": {
				"title": "[ko] Local data plane",
				"lead": "[ko] Recent observations stay in a fast ledger; older facts move to compact column files; search has its own index — no hosted warehouse.",
				"calloutStrong": "[ko] Large archive design",
				"calloutRest": "[ko]  — hot/cold tiering on one machine.",
				"timelineStrong": "[ko] Archive timeline",
				"timelineBody": "[ko]  — snapshot folds and inspector for haul-level replay.",
				"analyticsStrong": "[ko] Analytics index",
				"analyticsBody": "[ko]  — backs Dashboard charts and delivery rollups when ingest is on.",
				"vaultStrong": "[ko] Vault export",
				"vaultBody": "[ko]  — settings, data paths, and logs for backup or support bundles.",
				"journalStrong": "[ko] Session log files",
				"journalBody": "[ko]  — plain logs on disk; not the same store as archive snapshots.",
				"flowCaption": "[ko] Write and read paths",
				"flowAria": "[ko] Data tiering"
			},
			"live": {
				"title": "[ko] Live telemetry and overlays",
				"leadBefore": "[ko] Overlay panels subscribe to",
				"leadAfter": "[ko]  from the same user-session telemetry worker that powers the console — MMF capture from the game, fan-out to browser sources.",
				"presetsStrong": "[ko] Preset panels",
				"presetsBody": "[ko]  — canon paths such as speed, fuel, contract; per-panel metric toggles and order.",
				"globalStrong": "[ko] Global overlay look",
				"globalBody": "[ko]  — glass, typography, and shared styling saved to config.",
				"composeStrong": "[ko] Compose layouts",
				"composeBodyBefore": "[ko]  — ",
				"composeBodyAfter": "[ko]  from the builder workspace.",
				"soloStrong": "[ko] Solo metrics",
				"soloBodyBefore": "[ko]  — ",
				"soloBodyAfter": "[ko]  for minimal stream layouts.",
				"announceStrong": "[ko] Announce",
				"announceBody": "[ko]  — job completion strip configurable from Settings and Overlays."
			},
			"desktop": {
				"title": "[ko] Windows desktop",
				"leadBefore": "",
				"leadBetween": "[ko]  bundles a per-user telemetry worker (not a Windows service), analytics library, and official telemetry DLL into ",
				"leadAfter": "[ko]  installers.",
				"colInstaller": "[ko] Installer",
				"colAudience": "[ko] Audience",
				"colBehaviour": "[ko] Behaviour",
				"rowProdName": "[ko] Overlane",
				"rowProdAudience": "[ko] Players & streamers",
				"rowProdBehaviour": "[ko] Live telemetry, console, overlays, archive, and journal — current-user NSIS install",
				"rowDemoName": "[ko] Overlane Demo",
				"rowDemoAudience": "[ko] Trials",
				"rowDemoBehaviour": "[ko] Mock telemetry + pre-seeded archive — explore console, overlays, and journal without the game",
				"installCalloutStrong": "[ko] User-session only.",
				"installCalloutBody": "[ko]  Neither production nor Demo registers a Windows service or SCM entry — the worker starts when you launch the desktop app and stops when you quit."
			},
			"trust": {
				"title": "[ko] Trust & privacy",
				"lead": "[ko] Single-user local product — your haul data is not a hosted multi-tenant service.",
				"calloutStrong": "[ko] Default bind:",
				"calloutBefore": " ",
				"calloutAfter": "[ko] . LAN exposure is opt-in in Settings.",
				"footer": "[ko] Proprietary software. Shipped installers include third-party components under their own licenses.",
				"noServiceNote": "[ko] No elevated admin install is required for normal use — telemetry stays in your Windows user session."
			}
		},
		"architectureLayers": {
			"desktopTitle": "[ko] Desktop shell",
			"desktopText": "[ko] Tauri window with custom titlebar, opens the console webview on localhost, starts and stops the telemetry worker with the app.",
			"serviceTitle": "[ko] Telemetry worker",
			"serviceText": "[ko] Go HTTP server in your user session: telemetry ingest, archive API, overlay routes, console bundles, and SSE live feed.",
			"consoleTitle": "[ko] Console UI",
			"consoleText": "[ko] CLAD-shaped React views with custom elements for heavy widgets; one operator surface for archive, journal, overlays.",
			"overlayTitle": "[ko] Overlay surfaces",
			"overlayTextBefore": "[ko] Separate browser URLs (",
			"overlayTextMid": "[ko] , ",
			"overlayTextAfter": "[ko] ) fed by the same live feed and saved visual config.",
			"ldpTitle": "[ko] Local data plane"
		},
		"featureAreas": {
			"homeTitle": "[ko] Home",
			"homeSummary": "[ko] Live driving card beside the game.",
			"homeB0": "[ko] Speed, fuel %, gear, odometer from the live telemetry snapshot",
			"homeB1": "[ko] Active route and cargo when a job is in progress",
			"homeB2": "[ko] Health strip and capture status at a glance",
			"dashboardTitle": "[ko] Dashboard",
			"dashboardSummary": "[ko] Rollups and charts over your archive — not the raw timeline.",
			"dashboardB0": "[ko] Editable tile layout with profiles you can save",
			"dashboardB1": "[ko] Time-series charts and exception lists from indexed analytics",
			"dashboardB2": "[ko] Jumps into Archive when a chart references a specific span",
			"archiveTitle": "[ko] Archive",
			"archiveSummary": "[ko] Searchable drive memory on disk.",
			"archiveB1": "[ko] Timeline with hierarchical folds and virtualized rows",
			"archiveB3": "[ko] Search tokens, range filters, and inspector detail",
			"archiveB4": "[ko] SDK payload view and neighbor diff for support/debug",
			"journalTitle": "[ko] Session log",
			"journalSummary": "[ko] Read Overlane log files — not an in-app notes pad.",
			"journalB0Before": "[ko] Lists plain ",
			"journalB0Between": "[ko]  and rotated ",
			"journalB0After": "[ko]  files on disk",
			"journalB1": "[ko] Virtualized log viewer with sort and tail-style follow",
			"journalB2": "[ko] Download a file; driving snapshots stay under Archive / Dashboard",
			"deliveriesTitle": "[ko] Deliveries",
			"deliveriesSummary": "[ko] Job history from telemetry-backed delivery records.",
			"deliveriesB0": "[ko] Sortable delivery log with job summary panels",
			"deliveriesB1": "[ko] Event groups and durations when analytics are available",
			"deliveriesB2": "[ko] Open detail without leaving the console",
			"overlaysTitle": "[ko] Overlays",
			"overlaysSummary": "[ko] OBS browser sources from the same telemetry worker as the console.",
			"overlaysB0": "[ko] Preset panels (Velocity, Controls, Contract, …) with live thumbnails",
			"overlaysB1": "[ko] Per-panel configure, metric order, and global overlay appearance",
			"overlaysB2Before": "[ko] Full-screen builder at ",
			"overlaysB2Mid": "[ko]  plus solo metric URLs at ",
			"settingsTitle": "[ko] Settings",
			"settingsSummary": "[ko] Connection, storage, announce, and maintenance.",
			"settingsB0": "[ko] Bind address, port, overlay base URL, units, and appearance",
			"settingsB1": "[ko] Game link wizard and official telemetry plugin install",
			"settingsB2": "[ko] Archive maintenance, vault export, speed alerts, dirty-save bar",
			"referenceTitle": "[ko] Reference",
			"referenceSummary": "[ko] SDK and capture glossary for operators.",
			"referenceB0": "[ko] Official SCS SDK channels vs Overlane wiring",
			"referenceB1": "[ko] MMF path, live-feed key, and capture status explainers"
		},
		"stickyBuyNow": "[ko] BUY NOW",
		"glossaryLabels": {
			"layman": "[ko] Layman:",
			"overlane": "[ko] Overlane:"
		},
		"glossary": {
			"arrowIpc": {
				"title": "[ko] Arrow IPC",
				"body": "[ko] Column-oriented tables streamed between processes in a compact binary format.",
				"layman": "[ko] A wide pipe that moves spreadsheet-style columns in bulk.",
				"ol": "[ko] Desktop archive uses this for large timeline windows."
			},
			"sse": {
				"title": "[ko] Server-Sent Events (SSE)",
				"body": "[ko] A one-way HTTP channel where the server pushes live updates to the browser.",
				"layman": "[ko] Overlay pages keep a light connection open for fresh numbers.",
				"ol": "[ko] Panel URLs subscribe for live speed, job, and compose widgets."
			},
			"mmf": {
				"title": "[ko] Memory-mapped file (MMF)",
				"body": "[ko] On Windows, shared RAM the game plugin and Overlane both map into.",
				"layman": "[ko] A shared clipboard both the game and Overlane read instantly.",
				"ol": "[ko] Official path uses Local\\OverlaneTelemetry via overlane-telemetry.dll."
			},
			"duckdb": {
				"title": "[ko] DuckDB",
				"body": "[ko] Embedded analytical SQL for local files without a separate database server.",
				"layman": "[ko] SQL analytics on your trip files on disk.",
				"ol": "[ko] Shipped in Windows installers for archive viewports and rollups."
			},
			"tantivy": {
				"title": "[ko] Tantivy",
				"body": "[ko] Full-text search engine for fast keyword queries over archive text.",
				"layman": "[ko] What makes search-as-you-type feel instant.",
				"ol": "[ko] Indexes journal and archive text on your machine."
			},
			"parquet": {
				"title": "[ko] Apache Parquet",
				"body": "[ko] Compressed columnar files suited to cold historical facts.",
				"layman": "[ko] Efficient packing for older trips on disk.",
				"ol": "[ko] Cold tier storage for archived observations."
			},
			"sqlite": {
				"title": "[ko] SQLite",
				"body": "[ko] Embedded SQL database used as the hot ledger for recent observations.",
				"layman": "[ko] Today's drive notes land here first.",
				"ol": "[ko] Live telemetry does not write here; ingest does when recording is on."
			},
			"wal": {
				"title": "[ko] SQLite WAL",
				"body": "[ko] Write-ahead logging for safer concurrent reads and writes.",
				"layman": "[ko] Browse the archive while new rows still land.",
				"ol": "[ko] Hot ledger mode for ingest overlap."
			},
			"zstd": {
				"title": "[ko] ZSTD",
				"body": "[ko] Modern compression for smaller cold files.",
				"layman": "[ko] Tighter packing so disks fill slower.",
				"ol": "[ko] Used when tiering observations to cold storage."
			},
			"fts": {
				"title": "[ko] Full-text search (FTS)",
				"body": "[ko] Inverted index for keyword search without scanning every row.",
				"layman": "[ko] The lookup table behind archive search.",
				"ol": "[ko] Works with filters like @cargo: in the console."
			},
			"clad": {
				"title": "[ko] CLAD",
				"body": "[ko] Composable Layered Agnostic Design — small units wired through explicit interfaces.",
				"layman": "[ko] Labeled blocks instead of one tangled script.",
				"ol": "[ko] How this marketing site and the product UI stay modular."
			},
			"nsis": {
				"title": "[ko] NSIS",
				"body": "[ko] Windows installer technology used for Overlane setup bundles.",
				"layman": "[ko] The familiar Next → Next installer wizard.",
				"ol": "[ko] Production and Demo are separate downloads."
			},
			"tauri": {
				"title": "[ko] Tauri",
				"body": "[ko] Native Windows shell hosting the web console and user-session telemetry worker lifecycle.",
				"layman": "[ko] The desktop app wrapper around the browser console.",
				"ol": "[ko] Boot splash, health-gated startup, bundled telemetry DLL — worker is not a Windows service."
			},
			"loopback": {
				"title": "[ko] Loopback bind",
				"body": "[ko] HTTP listens on localhost unless you opt into LAN exposure in Settings.",
				"layman": "[ko] Overlane talks on your PC by default—not the whole café Wi‑Fi.",
				"ol": "[ko] Default for console and overlay URLs."
			},
			"sidecar": {
				"title": "[ko] Telemetry worker",
				"body": "[ko] Companion Go process for API, live feed, ingest, and archive — runs in your user session, not as a Windows service.",
				"layman": "[ko] The engine running while the desktop window is open.",
				"ol": "[ko] Started by the desktop app at launch; exits when you quit Overlane."
			},
			"spa": {
				"title": "[ko] Single-page app (SPA)",
				"body": "[ko] Web UI that swaps views without full page reloads.",
				"layman": "[ko] One window; hop between Archive, Journal, Settings.",
				"ol": "[ko] The operator console experience."
			},
			"scsSdk": {
				"title": "[ko] SCS SDK",
				"body": "[ko] Official plugin SDK for ETS2 and ATS telemetry.",
				"layman": "[ko] The hook that reads what the truck is doing in-game.",
				"ol": "[ko] overlane-telemetry.dll targets this SDK."
			},
			"oltp": {
				"title": "[ko] OLTP",
				"body": "[ko] Many small, fast writes as you drive.",
				"layman": "[ko] Recording each moment as it happens.",
				"ol": "[ko] Hot ledger tuning for ingest."
			}
		}
	},
	"guides": {
		"gettingStarted": {
			"title": "[ko] Getting started",
			"lead": "[ko] Overlane runs on your PC. Nothing is uploaded off your machine by default.",
			"b0": "[ko] Get the latest production NSIS installer from https://short.army/overlane (hero Download button or sticky Buy now).",
			"b1": "[ko] Run the installer — per-user, not a Windows service — and start Overlane from the Start menu or tray.",
			"b2": "[ko] Follow the game-link wizard: pick your ETS2 or ATS folder and install the official telemetry plugin when prompted.",
			"b3": "[ko] Open Overlays and copy a panel URL into OBS or a browser beside the game.",
			"b4": "[ko] Optional: enable recording under Settings → Storage for archive timelines, dashboard rollups, and search."
		},
		"playerGuide": {
			"title": "[ko] Player guide",
			"lead0": "[ko] You need a supported telemetry plugin in the game’s plugins folder and the Overlane Windows app.",
			"b0": "[ko] Load a profile in the game — the console health strip shows when telemetry is live.",
			"b1": "[ko] Open Home for the Live driving card: speed, fuel, gear, odometer, and active route when you are on a job.",
			"b2": "[ko] Use Overlays to copy panel URLs into your streaming app.",
			"b3": "[ko] Tray menu: open the console or quit before running an installer upgrade.",
			"b4": "[ko] Overlane Demo ships mock telemetry and sample archive data — console, overlays, archive, and journal work with no game."
		},
		"license": {
			"title": "[ko] Proprietary notice",
			"p0": "[ko] Copyright © Strixun. All rights reserved.",
			"p1": "[ko] Overlane is proprietary software. This public site is marketing materials only — Windows installers ship through licensed purchase channels, not this repository.",
			"p2": "[ko] You may not copy, modify, or redistribute the software except as permitted by your license agreement or the terms on the release you downloaded.",
			"p3": "[ko] Shipped installers include third-party components under their own licenses."
		},
		"downloads": {
			"title": "[ko] Windows installers",
			"p0": "[ko] Windows builds ship as NSIS setup bundles from the purchase link below. Licensed artifacts also publish on the public GitHub release page when a build is promoted.",
			"p1": "[ko] Production Overlane connects to live ETS2/ATS telemetry. Overlane Demo uses a built-in mock feed and pre-seeded archive so you can tour every console surface without installing the game.",
			"p2": "[ko] Demo install targets the current user profile (for example under LocalAppData) and does not touch Windows services or the Service Control Manager.",
			"b0": "[ko] Overlane — live game link, archive, journal, overlays, and operator console.",
			"b1": "[ko] Overlane Demo — mock telemetry worker session for trials and stream layout testing.",
			"b2": "[ko] Quit Overlane from the tray before upgrading either installer."
		}
	}
} as Translation;

export default translation;
