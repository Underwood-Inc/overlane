/** Shared decorative telemetry sample — align with real console Home when it changes. */
export const MOCK_SESSION = {
    speedKmh: 87,
    fuelPct: 62,
    odometerKm: 412,
    gear: 12,
    route: "Hamburg → Prague",
    cargo: "Machine parts",
    deliveryStatus: "On time",
} as const;

/** Archive list rows for marketing mocks — timeline list, not a scrubber. */
export const MOCK_ARCHIVE_ROWS = [
    { time: "14:02", route: "Hamburg · depot", speedKmh: 0, selected: false },
    { time: "14:18", route: "A1 northbound", speedKmh: 72, selected: false },
    { time: "14:41", route: MOCK_SESSION.route, speedKmh: MOCK_SESSION.speedKmh, selected: true },
    { time: "15:03", route: "Dresden bypass", speedKmh: 64, selected: false },
] as const;
