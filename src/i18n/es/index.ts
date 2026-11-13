import type { Translation } from '../i18n-types.js';

const translation = {
	"brand": {
		"name": "[es] Overlane",
		"tagline": "[es] Telemetry · overlays · archive observations"
	},
	"common": {
		"close": "[es] Close",
		"loading": "[es] Loading…",
		"save": "[es] Save",
		"cancel": "[es] Cancel",
		"overlaneJson": "[es] overlane.json"
	},
	"nav": {
		"home": "[es] Home",
		"overlays": "[es] Overlays",
		"overlaysSub": "[es] Panel URLs",
		"dashboard": "[es] Dashboard",
		"dashboardSub": "[es] Archive rollups",
		"archive": "[es] Archive",
		"archiveSub": "[es] Snapshots",
		"journal": "[es] Session log",
		"journalSub": "[es] Log files",
		"deliveries": "[es] Delivery log",
		"deliveriesSub": "[es] Completed jobs",
		"overlayBuilder": "[es] Overlay builder",
		"overlayBuilderSub": "[es] Compose layouts",
		"mockLab": "[es] Mock lab",
		"mockLabSub": "[es] Mock telemetry",
		"reference": "[es] Reference",
		"referenceSub": "[es] Icons & metrics",
		"settings": "[es] Settings",
		"support": "[es] Support",
		"supportSub": "[es] Discord community",
		"toolsAria": "[es] Reference, settings & support"
	},
	"views": {
		"home": "[es] Home",
		"overlays": "[es] Overlays",
		"dashboard": "[es] Dashboard",
		"archive": "[es] Archive",
		"journal": "[es] Session log",
		"deliveries": "[es] Delivery log",
		"settings": "[es] Settings",
		"reference": "[es] Reference"
	},
	"titlebar": {
		"brandAria": "[es] Go to Home",
		"collapseNav": "[es] Collapse navigation",
		"collapseNavSr": "[es] Collapse navigation",
		"resizeNav": "[es] Resize navigation",
		"minimize": "[es] Minimize",
		"maximize": "[es] Maximize",
		"restore": "[es] Restore",
		"close": "[es] Close"
	},
	"commandPalette": {
		"goToView": "[es] Go to view",
		"referenceHint": "[es] Icon & metric glossaries",
		"overlayBuilder": "[es] Overlay builder",
		"overlayBuilderHint": "[es] Compose layouts (/builder)",
		"vaultImportExport": "[es] Import / export vault",
		"vaultHint": "[es] Settings → Data",
		"searchMetrics": "[es] Search metrics glossary",
		"searchMetricsHint": "[es] Reference → metrics",
		"searchIcons": "[es] Search icon glossary",
		"searchIconsHint": "[es] Reference → icons"
	},
	"settings": {
		"sectionsAria": "[es] Settings sections",
		"leadBeforeConfig": "[es] Everything here is saved to your",
		"leadAfterConfig": "[es] . App theme previews as you pick a preset — use",
		"leadAfterSaveTheme": "[es] to keep it. Server, telemetry, folders, and collision tuning need a restart of Overlane (desktop app or sidecar).",
		"saveAppTheme": "[es] Save app theme",
		"tabs": {
			"look": "[es] Look",
			"language": "[es] Language",
			"connection": "[es] Connection",
			"storage": "[es] Storage",
			"data": "[es] Data",
			"careers": "[es] Careers",
			"alerts": "[es] Alerts & announce"
		},
		"languageHeading": "[es] Language",
		"languageBody": "[es] Choose the language for console labels, settings, and dialogs. Marketing pages use the same choice when opened in the app.",
		"languageLabel": "[es] Display language",
		"languageAria": "[es] Display language"
	},
	"help": {
		"title": "[es] Console help",
		"commandPalette": "[es] Ctrl+K — command palette (views, copy preset URLs).",
		"lookScale": "[es] Settings → Look — window scale for the whole console (separate from overlay UI scale).",
		"archiveChips": "[es] Archive chips — double-click to pin a search token.",
		"importPreview": "[es] Import — pick a bundle to preview files before importing."
	},
	"careers": {
		"legend": "[es] Driving career profiles",
		"hint": "[es] Organize archive, dashboard, and future content under a named career tied to ETS2 or ATS. Portrait defaults to a generated avatar from your profile name — randomize or upload PNG/WebP/JPEG (max 512×512, 384 KiB).",
		"profileUpdated": "[es] Profile updated.",
		"profileCreated": "[es] Profile created.",
		"saveFailed": "[es] Save failed."
	},
	"onboarding": {
		"steps": {
			"setup": "[es] Game & plugin",
			"verify": "[es] Verify",
			"done": "[es] Ready"
		}
	},
	"marketing": {
		"heroEyebrow": "[es] Overlane",
		"heroTitle": "[es] Drive with a live map, a mile-by-mile archive, and stream overlays",
		"heroSubhead": "[es] One Windows app for ETS2 and ATS — console beside the game, OBS browser sources, no cloud account.",
		"heroTaglineLead": "[es] One local stack",
		"heroTaglineRest": "[es]  on your PC: telemetry console, searchable drive archive, session journal, and",
		"heroTaglineEm": "[es] OBS-ready",
		"heroTaglineEnd": "[es]  overlay panels for Euro Truck Simulator 2 and American Truck Simulator.",
		"heroCtaTour": "[es] See how it works",
		"heroProofLive": "[es] Live + archive on your PC",
		"heroProofOverlays": "[es] OBS-ready overlays",
		"heroProofJournal": "[es] Session journal on disk",
		"heroProofWorker": "[es] Local worker — no sign-in",
		"badgeLocalFirst": "[es] Local-first",
		"badgeWindows": "[es] Windows · NSIS installers",
		"badgeNoCloud": "[es] No cloud account",
		"badgeStreamer": "[es] Streamer-ready",
		"heroCtaDownload": "[es] Download for Windows",
		"heroCtaDemo": "[es] Try Demo installer",
		"heroCtaDemoSub": "[es] Mock telemetry — no game",
		"playerGuide": "[es] Player guide",
		"gettingStarted": "[es] Getting started",
		"exploreFeatures": "[es] Explore features ↓",
		"proprietaryFine": "[es] Proprietary software · not open source",
		"statLive": "[es] Live",
		"statArchive": "[es] Archive",
		"statArchiveDetail": "[es] Timeline, search, inspector, compare",
		"statJournal": "[es] Session log",
		"statLiveDetailFrom": "[es]  overlay panels from ",
		"statJournalDetailBefore": "[es] On-disk ",
		"statJournalDetailAfter": "[es]  files + line viewer",
		"statVault": "[es] Vault",
		"statVaultDetail": "[es] Export settings, data, logs",
		"codeExtensions": {
			"log": "[es] .log",
			"logGz": "[es] .log.gz"
		},
		"glossaryTermText": {
			"sse": "[es] SSE",
			"mmf": "[es] shared memory",
			"tauri": "[es] Tauri",
			"nsis": "[es] NSIS",
			"loopback": "[es] localhost only"
		},
		"tabsAria": "[es] Product sections",
		"tabs": {
			"features": "[es] Features",
			"architecture": "[es] Architecture",
			"data": "[es] Data plane",
			"live": "[es] Live & overlays",
			"desktop": "[es] Desktop",
			"trust": "[es] Trust & IT",
			"docs": "[es] Guides & download"
		},
		"footerCopyright": "[es] Copyright © Strixun. Overlane is proprietary software.",
		"footerGlossary": "[es] Dotted glossary terms show a short explanation on hover or focus.",
		"mocks": {
			"tailFollow": "[es] Tail follow",
			"logFiles": "[es] Log files",
			"logHint": "[es] Download file · sort · virtualized scroll in app",
			"recording": "[es] Archive on",
			"ldpIngest": "[es] Plugin ready",
			"archiveOn": "[es] Archive on",
			"journalOn": "[es] Journal on",
			"pluginReady": "[es] Plugin ready",
			"workerReady": "[es] Worker ready",
			"archiveTimeline": "[es] Archive timeline · snapshots",
			"speed": "[es] Speed",
			"fuel": "[es] Fuel",
			"lanPort": "[es] LAN · port 8080",
			"telemetryLive": "[es] Game linked",
			"archiveRecording": "[es] Archive on",
			"journalIdle": "[es] Journal on",
			"liveDriving": "[es] Live driving",
			"liveFromGame": "[es] On job",
			"onJob": "[es] On job",
			"gear": "[es] Gear",
			"odometer": "[es] Odometer",
			"wizardTitle": "[es] Game setup",
			"wizardStepDetect": "[es] Hook up game telemetry",
			"wizardStepPlugin": "[es] Install your telemetry plugin",
			"wizardStepTest": "[es] Verify connection",
			"wizardWaiting": "[es] Waiting for telemetry",
			"serverRunning": "[es] Worker ready",
			"gameLinked": "[es] Game linked",
			"httpServer": "[es] HTTP server",
			"bindAddress": "[es] Bind address",
			"port": "[es] Port",
			"overlayBaseUrl": "[es] Overlay base URL",
			"gameLink": "[es] Game link",
			"gameLinkStatusBeforePing": "[es] ETS2 · SDK plugin active · last ping",
			"browserSources": "[es] Browser sources",
			"kmBuffered": "[es] 412 km buffered",
			"logFileCount": "[es] 2 log files",
			"sampleLogFile": "[es] overlane-2026-11-09.log",
			"presetCount": "[es] 4 presets",
			"speedUnit": "[es] km/h",
			"speedUnitLeadingSpace": "[es]  km/h",
			"routeBadge": "[es] Route",
			"onTime": "[es] On time",
			"fuelPercent": "[es] {pct}% fuel",
			"fuelLabel": "[es] Fuel {pct}%",
			"gearLabel": "[es] Gear {gear}",
			"archiveListCaption": "[es] Selected row — inspector shows {route} for this snapshot."
		},
		"dataScale": {
			"title": "[es] Scale and storage (honest)",
			"lead": "[es] Recording is sparse by design — not every game tick becomes a row — but gzip SDK samples add up when you drive for months. Folding in Archive only collapses what you see in the timeline; it does not delete history on disk.",
			"ingestStrong": "[es] Ingest sampling",
			"ingestBody": "[es] default about one second between eligible rows, plus writes when speed or job context changes, on collisions, or at job boundaries.",
			"foldStrong": "[es] Fold similar",
			"foldBody": "[es] collapse adjacent snapshots in the same minute (or second/hour) when route, cargo, truck, trailer, speed, and on-job match; fines and deliveries always stay visible.",
			"sizeStrong": "[es] Size ballpark",
			"sizeBody": "[es] on the order of half a megabyte per thousand stored observations for list data; with full inspector samples, often a few kilobytes per row — expect single-digit to low tens of gigabytes for multi-million-mile careers unless you tune sampling.",
			"hotStrong": "[es] Hot tier",
			"hotBody": "[es] recent facts stay in SQLite; older observations can move to cold column files and a search index so the console stays responsive.",
			"quotaStrong": "[es] No cloud quota",
			"quotaBody": "[es] the app does not enforce a disk cap; use Settings maintenance, vault export, and mock purge when a folder grows past what your disk comfortably holds."
		},
		"catalog": {
			"archiveFoldSimilar": "[es] Fold similar — collapse matching snapshots in a time window; fines and deliveries never fold",
			"ldpArchitectureLayer": "[es] Hot ledger, cold column files, and search index on one machine — sparse ingest and rollup buckets keep dashboards fast as observation counts climb into the millions."
		},
		"homeScroll": {
			"anchorTour": "[es] Product tour",
			"anchorOutcomes": "[es] Outcomes",
			"anchorInstall": "[es] Install",
			"anchorGuides": "[es] Guides",
			"anchorsAria": "[es] On this page",
			"outcomesTitle": "[es] What you get on day one",
			"outcomesLead": "[es] Four outcomes — live driving, memory, streaming, and setup — without hunting menus.",
			"installTitle": "[es] Install options",
			"installLead": "[es] Ship a production build or try mock telemetry before you link the game.",
			"powerUsersTitle": "[es] IT & power users",
			"powerUsersSummary": "[es] Architecture, local data plane, overlay policy, and trust boundaries for reviewers."
		},
		"homeOutcomes": {
			"liveArchiveTitle": "[es] Live map & archive",
			"liveArchiveSummary": "[es] Home card from real telemetry and a searchable timeline when recording is on.",
			"liveArchiveB0": "[es] Speed, fuel, contract, and health strip while you drive.",
			"liveArchiveB1": "[es] Search the timeline, fold similar rows, and open any snapshot in the inspector.",
			"overlaysTitle": "[es] Overlays for streams",
			"overlaysSummary": "[es] Canon preset URLs for OBS and browser sources — same metrics as the console.",
			"overlaysB0": "[es] Velocity, controls, contract, and the rest of the catalog.",
			"overlaysB1": "[es] Copy a URL once; point OBS at localhost.",
			"journalTitle": "[es] Session journal",
			"journalSummary": "[es] On-disk logs with tail-follow and download — app logging, not cloud notes.",
			"journalB0Before": "[es] Browse ",
			"journalB0Between": "[es]  and ",
			"journalB0After": "[es]  with virtualized scroll in the app.",
			"journalB1": "[es] Tail lines with follow mode during long hauls.",
			"workerTitle": "[es] Install & local worker",
			"workerSummary": "[es] Tauri shell, NSIS installers, and one telemetry worker on loopback by default.",
			"workerB0": "[es] Production installer or Demo with mock telemetry — no game required.",
			"workerB1": "[es] Bind address and port in Settings when you need LAN overlays."
		},
		"showcase": {
			"heading": "[es] Three steps beside the game",
			"lead": "[es] Live console, searchable archive, and stream overlays — pick a step below. Nothing auto-advances.",
			"galleryLabel": "[es] Product tour",
			"note": "[es] Illustrative samples — not a live session. Install Overlane for your own telemetry.",
			"carouselPrevAria": "[es] Previous sample",
			"carouselNextAria": "[es] Next sample",
			"carouselTablistAria": "[es] Product samples",
			"slideHomeTitle": "[es] Home · Live driving",
			"slideHomeBlurb": "[es] Speed, fuel, gear, odometer, and active contract — the same card you get from real telemetry.",
			"slideArchiveTitle": "[es] Archive timeline",
			"slideArchiveBlurb": "[es] Virtualized snapshot rows on disk — search, fold similar, and inspect any moment without replaying the session.",
			"slideJournalBlurbBefore": "[es] Browse ",
			"slideJournalBlurbBetween": "[es]  / ",
			"slideJournalBlurbAfter": "[es]  files, tail lines with follow mode, and download — app logging, not sticky notes.",
			"slideOverlaysTitle": "[es] Overlays for OBS",
			"slideOverlaysBlurb": "[es] Copy browser-source URLs for Velocity, Controls, Contract, and stream-ready layouts that match the live console.",
			"slideStreamTitle": "[es] Stream overlays",
			"slideStreamBlurb": "[es] Telemetry glass styling — speed focus, minimal, or route-first on one feed.",
			"slideSettingsTitle": "[es] Settings · Connection",
			"slideSettingsBlurb": "[es] Bind address, port, and overlay base URL on your machine.",
			"slideGameLinkTitle": "[es] Game link wizard",
			"slideGameLinkBlurb": "[es] Pick your sim folder and confirm the official telemetry plugin before you roll.",
			"pillarLive": "[es] Live",
			"pillarData": "[es] Data",
			"pillarFeatures": "[es] Features",
			"pillarDesktop": "[es] Desktop",
			"pillarSetup": "[es] Setup"
		},
		"guidesPanel": {
			"onPageTitle": "[es] On this page",
			"onPageLead": "[es] Everything here is self-contained. Engineering source and internal docs are not published on GitHub.",
			"linkDownloads": "[es] Windows installers",
			"linkGettingStarted": "[es] Getting started",
			"linkPlayerGuide": "[es] Player guide",
			"linkLicense": "[es] Proprietary notice",
			"getOverlaneTitle": "[es] Get Overlane"
		},
		"flowNodes": {
			"gamePlugin": "[es] Game plugin",
			"sidecar": "[es] Sidecar",
			"consoleOverlays": "[es] Console / overlays",
			"obsBrowser": "[es] OBS browser",
			"localService": "[es] Telemetry worker",
			"console": "[es] Console",
			"you": "[es] You",
			"overlayPanels": "[es] Overlay panels",
			"obsSlashBrowser": "[es] OBS / browser",
			"ingest": "[es] Ingest",
			"hotLedger": "[es] Hot ledger",
			"coldFiles": "[es] Cold files"
		},
		"panels": {
			"features": {
				"title": "[es] Built for the long haul",
				"lead": "[es] Overlane reads the game, serves a rich operator console, feeds your stream, and records every mile you opt into for dashboards and archive replay — all on your PC.",
				"calloutStrong": "[es] Your data stays local.",
				"calloutRest": "[es]  No cloud account is required.",
				"flowCaption": "[es] Game → telemetry worker → you and your stream",
				"flowAria": "[es] End-to-end product flow",
				"flowStreamLabel": "[es] Stream path",
				"flowStreamRest": "[es]  — same worker, different surface"
			},
			"architecture": {
				"title": "[es] Composable local product",
				"lead": "[es] UI, live feed, recording, and overlays share explicit boundaries so features evolve without a monolith.",
				"cladLead": "[es] House structure follows",
				"cladTail": "[es]  — small units wired through clear interfaces (ports/adapters, catalog-driven overlay policy).",
				"flowCaption": "[es] Requests stay on loopback by default",
				"flowAria": "[es] Architecture request flow",
				"flowOptionalRow": "[es] Optional — LAN bind in Settings"
			},
			"data": {
				"title": "[es] Local data plane",
				"lead": "[es] Recent observations stay in a fast ledger; older facts move to compact column files; search has its own index — no hosted warehouse.",
				"calloutStrong": "[es] Large archive design",
				"calloutRest": "[es]  — hot/cold tiering on one machine.",
				"timelineStrong": "[es] Archive timeline",
				"timelineBody": "[es]  — snapshot folds and inspector for haul-level replay.",
				"analyticsStrong": "[es] Analytics index",
				"analyticsBody": "[es]  — backs Dashboard charts and delivery rollups when ingest is on.",
				"vaultStrong": "[es] Vault export",
				"vaultBody": "[es]  — settings, data paths, and logs for backup or support bundles.",
				"journalStrong": "[es] Session log files",
				"journalBody": "[es]  — plain logs on disk; not the same store as archive snapshots.",
				"flowCaption": "[es] Write and read paths",
				"flowAria": "[es] Data tiering"
			},
			"live": {
				"title": "[es] Live telemetry and overlays",
				"leadBefore": "[es] Overlay panels subscribe to",
				"leadAfter": "[es]  from the same user-session telemetry worker that powers the console — MMF capture from the game, fan-out to browser sources.",
				"presetsStrong": "[es] Preset panels",
				"presetsBody": "[es]  — canon paths such as speed, fuel, contract; per-panel metric toggles and order.",
				"globalStrong": "[es] Global overlay look",
				"globalBody": "[es]  — glass, typography, and shared styling saved to config.",
				"composeStrong": "[es] Compose layouts",
				"composeBodyBefore": "[es]  — ",
				"composeBodyAfter": "[es]  from the builder workspace.",
				"soloStrong": "[es] Solo metrics",
				"soloBodyBefore": "[es]  — ",
				"soloBodyAfter": "[es]  for minimal stream layouts.",
				"announceStrong": "[es] Announce",
				"announceBody": "[es]  — job completion strip configurable from Settings and Overlays."
			},
			"desktop": {
				"title": "[es] Windows desktop",
				"leadBefore": "",
				"leadBetween": "[es]  bundles a per-user telemetry worker (not a Windows service), analytics library, and official telemetry DLL into ",
				"leadAfter": "[es]  installers.",
				"colInstaller": "[es] Installer",
				"colAudience": "[es] Audience",
				"colBehaviour": "[es] Behaviour",
				"rowProdName": "[es] Overlane",
				"rowProdAudience": "[es] Players & streamers",
				"rowProdBehaviour": "[es] Live telemetry, console, overlays, archive, and journal — current-user NSIS install",
				"rowDemoName": "[es] Overlane Demo",
				"rowDemoAudience": "[es] Trials",
				"rowDemoBehaviour": "[es] Mock telemetry + pre-seeded archive — explore console, overlays, and journal without the game",
				"installCalloutStrong": "[es] User-session only.",
				"installCalloutBody": "[es]  Neither production nor Demo registers a Windows service or SCM entry — the worker starts when you launch the desktop app and stops when you quit."
			},
			"trust": {
				"title": "[es] Trust & privacy",
				"lead": "[es] Single-user local product — your haul data is not a hosted multi-tenant service.",
				"calloutStrong": "[es] Default bind:",
				"calloutBefore": " ",
				"calloutAfter": "[es] . LAN exposure is opt-in in Settings.",
				"footer": "[es] Proprietary software. Shipped installers include third-party components under their own licenses.",
				"noServiceNote": "[es] No elevated admin install is required for normal use — telemetry stays in your Windows user session."
			}
		},
		"architectureLayers": {
			"desktopTitle": "[es] Desktop shell",
			"desktopText": "[es] Tauri window with custom titlebar, opens the console webview on localhost, starts and stops the telemetry worker with the app.",
			"serviceTitle": "[es] Telemetry worker",
			"serviceText": "[es] Go HTTP server in your user session: telemetry ingest, archive API, overlay routes, console bundles, and SSE live feed.",
			"consoleTitle": "[es] Console UI",
			"consoleText": "[es] CLAD-shaped React views with custom elements for heavy widgets; one operator surface for archive, journal, overlays.",
			"overlayTitle": "[es] Overlay surfaces",
			"overlayTextBefore": "[es] Separate browser URLs (",
			"overlayTextMid": "[es] , ",
			"overlayTextAfter": "[es] ) fed by the same live feed and saved visual config.",
			"ldpTitle": "[es] Local data plane"
		},
		"featureAreas": {
			"homeTitle": "[es] Home",
			"homeSummary": "[es] Live driving card beside the game.",
			"homeB0": "[es] Speed, fuel %, gear, odometer from the live telemetry snapshot",
			"homeB1": "[es] Active route and cargo when a job is in progress",
			"homeB2": "[es] Health strip and capture status at a glance",
			"dashboardTitle": "[es] Dashboard",
			"dashboardSummary": "[es] Rollups and charts over your archive — not the raw timeline.",
			"dashboardB0": "[es] Editable tile layout with profiles you can save",
			"dashboardB1": "[es] Time-series charts and exception lists from indexed analytics",
			"dashboardB2": "[es] Jumps into Archive when a chart references a specific span",
			"archiveTitle": "[es] Archive",
			"archiveSummary": "[es] Searchable drive memory on disk.",
			"archiveB1": "[es] Timeline with hierarchical folds and virtualized rows",
			"archiveB3": "[es] Search tokens, range filters, and inspector detail",
			"archiveB4": "[es] SDK payload view and neighbor diff for support/debug",
			"journalTitle": "[es] Session log",
			"journalSummary": "[es] Read Overlane log files — not an in-app notes pad.",
			"journalB0Before": "[es] Lists plain ",
			"journalB0Between": "[es]  and rotated ",
			"journalB0After": "[es]  files on disk",
			"journalB1": "[es] Virtualized log viewer with sort and tail-style follow",
			"journalB2": "[es] Download a file; driving snapshots stay under Archive / Dashboard",
			"deliveriesTitle": "[es] Deliveries",
			"deliveriesSummary": "[es] Job history from telemetry-backed delivery records.",
			"deliveriesB0": "[es] Sortable delivery log with job summary panels",
			"deliveriesB1": "[es] Event groups and durations when analytics are available",
			"deliveriesB2": "[es] Open detail without leaving the console",
			"overlaysTitle": "[es] Overlays",
			"overlaysSummary": "[es] OBS browser sources from the same telemetry worker as the console.",
			"overlaysB0": "[es] Preset panels (Velocity, Controls, Contract, …) with live thumbnails",
			"overlaysB1": "[es] Per-panel configure, metric order, and global overlay appearance",
			"overlaysB2Before": "[es] Full-screen builder at ",
			"overlaysB2Mid": "[es]  plus solo metric URLs at ",
			"settingsTitle": "[es] Settings",
			"settingsSummary": "[es] Connection, storage, announce, and maintenance.",
			"settingsB0": "[es] Bind address, port, overlay base URL, units, and appearance",
			"settingsB1": "[es] Game link wizard and official telemetry plugin install",
			"settingsB2": "[es] Archive maintenance, vault export, speed alerts, dirty-save bar",
			"referenceTitle": "[es] Reference",
			"referenceSummary": "[es] SDK and capture glossary for operators.",
			"referenceB0": "[es] Official SCS SDK channels vs Overlane wiring",
			"referenceB1": "[es] MMF path, live-feed key, and capture status explainers"
		},
		"stickyBuyNow": "[es] BUY NOW",
		"glossaryLabels": {
			"layman": "[es] Layman:",
			"overlane": "[es] Overlane:"
		},
		"glossary": {
			"arrowIpc": {
				"title": "[es] Arrow IPC",
				"body": "[es] Column-oriented tables streamed between processes in a compact binary format.",
				"layman": "[es] A wide pipe that moves spreadsheet-style columns in bulk.",
				"ol": "[es] Desktop archive uses this for large timeline windows."
			},
			"sse": {
				"title": "[es] Server-Sent Events (SSE)",
				"body": "[es] A one-way HTTP channel where the server pushes live updates to the browser.",
				"layman": "[es] Overlay pages keep a light connection open for fresh numbers.",
				"ol": "[es] Panel URLs subscribe for live speed, job, and compose widgets."
			},
			"mmf": {
				"title": "[es] Memory-mapped file (MMF)",
				"body": "[es] On Windows, shared RAM the game plugin and Overlane both map into.",
				"layman": "[es] A shared clipboard both the game and Overlane read instantly.",
				"ol": "[es] Official path uses Local\\OverlaneTelemetry via overlane-telemetry.dll."
			},
			"duckdb": {
				"title": "[es] DuckDB",
				"body": "[es] Embedded analytical SQL for local files without a separate database server.",
				"layman": "[es] SQL analytics on your trip files on disk.",
				"ol": "[es] Shipped in Windows installers for archive viewports and rollups."
			},
			"tantivy": {
				"title": "[es] Tantivy",
				"body": "[es] Full-text search engine for fast keyword queries over archive text.",
				"layman": "[es] What makes search-as-you-type feel instant.",
				"ol": "[es] Indexes journal and archive text on your machine."
			},
			"parquet": {
				"title": "[es] Apache Parquet",
				"body": "[es] Compressed columnar files suited to cold historical facts.",
				"layman": "[es] Efficient packing for older trips on disk.",
				"ol": "[es] Cold tier storage for archived observations."
			},
			"sqlite": {
				"title": "[es] SQLite",
				"body": "[es] Embedded SQL database used as the hot ledger for recent observations.",
				"layman": "[es] Today's drive notes land here first.",
				"ol": "[es] Live telemetry does not write here; ingest does when recording is on."
			},
			"wal": {
				"title": "[es] SQLite WAL",
				"body": "[es] Write-ahead logging for safer concurrent reads and writes.",
				"layman": "[es] Browse the archive while new rows still land.",
				"ol": "[es] Hot ledger mode for ingest overlap."
			},
			"zstd": {
				"title": "[es] ZSTD",
				"body": "[es] Modern compression for smaller cold files.",
				"layman": "[es] Tighter packing so disks fill slower.",
				"ol": "[es] Used when tiering observations to cold storage."
			},
			"fts": {
				"title": "[es] Full-text search (FTS)",
				"body": "[es] Inverted index for keyword search without scanning every row.",
				"layman": "[es] The lookup table behind archive search.",
				"ol": "[es] Works with filters like @cargo: in the console."
			},
			"clad": {
				"title": "[es] CLAD",
				"body": "[es] Composable Layered Agnostic Design — small units wired through explicit interfaces.",
				"layman": "[es] Labeled blocks instead of one tangled script.",
				"ol": "[es] How this marketing site and the product UI stay modular."
			},
			"nsis": {
				"title": "[es] NSIS",
				"body": "[es] Windows installer technology used for Overlane setup bundles.",
				"layman": "[es] The familiar Next → Next installer wizard.",
				"ol": "[es] Production and Demo are separate downloads."
			},
			"tauri": {
				"title": "[es] Tauri",
				"body": "[es] Native Windows shell hosting the web console and user-session telemetry worker lifecycle.",
				"layman": "[es] The desktop app wrapper around the browser console.",
				"ol": "[es] Boot splash, health-gated startup, bundled telemetry DLL — worker is not a Windows service."
			},
			"loopback": {
				"title": "[es] Loopback bind",
				"body": "[es] HTTP listens on localhost unless you opt into LAN exposure in Settings.",
				"layman": "[es] Overlane talks on your PC by default—not the whole café Wi‑Fi.",
				"ol": "[es] Default for console and overlay URLs."
			},
			"sidecar": {
				"title": "[es] Telemetry worker",
				"body": "[es] Companion Go process for API, live feed, ingest, and archive — runs in your user session, not as a Windows service.",
				"layman": "[es] The engine running while the desktop window is open.",
				"ol": "[es] Started by the desktop app at launch; exits when you quit Overlane."
			},
			"spa": {
				"title": "[es] Single-page app (SPA)",
				"body": "[es] Web UI that swaps views without full page reloads.",
				"layman": "[es] One window; hop between Archive, Journal, Settings.",
				"ol": "[es] The operator console experience."
			},
			"scsSdk": {
				"title": "[es] SCS SDK",
				"body": "[es] Official plugin SDK for ETS2 and ATS telemetry.",
				"layman": "[es] The hook that reads what the truck is doing in-game.",
				"ol": "[es] overlane-telemetry.dll targets this SDK."
			},
			"oltp": {
				"title": "[es] OLTP",
				"body": "[es] Many small, fast writes as you drive.",
				"layman": "[es] Recording each moment as it happens.",
				"ol": "[es] Hot ledger tuning for ingest."
			}
		}
	},
	"guides": {
		"gettingStarted": {
			"title": "[es] Getting started",
			"lead": "[es] Overlane runs on your PC. Nothing is uploaded off your machine by default.",
			"b0": "[es] Get the latest production NSIS installer from https://short.army/overlane (hero Download button or sticky Buy now).",
			"b1": "[es] Run the installer — per-user, not a Windows service — and start Overlane from the Start menu or tray.",
			"b2": "[es] Follow the game-link wizard: pick your ETS2 or ATS folder and install the official telemetry plugin when prompted.",
			"b3": "[es] Open Overlays and copy a panel URL into OBS or a browser beside the game.",
			"b4": "[es] Optional: enable recording under Settings → Storage for archive timelines, dashboard rollups, and search."
		},
		"playerGuide": {
			"title": "[es] Player guide",
			"lead0": "[es] You need a supported telemetry plugin in the game’s plugins folder and the Overlane Windows app.",
			"b0": "[es] Load a profile in the game — the console health strip shows when telemetry is live.",
			"b1": "[es] Open Home for the Live driving card: speed, fuel, gear, odometer, and active route when you are on a job.",
			"b2": "[es] Use Overlays to copy panel URLs into your streaming app.",
			"b3": "[es] Tray menu: open the console or quit before running an installer upgrade.",
			"b4": "[es] Overlane Demo ships mock telemetry and sample archive data — console, overlays, archive, and journal work with no game."
		},
		"license": {
			"title": "[es] Proprietary notice",
			"p0": "[es] Copyright © Strixun. All rights reserved.",
			"p1": "[es] Overlane is proprietary software. This public site is marketing materials only — Windows installers ship through licensed purchase channels, not this repository.",
			"p2": "[es] You may not copy, modify, or redistribute the software except as permitted by your license agreement or the terms on the release you downloaded.",
			"p3": "[es] Shipped installers include third-party components under their own licenses."
		},
		"downloads": {
			"title": "[es] Windows installers",
			"p0": "[es] Windows builds ship as NSIS setup bundles from the purchase link below. Licensed artifacts also publish on the public GitHub release page when a build is promoted.",
			"p1": "[es] Production Overlane connects to live ETS2/ATS telemetry. Overlane Demo uses a built-in mock feed and pre-seeded archive so you can tour every console surface without installing the game.",
			"p2": "[es] Demo install targets the current user profile (for example under LocalAppData) and does not touch Windows services or the Service Control Manager.",
			"b0": "[es] Overlane — live game link, archive, journal, overlays, and operator console.",
			"b1": "[es] Overlane Demo — mock telemetry worker session for trials and stream layout testing.",
			"b2": "[es] Quit Overlane from the tray before upgrading either installer."
		}
	}
} as Translation;

export default translation;
