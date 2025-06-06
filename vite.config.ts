import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/apiBsnss": {
        target: "http://inteplat.michimisimo.cloud:3000",
        changeOrigin: true,
        secure: false,
      },
      "/apiUsers": {
        target: "http://inteplat.michimisimo.cloud:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
