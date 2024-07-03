/// <reference types="vitest" />
import * as path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
// import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

import manifest from "./public/manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        TanStackRouterVite(),
        // viteReact(),
        react(),
        VitePWA({
            registerType: "prompt",
            injectRegister: false,
            manifest,
            includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
            // switch to "true" to enable sw on development
            devOptions: {
                enabled: false,
                navigateFallback: "index.html",
                suppressWarnings: true,
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
    test: {
        root: path.resolve(__dirname, "./src"),
    },
});
