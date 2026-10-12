import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/REACT-1005/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
