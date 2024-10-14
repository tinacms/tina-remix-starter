// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collections/page.ts
var Page = {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "header",
      label: "Header"
    },
    {
      type: "object",
      name: "logo",
      label: "Logo",
      fields: [
        { type: "image", name: "light", label: "Light Mode Image" },
        { type: "image", name: "dark", label: "Dark Mode Image" },
        { type: "string", name: "alt", label: "Alt Text" }
      ]
    },
    {
      type: "object",
      list: true,
      name: "links",
      label: "Links",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.header
          };
        }
      },
      fields: [
        { type: "string", name: "title" },
        {
          type: "string",
          ui: {
            component: "select"
          },
          name: "icon",
          options: ["lightning", "click", "docs", "discord"]
        },
        { type: "string", name: "url" }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "index") {
        return "/";
      }
      return void 0;
    }
  }
};

// tina/config.ts
var config = defineConfig({
  clientId: process.env.TINA_CLIENT_ID,
  branch: process.env.TINA_BRANCH || // custom branch env override
  process.env.VERCEL_GIT_COMMIT_REF || // Vercel branch env
  process.env.HEAD,
  // Netlify branch env
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
      mediaRoot: ""
    }
  },
  build: {
    publicFolder: "public",
    // The public asset folder for your framework
    outputFolder: "admin"
    // within the public folder
  },
  schema: {
    collections: [Page]
  }
});
var config_default = config;
export {
  config,
  config_default as default
};
