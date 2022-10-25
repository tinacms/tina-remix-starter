const {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Links />
        <title>Tina App</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
