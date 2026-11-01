import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, type PluginOption } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { getDeployHost } from "./deploy-host";

// The Cloudflare plugin is imported only for Cloudflare builds, so local dev
// and other hosts never load wrangler or workerd.
async function hostPlugins(): Promise<PluginOption[]> {
  if (getDeployHost() !== "cloudflare") return [];
  const { cloudflare } = await import("@cloudflare/vite-plugin");
  return [cloudflare({ viteEnvironment: { name: "ssr" } })];
}

export default defineConfig({
  plugins: [...(await hostPlugins()), reactRouter(), tsconfigPaths()],
});
