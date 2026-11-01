/**
 * Runs before `pnpm build`. On Cloudflare Workers Builds (WORKERS_CI is set),
 * fail early with a clear message when the TinaCloud build variables are
 * missing, instead of letting `tinacms build` fail with a generic error.
 * Other hosts are not checked.
 */
if (process.env.WORKERS_CI) {
  const missing = ["TINA_CLIENT_ID", "TINA_TOKEN"].filter(
    (name) => !process.env[name]
  );
  if (missing.length > 0) {
    console.error(
      [
        `Missing TinaCloud build variables: ${missing.join(", ")}.`,
        "",
        "TinaCMS needs these while building, not only at runtime.",
        "In the Cloudflare dashboard, open your Worker > Settings > Build >",
        "Build Variables and Secrets, add TINA_CLIENT_ID and TINA_TOKEN",
        "(from your project at app.tina.io), then retry the build.",
        "Worker secrets set under Variables and Secrets are not visible to the build.",
      ].join("\n")
    );
    process.exit(1);
  }
}
