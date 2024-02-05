// vite.config.ts
import { defineConfig } from "file:///home/zero/Desktop/iot-widgets/node_modules/vite/dist/node/index.js";
import dts from "file:///home/zero/Desktop/iot-widgets/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///home/zero/Desktop/iot-widgets/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/home/zero/Desktop/iot-widgets";
var vite_config_default = defineConfig({
  build: {
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      name: "@gadaman-rm/iot-widgets",
      entry: [
        path.resolve(__vite_injected_original_dirname, "./src/widgets/index.ts"),
        path.resolve(__vite_injected_original_dirname, "./src/math/math.ts"),
        path.resolve(__vite_injected_original_dirname, "./src/event/event.ts"),
        path.resolve(__vite_injected_original_dirname, "./src/utility/utility.ts")
      ],
      fileName: (format, name) => {
        if (format === "es")
          return `${name}.js`;
        else
          return `${name}.${format}`;
      },
      formats: ["cjs", "es"]
    }
  },
  plugins: [
    libInjectCss(),
    dts({
      exclude: ["src/app.tsx", "src/main.tsx"],
      rollupTypes: true
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS96ZXJvL0Rlc2t0b3AvaW90LXdpZGdldHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3plcm8vRGVza3RvcC9pb3Qtd2lkZ2V0cy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS96ZXJvL0Rlc2t0b3AvaW90LXdpZGdldHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgeyBsaWJJbmplY3RDc3MgfSBmcm9tICd2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIG91dERpcjogJ2Rpc3QnLFxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICBlbXB0eU91dERpcjogZmFsc2UsXG4gICAgbGliOiB7XG4gICAgICBuYW1lOiAnQGdhZGFtYW4tcm0vaW90LXdpZGdldHMnLFxuICAgICAgZW50cnk6IFtcbiAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy93aWRnZXRzL2luZGV4LnRzXCIpLFxuICAgICAgICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL21hdGgvbWF0aC50c1wiKSxcbiAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9ldmVudC9ldmVudC50c1wiKSxcbiAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy91dGlsaXR5L3V0aWxpdHkudHNcIiksXG4gICAgICBdLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQsIG5hbWUpID0+IHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2VzJylcbiAgICAgICAgICByZXR1cm4gYCR7bmFtZX0uanNgXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gYCR7bmFtZX0uJHtmb3JtYXR9YFxuICAgICAgfSxcbiAgICAgIGZvcm1hdHM6IFsnY2pzJywgJ2VzJ11cbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBsaWJJbmplY3RDc3MoKSxcbiAgICBkdHMoe1xuICAgICAgZXhjbHVkZTogWydzcmMvYXBwLnRzeCcsICdzcmMvbWFpbi50c3gnXSxcbiAgICAgIHJvbGx1cFR5cGVzOiB0cnVlXG4gICAgfSlcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRRLFNBQVMsb0JBQW9CO0FBQ3pTLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLElBQ2IsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsS0FBSyxRQUFRLGtDQUFXLHdCQUF3QjtBQUFBLFFBQ2hELEtBQUssUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxRQUM1QyxLQUFLLFFBQVEsa0NBQVcsc0JBQXNCO0FBQUEsUUFDOUMsS0FBSyxRQUFRLGtDQUFXLDBCQUEwQjtBQUFBLE1BQ3BEO0FBQUEsTUFDQSxVQUFVLENBQUMsUUFBUSxTQUFTO0FBQzFCLFlBQUksV0FBVztBQUNiLGlCQUFPLEdBQUcsSUFBSTtBQUFBO0FBRWQsaUJBQU8sR0FBRyxJQUFJLElBQUksTUFBTTtBQUFBLE1BQzVCO0FBQUEsTUFDQSxTQUFTLENBQUMsT0FBTyxJQUFJO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsZUFBZSxjQUFjO0FBQUEsTUFDdkMsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
