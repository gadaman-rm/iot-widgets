import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import path from "path"
import { cpSync } from "fs"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      name: "@gadaman-rm/iot-widgets",
      entry: [
        path.resolve(__dirname, "./src/widgets/index.ts"),
        path.resolve(__dirname, "./src/components/components.ts"),
        path.resolve(__dirname, "./src/math/math.ts"),
        path.resolve(__dirname, "./src/event/event.ts"),
        path.resolve(__dirname, "./src/utility/utility.ts"),
      ],
      fileName: (format, name) => {
        if (format === "es") return `${name}.js`
        else return `${name}.${format}`
      },
      formats: ["cjs", "es"],
    },
  },
  plugins: [
    libInjectCss(),
    dts({
      exclude: ["src/app.tsx", "src/main.tsx"],
      rollupTypes: true,
    }),
    {
      name: "theme-config",
      closeBundle: async () => {
        cpSync(`${__dirname}/src/styles/theme/`, `${__dirname}/dist/theme`, {
          recursive: true,
        })
      },
    },
  ],
})
