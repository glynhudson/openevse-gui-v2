import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),viteCompression({deleteOriginFile: false, algorithm: "gzip"})],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },
  base: './',


  server: {
      host: "0.0.0.0",
      proxy: {
          '/schedule': 'http://openevse.local/schedule',
      },
  }

});