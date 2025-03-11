import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
//@ts-ignore
import path from "path";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
        "./Dashboard": "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
    {
      name: "vite-plugin-notify-host-on-rebuild",
      apply(config, { command }) {
        return Boolean(command === "build" && config.build?.watch);
      },
      async buildEnd(error) {
        if (!error) {
          try {
            //@ts-ignore
            await fetch("http://localhost:3000/__fullReload");
          } catch (e) {
            //@ts-ignore
            console.error(e);
          }
        }
      },
    },
  ],
  resolve: {
    alias: {
      //@ts-ignore
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
