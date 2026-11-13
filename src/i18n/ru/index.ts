import type { Translation } from '../i18n-types.js';

const translation = {
	"brand": {
		"name": "[ru] Overlane",
		"tagline": "[ru] Telemetry · overlays · archive observations"
	},
	"common": {
		"close": "[ru] Close",
		"loading": "[ru] Loading…",
		"save": "[ru] Save",
		"cancel": "[ru] Cancel",
		"overlaneJson": "[ru] overlane.json"
	},
	"nav": {
		"home": "[ru] Home",
		"overlays": "[ru] Overlays",
		"overlaysSub": "[ru] Panel URLs",
		"dashboard": "[ru] Dashboard",
		"dashboardSub": "[ru] Archive rollups",
		"archive": "[ru] Archive",
		"archiveSub": "[ru] Snapshots",
		"journal": "[ru] Session log",
		"journalSub": "[ru] Log files",
		"deliveries": "[ru] Delivery log",
		"deliveriesSub": "[ru] Completed jobs",
		"overlayBuilder": "[ru] Overlay builder",
		"overlayBuilderSub": "[ru] Compose layouts",
		"mockLab": "[ru] Mock lab",
		"mockLabSub": "[ru] Mock telemetry",
		"reference": "[ru] Reference",
		"referenceSub": "[ru] Icons & metrics",
		"settings": "[ru] Settings",
		"support": "[ru] Support",
		"supportSub": "[ru] Discord community",
		"toolsAria": "[ru] Reference, settings & support"
	},
	"views": {
		"home": "[ru] Home",
		"overlays": "[ru] Overlays",
		"dashboard": "[ru] Dashboard",
		"archive": "[ru] Archive",
		"journal": "[ru] Session log",
		"deliveries": "[ru] Delivery log",
		"settings": "[ru] Settings",
		"reference": "[ru] Reference"
	},
	"titlebar": {
		"brandAria": "[ru] Go to Home",
		"collapseNav": "[ru] Collapse navigation",
		"collapseNavSr": "[ru] Collapse navigation",
		"resizeNav": "[ru] Resize navigation",
		"minimize": "[ru] Minimize",
		"maximize": "[ru] Maximize",
		"restore": "[ru] Restore",
		"close": "[ru] Close"
	},
	"commandPalette": {
		"goToView": "[ru] Go to view",
		"referenceHint": "[ru] Icon & metric glossaries",
		"overlayBuilder": "[ru] Overlay builder",
		"overlayBuilderHint": "[ru] Compose layouts (/builder)",
		"vaultImportExport": "[ru] Import / export vault",
		"vaultHint": "[ru] Settings → Data",
		"searchMetrics": "[ru] Search metrics glossary",
		"searchMetricsHint": "[ru] Reference → metrics",
		"searchIcons": "[ru] Search icon glossary",
		"searchIconsHint": "[ru] Reference → icons"
	},
	"settings": {
		"sectionsAria": "[ru] Settings sections",
		"leadBeforeConfig": "[ru] Everything here is saved to your",
		"leadAfterConfig": "[ru] . App theme previews as you pick a preset — use",
		"leadAfterSaveTheme": "[ru] to keep it. Server, telemetry, folders, and collision tuning need a restart of Overlane (desktop app or sidecar).",
		"saveAppTheme": "[ru] Save app theme",
		"tabs": {
			"look": "[ru] Look",
			"language": "[ru] Language",
			"connection": "[ru] Connection",
			"storage": "[ru] Storage",
			"data": "[ru] Data",
			"careers": "[ru] Careers",
			"alerts": "[ru] Alerts & announce"
		},
		"languageHeading": "[ru] Language",
		"languageBody": "[ru] Choose the language for console labels, settings, and dialogs. Marketing pages use the same choice when opened in the app.",
		"languageLabel": "[ru] Display language",
		"languageAria": "[ru] Display language"
	},
	"help": {
		"title": "[ru] Console help",
		"commandPalette": "[ru] Ctrl+K — command palette (views, copy preset URLs).",
		"lookScale": "[ru] Settings → Look — window scale for the whole console (separate from overlay UI scale).",
		"archiveChips": "[ru] Archive chips — double-click to pin a search token.",
		"importPreview": "[ru] Import — pick a bundle to preview files before importing."
	},
	"careers": {
		"legend": "[ru] Driving career profiles",
		"hint": "[ru] Organize archive, dashboard, and future content under a named career tied to ETS2 or ATS. Portrait defaults to a generated avatar from your profile name — randomize or upload PNG/WebP/JPEG (max 512×512, 384 KiB).",
		"profileUpdated": "[ru] Profile updated.",
		"profileCreated": "[ru] Profile created.",
		"saveFailed": "[ru] Save failed."
	},
	"onboarding": {
		"steps": {
			"setup": "[ru] Game & plugin",
			"verify": "[ru] Verify",
			"done": "[ru] Ready"
		}
	},
	"marketing": {
		"heroEyebrow": "[ru] Overlane",
		"heroTitle": "[ru] Drive with a live map, a mile-by-mile archive, and stream overlays",
		"heroSubhead": "[ru] One Windows app for ETS2 and ATS — console beside the game, OBS browser sources, no cloud account.",
		"heroTaglineLead": "[ru] One local stack",
		"heroTaglineRest": "[ru]  on your PC: telemetry console, searchable drive archive, session journal, and",
		"heroTaglineEm": "[ru] OBS-ready",
		"heroTaglineEnd": "[ru]  overlay panels for Euro Truck Simulator 2 and American Truck Simulator.",
		"heroCtaTour": "[ru] See how it works",
		"heroProofLive": "[ru] Live + archive on your PC",
		"heroProofOverlays": "[ru] OBS-ready overlays",
		"heroProofJournal": "[ru] Session journal on disk",
		"heroProofWorker": "[ru] Local worker — no sign-in",
		"badgeLocalFirst": "[ru] Local-first",
		"badgeWindows": "[ru] Windows · NSIS installers",
		"badgeNoCloud": "[ru] No cloud account",
		"badgeStreamer": "[ru] Streamer-ready",
		"heroCtaDownload": "[ru] Download for Windows",
		"heroCtaDemo": "[ru] Try Demo installer",
		"heroCtaDemoSub": "[ru] Mock telemetry — no game",
		"playerGuide": "[ru] Player guide",
		"gettingStarted": "[ru] Getting started",
		"exploreFeatures": "[ru] Explore features ↓",
		"proprietaryFine": "[ru] Proprietary software · not open source",
		"statLive": "[ru] Live",
		"statArchive": "[ru] Archive",
		"statArchiveDetail": "[ru] Timeline, search, inspector, compare",
		"statJournal": "[ru] Session log",
		"statLiveDetailFrom": "[ru]  overlay panels from ",
		"statJournalDetailBefore": "[ru] On-disk ",
		"statJournalDetailAfter": "[ru]  files + line viewer",
		"statVault": "[ru] Vault",
		"statVaultDetail": "[ru] Export settings, data, logs",
		"codeExtensions": {
			"log": "[ru] .log",
			"logGz": "[ru] .log.gz"
		},
		"glossaryTermText": {
			"sse": "[ru] SSE",
			"mmf": "[ru] shared memory",
			"tauri": "[ru] Tauri",
			"nsis": "[ru] NSIS",
			"loopback": "[ru] localhost only"
		},
		"tabsAria": "[ru] Product sections",
		"tabs": {
			"features": "[ru] Features",
			"architecture": "[ru] Architecture",
			"data": "[ru] Data plane",
			"live": "[ru] Live & overlays",
			"desktop": "[ru] Desktop",
			"trust": "[ru] Trust & IT",
			"docs": "[ru] Guides & download"
		},
		"footerCopyright": "[ru] Copyright © Strixun. Overlane is proprietary software.",
		"footerGlossary": "[ru] Dotted glossary terms show a short explanation on hover or focus.",
		"mocks": {
			"tailFollow": "[ru] Tail follow",
			"logFiles": "[ru] Log files",
			"logHint": "[ru] Download file · sort · virtualized scroll in app",
			"recording": "[ru] Archive on",
			"ldpIngest": "[ru] Plugin ready",
			"archiveOn": "[ru] Archive on",
			"journalOn": "[ru] Journal on",
			"pluginReady": "[ru] Plugin ready",
			"workerReady": "[ru] Worker ready",
			"archiveTimeline": "[ru] Archive timeline · snapshots",
			"speed": "[ru] Speed",
			"fuel": "[ru] Fuel",
			"lanPort": "[ru] LAN · port 8080",
			"telemetryLive": "[ru] Game linked",
			"archiveRecording": "[ru] Archive on",
			"journalIdle": "[ru] Journal on",
			"liveDriving": "[ru] Live driving",
			"liveFromGame": "[ru] On job",
			"onJob": "[ru] On job",
			"gear": "[ru] Gear",
			"odometer": "[ru] Odometer",
			"wizardTitle": "[ru] Game setup",
			"wizardStepDetect": "[ru] Hook up game telemetry",
			"wizardStepPlugin": "[ru] Install your telemetry plugin",
			"wizardStepTest": "[ru] Verify connection",
			"wizardWaiting": "[ru] Waiting for telemetry",
			"serverRunning": "[ru] Worker ready",
			"gameLinked": "[ru] Game linked",
			"httpServer": "[ru] HTTP server",
			"bindAddress": "[ru] Bind address",
			"port": "[ru] Port",
			"overlayBaseUrl": "[ru] Overlay base URL",
			"gameLink": "[ru] Game link",
			"gameLinkStatusBeforePing": "[ru] ETS2 · SDK plugin active · last ping",
			"browserSources": "[ru] Browser sources",
			"kmBuffered": "[ru] 412 km buffered",
			"logFileCount": "[ru] 2 log files",
			"sampleLogFile": "[ru] overlane-2026-11-09.log",
			"presetCount": "[ru] 4 presets",
			"speedUnit": "[ru] km/h",
			"speedUnitLeadingSpace": "[ru]  km/h",
			"routeBadge": "[ru] Route",
			"onTime": "[ru] On time",
			"fuelPercent": "[ru] {pct}% fuel",
			"fuelLabel": "[ru] Fuel {pct}%",
			"gearLabel": "[ru] Gear {gear}",
			"archiveListCaption": "[ru] Selected row — inspector shows {route} for this snapshot."
		},
		"dataScale": {
			"title": "[ru] Scale and storage (honest)",
			"lead": "[ru] Recording is sparse by design — not every game tick becomes a row — but gzip SDK samples add up when you drive for months. Folding in Archive only collapses what you see in the timeline; it does not delete history on disk.",
			"ingestStrong": "[ru] Ingest sampling",
			"ingestBody": "[ru] default about one second between eligible rows, plus writes when speed or job context changes, on collisions, or at job boundaries.",
			"foldStrong": "[ru] Fold similar",
			"foldBody": "[ru] collapse adjacent snapshots in the same minute (or second/hour) when route, cargo, truck, trailer, speed, and on-job match; fines and deliveries always stay visible.",
			"sizeStrong": "[ru] Size ballpark",
			"sizeBody": "[ru] on the order of half a megabyte per thousand stored observations for list data; with full inspector samples, often a few kilobytes per row — expect single-digit to low tens of gigabytes for multi-million-mile careers unless you tune sampling.",
			"hotStrong": "[ru] Hot tier",
			"hotBody": "[ru] recent facts stay in SQLite; older observations can move to cold column files and a search index so the console stays responsive.",
			"quotaStrong": "[ru] No cloud quota",
			"quotaBody": "[ru] the app does not enforce a disk cap; use Settings maintenance, vault export, and mock purge when a folder grows past what your disk comfortably holds."
		},
		"catalog": {
			"archiveFoldSimilar": "[ru] Fold similar — collapse matching snapshots in a time window; fines and deliveries never fold",
			"ldpArchitectureLayer": "[ru] Hot ledger, cold column files, and search index on one machine — sparse ingest and rollup buckets keep dashboards fast as observation counts climb into the millions."
		},
		"homeScroll": {
			"anchorTour": "[ru] Product tour",
			"anchorOutcomes": "[ru] Outcomes",
			"anchorInstall": "[ru] Install",
			"anchorGuides": "[ru] Guides",
			"anchorsAria": "[ru] On this page",
			"outcomesTitle": "[ru] What you get on day one",
			"outcomesLead": "[ru] Four outcomes — live driving, memory, streaming, and setup — without hunting menus.",
			"installTitle": "[ru] Install options",
			"installLead": "[ru] Ship a production build or try mock telemetry before you link the game.",
			"powerUsersTitle": "[ru] IT & power users",
			"powerUsersSummary": "[ru] Architecture, local data plane, overlay policy, and trust boundaries for reviewers."
		},
		"homeOutcomes": {
			"liveArchiveTitle": "[ru] Live map & archive",
			"liveArchiveSummary": "[ru] Home card from real telemetry and a searchable timeline when recording is on.",
			"liveArchiveB0": "[ru] Speed, fuel, contract, and health strip while you drive.",
			"liveArchiveB1": "[ru] Search the timeline, fold similar rows, and open any snapshot in the inspector.",
			"overlaysTitle": "[ru] Overlays for streams",
			"overlaysSummary": "[ru] Canon preset URLs for OBS and browser sources — same metrics as the console.",
			"overlaysB0": "[ru] Velocity, controls, contract, and the rest of the catalog.",
			"overlaysB1": "[ru] Copy a URL once; point OBS at localhost.",
			"journalTitle": "[ru] Session journal",
			"journalSummary": "[ru] On-disk logs with tail-follow and download — app logging, not cloud notes.",
			"journalB0Before": "[ru] Browse ",
			"journalB0Between": "[ru]  and ",
			"journalB0After": "[ru]  with virtualized scroll in the app.",
			"journalB1": "[ru] Tail lines with follow mode during long hauls.",
			"workerTitle": "[ru] Install & local worker",
			"workerSummary": "[ru] Tauri shell, NSIS installers, and one telemetry worker on loopback by default.",
			"workerB0": "[ru] Production installer or Demo with mock telemetry — no game required.",
			"workerB1": "[ru] Bind address and port in Settings when you need LAN overlays."
		},
		"showcase": {
			"heading": "[ru] Three steps beside the game",
			"lead": "[ru] Live console, searchable archive, and stream overlays — pick a step below. Nothing auto-advances.",
			"galleryLabel": "[ru] Product tour",
			"note": "[ru] Illustrative samples — not a live session. Install Overlane for your own telemetry.",
			"carouselPrevAria": "[ru] Previous sample",
			"carouselNextAria": "[ru] Next sample",
			"carouselTablistAria": "[ru] Product samples",
			"slideHomeTitle": "[ru] Home · Live driving",
			"slideHomeBlurb": "[ru] Speed, fuel, gear, odometer, and active contract — the same card you get from real telemetry.",
			"slideArchiveTitle": "[ru] Archive timeline",
			"slideArchiveBlurb": "[ru] Virtualized snapshot rows on disk — search, fold similar, and inspect any moment without replaying the session.",
			"slideJournalBlurbBefore": "[ru] Browse ",
			"slideJournalBlurbBetween": "[ru]  / ",
			"slideJournalBlurbAfter": "[ru]  files, tail lines with follow mode, and download — app logging, not sticky notes.",
			"slideOverlaysTitle": "[ru] Overlays for OBS",
			"slideOverlaysBlurb": "[ru] Copy browser-source URLs for Velocity, Controls, Contract, and stream-ready layouts that match the live console.",
			"slideStreamTitle": "[ru] Stream overlays",
			"slideStreamBlurb": "[ru] Telemetry glass styling — speed focus, minimal, or route-first on one feed.",
			"slideSettingsTitle": "[ru] Settings · Connection",
			"slideSettingsBlurb": "[ru] Bind address, port, and overlay base URL on your machine.",
			"slideGameLinkTitle": "[ru] Game link wizard",
			"slideGameLinkBlurb": "[ru] Pick your sim folder and confirm the official telemetry plugin before you roll.",
			"pillarLive": "[ru] Live",
			"pillarData": "[ru] Data",
			"pillarFeatures": "[ru] Features",
			"pillarDesktop": "[ru] Desktop",
			"pillarSetup": "[ru] Setup"
		},
		"guidesPanel": {
			"onPageTitle": "[ru] On this page",
			"onPageLead": "[ru] Everything here is self-contained. Engineering source and internal docs are not published on GitHub.",
			"linkDownloads": "[ru] Windows installers",
			"linkGettingStarted": "[ru] Getting started",
			"linkPlayerGuide": "[ru] Player guide",
			"linkLicense": "[ru] Proprietary notice",
			"getOverlaneTitle": "[ru] Get Overlane"
		},
		"flowNodes": {
			"gamePlugin": "[ru] Game plugin",
			"sidecar": "[ru] Sidecar",
			"consoleOverlays": "[ru] Console / overlays",
			"obsBrowser": "[ru] OBS browser",
			"localService": "[ru] Telemetry worker",
			"console": "[ru] Console",
			"you": "[ru] You",
			"overlayPanels": "[ru] Overlay panels",
			"obsSlashBrowser": "[ru] OBS / browser",
			"ingest": "[ru] Ingest",
			"hotLedger": "[ru] Hot ledger",
			"coldFiles": "[ru] Cold files"
		},
		"panels": {
			"features": {
				"title": "[ru] Built for the long haul",
				"lead": "[ru] Overlane reads the game, serves a rich operator console, feeds your stream, and records every mile you opt into for dashboards and archive replay — all on your PC.",
				"calloutStrong": "[ru] Your data stays local.",
				"calloutRest": "[ru]  No cloud account is required.",
				"flowCaption": "[ru] Game → telemetry worker → you and your stream",
				"flowAria": "[ru] End-to-end product flow",
				"flowStreamLabel": "[ru] Stream path",
				"flowStreamRest": "[ru]  — same worker, different surface"
			},
			"architecture": {
				"title": "[ru] Composable local product",
				"lead": "[ru] UI, live feed, recording, and overlays share explicit boundaries so features evolve without a monolith.",
				"cladLead": "[ru] House structure follows",
				"cladTail": "[ru]  — small units wired through clear interfaces (ports/adapters, catalog-driven overlay policy).",
				"flowCaption": "[ru] Requests stay on loopback by default",
				"flowAria": "[ru] Architecture request flow",
				"flowOptionalRow": "[ru] Optional — LAN bind in Settings"
			},
			"data": {
				"title": "[ru] Local data plane",
				"lead": "[ru] Recent observations stay in a fast ledger; older facts move to compact column files; search has its own index — no hosted warehouse.",
				"calloutStrong": "[ru] Large archive design",
				"calloutRest": "[ru]  — hot/cold tiering on one machine.",
				"timelineStrong": "[ru] Archive timeline",
				"timelineBody": "[ru]  — snapshot folds and inspector for haul-level replay.",
				"analyticsStrong": "[ru] Analytics index",
				"analyticsBody": "[ru]  — backs Dashboard charts and delivery rollups when ingest is on.",
				"vaultStrong": "[ru] Vault export",
				"vaultBody": "[ru]  — settings, data paths, and logs for backup or support bundles.",
				"journalStrong": "[ru] Session log files",
				"journalBody": "[ru]  — plain logs on disk; not the same store as archive snapshots.",
				"flowCaption": "[ru] Write and read paths",
				"flowAria": "[ru] Data tiering"
			},
			"live": {
				"title": "[ru] Live telemetry and overlays",
				"leadBefore": "[ru] Overlay panels subscribe to",
				"leadAfter": "[ru]  from the same user-session telemetry worker that powers the console — MMF capture from the game, fan-out to browser sources.",
				"presetsStrong": "[ru] Preset panels",
				"presetsBody": "[ru]  — canon paths such as speed, fuel, contract; per-panel metric toggles and order.",
				"globalStrong": "[ru] Global overlay look",
				"globalBody": "[ru]  — glass, typography, and shared styling saved to config.",
				"composeStrong": "[ru] Compose layouts",
				"composeBodyBefore": "[ru]  — ",
				"composeBodyAfter": "[ru]  from the builder workspace.",
				"soloStrong": "[ru] Solo metrics",
				"soloBodyBefore": "[ru]  — ",
				"soloBodyAfter": "[ru]  for minimal stream layouts.",
				"announceStrong": "[ru] Announce",
				"announceBody": "[ru]  — job completion strip configurable from Settings and Overlays."
			},
			"desktop": {
				"title": "[ru] Windows desktop",
				"leadBefore": "",
				"leadBetween": "[ru]  bundles a per-user telemetry worker (not a Windows service), analytics library, and official telemetry DLL into ",
				"leadAfter": "[ru]  installers.",
				"colInstaller": "[ru] Installer",
				"colAudience": "[ru] Audience",
				"colBehaviour": "[ru] Behaviour",
				"rowProdName": "[ru] Overlane",
				"rowProdAudience": "[ru] Players & streamers",
				"rowProdBehaviour": "[ru] Live telemetry, console, overlays, archive, and journal — current-user NSIS install",
				"rowDemoName": "[ru] Overlane Demo",
				"rowDemoAudience": "[ru] Trials",
				"rowDemoBehaviour": "[ru] Mock telemetry + pre-seeded archive — explore console, overlays, and journal without the game",
				"installCalloutStrong": "[ru] User-session only.",
				"installCalloutBody": "[ru]  Neither production nor Demo registers a Windows service or SCM entry — the worker starts when you launch the desktop app and stops when you quit."
			},
			"trust": {
				"title": "[ru] Trust & privacy",
				"lead": "[ru] Single-user local product — your haul data is not a hosted multi-tenant service.",
				"calloutStrong": "[ru] Default bind:",
				"calloutBefore": " ",
				"calloutAfter": "[ru] . LAN exposure is opt-in in Settings.",
				"footer": "[ru] Proprietary software. Shipped installers include third-party components under their own licenses.",
				"noServiceNote": "[ru] No elevated admin install is required for normal use — telemetry stays in your Windows user session."
			}
		},
		"architectureLayers": {
			"desktopTitle": "[ru] Desktop shell",
			"desktopText": "[ru] Tauri window with custom titlebar, opens the console webview on localhost, starts and stops the telemetry worker with the app.",
			"serviceTitle": "[ru] Telemetry worker",
			"serviceText": "[ru] Go HTTP server in your user session: telemetry ingest, archive API, overlay routes, console bundles, and SSE live feed.",
			"consoleTitle": "[ru] Console UI",
			"consoleText": "[ru] CLAD-shaped React views with custom elements for heavy widgets; one operator surface for archive, journal, overlays.",
			"overlayTitle": "[ru] Overlay surfaces",
			"overlayTextBefore": "[ru] Separate browser URLs (",
			"overlayTextMid": "[ru] , ",
			"overlayTextAfter": "[ru] ) fed by the same live feed and saved visual config.",
			"ldpTitle": "[ru] Local data plane"
		},
		"featureAreas": {
			"homeTitle": "[ru] Home",
			"homeSummary": "[ru] Live driving card beside the game.",
			"homeB0": "[ru] Speed, fuel %, gear, odometer from the live telemetry snapshot",
			"homeB1": "[ru] Active route and cargo when a job is in progress",
			"homeB2": "[ru] Health strip and capture status at a glance",
			"dashboardTitle": "[ru] Dashboard",
			"dashboardSummary": "[ru] Rollups and charts over your archive — not the raw timeline.",
			"dashboardB0": "[ru] Editable tile layout with profiles you can save",
			"dashboardB1": "[ru] Time-series charts and exception lists from indexed analytics",
			"dashboardB2": "[ru] Jumps into Archive when a chart references a specific span",
			"archiveTitle": "[ru] Archive",
			"archiveSummary": "[ru] Searchable drive memory on disk.",
			"archiveB1": "[ru] Timeline with hierarchical folds and virtualized rows",
			"archiveB3": "[ru] Search tokens, range filters, and inspector detail",
			"archiveB4": "[ru] SDK payload view and neighbor diff for support/debug",
			"journalTitle": "[ru] Session log",
			"journalSummary": "[ru] Read Overlane log files — not an in-app notes pad.",
			"journalB0Before": "[ru] Lists plain ",
			"journalB0Between": "[ru]  and rotated ",
			"journalB0After": "[ru]  files on disk",
			"journalB1": "[ru] Virtualized log viewer with sort and tail-style follow",
			"journalB2": "[ru] Download a file; driving snapshots stay under Archive / Dashboard",
			"deliveriesTitle": "[ru] Deliveries",
			"deliveriesSummary": "[ru] Job history from telemetry-backed delivery records.",
			"deliveriesB0": "[ru] Sortable delivery log with job summary panels",
			"deliveriesB1": "[ru] Event groups and durations when analytics are available",
			"deliveriesB2": "[ru] Open detail without leaving the console",
			"overlaysTitle": "[ru] Overlays",
			"overlaysSummary": "[ru] OBS browser sources from the same telemetry worker as the console.",
			"overlaysB0": "[ru] Preset panels (Velocity, Controls, Contract, …) with live thumbnails",
			"overlaysB1": "[ru] Per-panel configure, metric order, and global overlay appearance",
			"overlaysB2Before": "[ru] Full-screen builder at ",
			"overlaysB2Mid": "[ru]  plus solo metric URLs at ",
			"settingsTitle": "[ru] Settings",
			"settingsSummary": "[ru] Connection, storage, announce, and maintenance.",
			"settingsB0": "[ru] Bind address, port, overlay base URL, units, and appearance",
			"settingsB1": "[ru] Game link wizard and official telemetry plugin install",
			"settingsB2": "[ru] Archive maintenance, vault export, speed alerts, dirty-save bar",
			"referenceTitle": "[ru] Reference",
			"referenceSummary": "[ru] SDK and capture glossary for operators.",
			"referenceB0": "[ru] Official SCS SDK channels vs Overlane wiring",
			"referenceB1": "[ru] MMF path, live-feed key, and capture status explainers"
		},
		"stickyBuyNow": "[ru] BUY NOW",
		"glossaryLabels": {
			"layman": "[ru] Layman:",
			"overlane": "[ru] Overlane:"
		},
		"glossary": {
			"arrowIpc": {
				"title": "[ru] Arrow IPC",
				"body": "[ru] Column-oriented tables streamed between processes in a compact binary format.",
				"layman": "[ru] A wide pipe that moves spreadsheet-style columns in bulk.",
				"ol": "[ru] Desktop archive uses this for large timeline windows."
			},
			"sse": {
				"title": "[ru] Server-Sent Events (SSE)",
				"body": "[ru] A one-way HTTP channel where the server pushes live updates to the browser.",
				"layman": "[ru] Overlay pages keep a light connection open for fresh numbers.",
				"ol": "[ru] Panel URLs subscribe for live speed, job, and compose widgets."
			},
			"mmf": {
				"title": "[ru] Memory-mapped file (MMF)",
				"body": "[ru] On Windows, shared RAM the game plugin and Overlane both map into.",
				"layman": "[ru] A shared clipboard both the game and Overlane read instantly.",
				"ol": "[ru] Official path uses Local\\OverlaneTelemetry via overlane-telemetry.dll."
			},
			"duckdb": {
				"title": "[ru] DuckDB",
				"body": "[ru] Embedded analytical SQL for local files without a separate database server.",
				"layman": "[ru] SQL analytics on your trip files on disk.",
				"ol": "[ru] Shipped in Windows installers for archive viewports and rollups."
			},
			"tantivy": {
				"title": "[ru] Tantivy",
				"body": "[ru] Full-text search engine for fast keyword queries over archive text.",
				"layman": "[ru] What makes search-as-you-type feel instant.",
				"ol": "[ru] Indexes journal and archive text on your machine."
			},
			"parquet": {
				"title": "[ru] Apache Parquet",
				"body": "[ru] Compressed columnar files suited to cold historical facts.",
				"layman": "[ru] Efficient packing for older trips on disk.",
				"ol": "[ru] Cold tier storage for archived observations."
			},
			"sqlite": {
				"title": "[ru] SQLite",
				"body": "[ru] Embedded SQL database used as the hot ledger for recent observations.",
				"layman": "[ru] Today's drive notes land here first.",
				"ol": "[ru] Live telemetry does not write here; ingest does when recording is on."
			},
			"wal": {
				"title": "[ru] SQLite WAL",
				"body": "[ru] Write-ahead logging for safer concurrent reads and writes.",
				"layman": "[ru] Browse the archive while new rows still land.",
				"ol": "[ru] Hot ledger mode for ingest overlap."
			},
			"zstd": {
				"title": "[ru] ZSTD",
				"body": "[ru] Modern compression for smaller cold files.",
				"layman": "[ru] Tighter packing so disks fill slower.",
				"ol": "[ru] Used when tiering observations to cold storage."
			},
			"fts": {
				"title": "[ru] Full-text search (FTS)",
				"body": "[ru] Inverted index for keyword search without scanning every row.",
				"layman": "[ru] The lookup table behind archive search.",
				"ol": "[ru] Works with filters like @cargo: in the console."
			},
			"clad": {
				"title": "[ru] CLAD",
				"body": "[ru] Composable Layered Agnostic Design — small units wired through explicit interfaces.",
				"layman": "[ru] Labeled blocks instead of one tangled script.",
				"ol": "[ru] How this marketing site and the product UI stay modular."
			},
			"nsis": {
				"title": "[ru] NSIS",
				"body": "[ru] Windows installer technology used for Overlane setup bundles.",
				"layman": "[ru] The familiar Next → Next installer wizard.",
				"ol": "[ru] Production and Demo are separate downloads."
			},
			"tauri": {
				"title": "[ru] Tauri",
				"body": "[ru] Native Windows shell hosting the web console and user-session telemetry worker lifecycle.",
				"layman": "[ru] The desktop app wrapper around the browser console.",
				"ol": "[ru] Boot splash, health-gated startup, bundled telemetry DLL — worker is not a Windows service."
			},
			"loopback": {
				"title": "[ru] Loopback bind",
				"body": "[ru] HTTP listens on localhost unless you opt into LAN exposure in Settings.",
				"layman": "[ru] Overlane talks on your PC by default—not the whole café Wi‑Fi.",
				"ol": "[ru] Default for console and overlay URLs."
			},
			"sidecar": {
				"title": "[ru] Telemetry worker",
				"body": "[ru] Companion Go process for API, live feed, ingest, and archive — runs in your user session, not as a Windows service.",
				"layman": "[ru] The engine running while the desktop window is open.",
				"ol": "[ru] Started by the desktop app at launch; exits when you quit Overlane."
			},
			"spa": {
				"title": "[ru] Single-page app (SPA)",
				"body": "[ru] Web UI that swaps views without full page reloads.",
				"layman": "[ru] One window; hop between Archive, Journal, Settings.",
				"ol": "[ru] The operator console experience."
			},
			"scsSdk": {
				"title": "[ru] SCS SDK",
				"body": "[ru] Official plugin SDK for ETS2 and ATS telemetry.",
				"layman": "[ru] The hook that reads what the truck is doing in-game.",
				"ol": "[ru] overlane-telemetry.dll targets this SDK."
			},
			"oltp": {
				"title": "[ru] OLTP",
				"body": "[ru] Many small, fast writes as you drive.",
				"layman": "[ru] Recording each moment as it happens.",
				"ol": "[ru] Hot ledger tuning for ingest."
			}
		}
	},
	"guides": {
		"gettingStarted": {
			"title": "[ru] Getting started",
			"lead": "[ru] Overlane runs on your PC. Nothing is uploaded off your machine by default.",
			"b0": "[ru] Get the latest production NSIS installer from https://short.army/overlane (hero Download button or sticky Buy now).",
			"b1": "[ru] Run the installer — per-user, not a Windows service — and start Overlane from the Start menu or tray.",
			"b2": "[ru] Follow the game-link wizard: pick your ETS2 or ATS folder and install the official telemetry plugin when prompted.",
			"b3": "[ru] Open Overlays and copy a panel URL into OBS or a browser beside the game.",
			"b4": "[ru] Optional: enable recording under Settings → Storage for archive timelines, dashboard rollups, and search."
		},
		"playerGuide": {
			"title": "[ru] Player guide",
			"lead0": "[ru] You need a supported telemetry plugin in the game’s plugins folder and the Overlane Windows app.",
			"b0": "[ru] Load a profile in the game — the console health strip shows when telemetry is live.",
			"b1": "[ru] Open Home for the Live driving card: speed, fuel, gear, odometer, and active route when you are on a job.",
			"b2": "[ru] Use Overlays to copy panel URLs into your streaming app.",
			"b3": "[ru] Tray menu: open the console or quit before running an installer upgrade.",
			"b4": "[ru] Overlane Demo ships mock telemetry and sample archive data — console, overlays, archive, and journal work with no game."
		},
		"license": {
			"title": "[ru] Proprietary notice",
			"p0": "[ru] Copyright © Strixun. All rights reserved.",
			"p1": "[ru] Overlane is proprietary software. This public site is marketing materials only — Windows installers ship through licensed purchase channels, not this repository.",
			"p2": "[ru] You may not copy, modify, or redistribute the software except as permitted by your license agreement or the terms on the release you downloaded.",
			"p3": "[ru] Shipped installers include third-party components under their own licenses."
		},
		"downloads": {
			"title": "[ru] Windows installers",
			"p0": "[ru] Windows builds ship as NSIS setup bundles from the purchase link below. Licensed artifacts also publish on the public GitHub release page when a build is promoted.",
			"p1": "[ru] Production Overlane connects to live ETS2/ATS telemetry. Overlane Demo uses a built-in mock feed and pre-seeded archive so you can tour every console surface without installing the game.",
			"p2": "[ru] Demo install targets the current user profile (for example under LocalAppData) and does not touch Windows services or the Service Control Manager.",
			"b0": "[ru] Overlane — live game link, archive, journal, overlays, and operator console.",
			"b1": "[ru] Overlane Demo — mock telemetry worker session for trials and stream layout testing.",
			"b2": "[ru] Quit Overlane from the tray before upgrading either installer."
		}
	}
} as Translation;

export default translation;
