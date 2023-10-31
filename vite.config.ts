import preact from "@preact/preset-vite"
import ssr from "vike/plugin"
import Icons from "unplugin-icons/vite"
import path from "path"
import { defineConfig } from "vite"
import { fileURLToPath } from "url"

export default defineConfig(() => ({
  resolve: {
    alias: [
      {
        find: "#components",
        replacement: fileURLToPath(
          new URL("./interface/components", import.meta.url)
        ),
      },
      {
        find: "#hooks",
        replacement: fileURLToPath(
          new URL("./interface/hooks", import.meta.url)
        ),
      },
      {
        find: "#sections",
        replacement: fileURLToPath(
          new URL("./interface/sections", import.meta.url)
        ),
      },
      {
        find: "#layouts",
        replacement: fileURLToPath(
          new URL("./interface/layouts", import.meta.url)
        ),
      },
      {
        find: "#markdown",
        replacement: fileURLToPath(new URL("./markdown", import.meta.url)),
      },
      {
        find: "#design-system",
        replacement: fileURLToPath(new URL("./design-system", import.meta.url)),
      },
      {
        find: "#database",
        replacement: fileURLToPath(new URL("./database", import.meta.url)),
      },
    ],
  },
  plugins: [
    preact(),
    ssr({
      prerender: true,
    }),
    Icons({ compiler: "jsx", jsx: "preact" }),
  ],
  optimizeDeps: {
    include: [
      "preact",
      "preact/devtools",
      "preact/debug",
      "preact/jsx-dev-runtime",
      "preact/hooks",
    ],
  },
}))
