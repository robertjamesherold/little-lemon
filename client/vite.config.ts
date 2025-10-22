import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [tailwindcss(), svgr(), react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@utils": resolve(__dirname, "src/utils"),
      "@svg": resolve(__dirname, "src/assets/svg"),
      "@images": resolve(__dirname, "src/assets/images"),
      "@icons": resolve(__dirname, "src/assets/icons"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@layout": resolve(__dirname, "src/layout"),
      "@pages": resolve(__dirname, "src/pages"),
      "@scss": resolve(__dirname, "src/styles"),
      "@mixins": resolve(__dirname, "src/styles/mixins"),
      "@data": resolve(__dirname, "src/data"),
      "@services": resolve(__dirname, "src/services"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            `,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      "/api": {
        target: "http://192.168.178.222:4000",
        changeOrigin: true,
        secure: false,
        },
      },
    },
  }
)