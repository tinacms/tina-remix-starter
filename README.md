This is a [Tina CMS](https://tina.io/) starter project built with [React Router v7](https://reactrouter.com/), the successor to Remix.

![remix-tinacms.gif](/public/remix-tinacms.gif)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/tinacms/tina-remix-starter)

## Setup

- Fork this repo
- Clone the fork to your local machine.

## Local Development

Install the project's dependencies:

```
pnpm install
```

Run the project locally:

```
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Building the Starter Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```
TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
TINA_BRANCH=<Specify the branch with Tina configured>
```

Build the project:

```bash
pnpm build
```

Then run the app in production mode:

```sh
pnpm start
```

### Checking the build without TinaCloud

`pnpm build-local` builds against local content and does not need TinaCloud credentials. The site it builds reads content from the local Tina server, so use it as a compile check or for a local preview (`tinacms dev -c "pnpm start"`), not for deploying.

## Deploying the Site

The build picks its host from the environment it runs in:

- `VERCEL` is set: builds for [Vercel](https://vercel.com/).
- `WORKERS_CI` is set: builds for [Cloudflare Workers](https://developers.cloudflare.com/workers/) (Workers Builds).
- Otherwise: builds a Node server that you run with `pnpm start`.

To override the detection, set `DEPLOY_ADAPTER` to `vercel`, `cloudflare` or `node`.

In every case, add the `TINA_CLIENT_ID` and `TINA_TOKEN` values from your [app.tina.io](https://app.tina.io) project to the host's environment variables. TinaCMS needs them **while building**, not only at runtime.

### Deploying to Cloudflare

Before your first Cloudflare deploy, add `TINA_CLIENT_ID` and `TINA_TOKEN` as **build variables**: in the Cloudflare dashboard, open your Worker > Settings > Build > Build Variables and Secrets. Worker secrets (under Variables and Secrets) are not visible to the build. Until the build variables exist, the build stops with a message that lists the missing ones. Add them, then retry the build.

`TINA_BRANCH` is optional. When it is empty, TinaCMS uses the branch that Cloudflare builds.

To deploy from your own machine instead:

```bash
DEPLOY_ADAPTER=cloudflare pnpm build && npx wrangler deploy
```

### Deploying to Vercel

Import the repo into Vercel and add the environment variables. No other settings are needed.

### Other hosts

Build with `pnpm build` and run `pnpm start` on any host that runs Node 22 or 24. Deploy these build outputs:

- `build/server`
- `build/client`

Netlify is not supported by this starter.

## Learn More

To learn more about Tina, take a look at the following resources:

- 📖 [React Router docs](https://reactrouter.com/home)
- [Tina Docs](https://tina.io/docs)
- [Getting starter guide](https://tina.io/docs/introduction/using-starter/)

You can check out [Tina Github repository](https://github.com/tinacms/tinacms) - your feedback and contributions are welcome!

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
