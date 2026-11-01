import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";
import { getDeployHost } from "./deploy-host";

const host = getDeployHost();

export default {
  ssr: true,
  presets: host === "vercel" ? [vercelPreset()] : [],
  future: { v8_viteEnvironmentApi: host === "cloudflare" },
} satisfies Config;
