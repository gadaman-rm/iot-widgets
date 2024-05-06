import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import path from "path"
import { cpSync } from "fs"
import swc from "@z-code/vite-plugin-swc"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: false,
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
    swc({
      include: /\.ts?$/,
      swcrc: true,
      configFile: true,
    }),
    libInjectCss(),
    dts({
      exclude: ["src/main.ts"],
      rollupTypes: true,
    }),
    {
      name: "theme-config",
      closeBundle: async () => {
        cpSync(`${__dirname}/src/styles/`, `${__dirname}/dist/styles`, {
          recursive: true,
        })
      },
    },
  ],
})
