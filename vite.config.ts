import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import { wrapperEnv } from "./build/getEnv";
import { createProxy } from "./build/proxy";
import { createAlias } from "./build/alias";
import { createVitePlugins } from "./build/plugins";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root: string = process.cwd();
  const env: Record<string, string> = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);

  return {
    root,
    base: viteEnv.VITE_PUBLIC_PATH,
    resolve: {
      alias: createAlias()
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/var.scss";`
        }
      }
    },
    server: {
      host: "0.0.0.0",
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      proxy: createProxy(viteEnv.VITE_PROXY)
    },
    plugins: createVitePlugins()
  };
});
