export type DeployHost = "vercel" | "cloudflare" | "node";

const hosts: readonly DeployHost[] = ["vercel", "cloudflare", "node"];

/**
 * Picks the build target from the build environment. Vercel sets VERCEL and
 * Cloudflare Workers Builds sets WORKERS_CI; anything else builds a plain Node
 * server for `pnpm start`. Set DEPLOY_ADAPTER to vercel, cloudflare or node to
 * override, for example to build for Cloudflare on your own machine.
 */
export function getDeployHost(): DeployHost {
  const override = process.env.DEPLOY_ADAPTER;
  if (override) {
    const host = hosts.find((h) => h === override);
    if (host) return host;
    console.warn(
      `Unknown DEPLOY_ADAPTER "${override}", expected one of: ${hosts.join(", ")}. Detecting the host instead.`
    );
  }
  if (process.env.VERCEL) return "vercel";
  if (process.env.WORKERS_CI) return "cloudflare";
  return "node";
}
