import { defineConfig } from "tinacms";
import Page from "./collections/page";
import Post from "./collections/post";

export const config = defineConfig({
  clientId: process.env.TINA_CLIENT_ID,
  branch:
    process.env.TINA_BRANCH || // custom branch env override
    process.env.VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [Page, Post],
  },
});

export default config;
