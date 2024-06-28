/// <reference types="vitest" />
import * as path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import manifest from "./public/manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: process.env.SOURCE_MAP === "true",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
            },
        },
    },
    plugins: [
        react(),
        VitePWA({
            registerType: "prompt",
            injectRegister: false,
            manifest,
            includeAssets: ["apple-touch-icon.png", "masked-icon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
            devOptions: {
                enabled: process.env.SW_DEV === "true",
                navigateFallback: "index.html",
                suppressWarnings: true,
                type: "module",
            },
            workbox: {
                globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
                cleanupOutdatedCaches: true,
                clientsClaim: true,
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
