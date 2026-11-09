import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub project Pages: https://underwood-inc.github.io/overlane/ */
const pagesBase = "/overlane/";

export default defineConfig(({ mode }) => ({
    base: mode === "production" ? pagesBase : "/",
    plugins: [react()],
    build: {
        outDir: "dist",
        emptyOutDir: true,
    },
    test: {
        environment: "happy-dom",
        include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    },
}));
