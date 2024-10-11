import type { Collection } from "tinacms";

export const Page: Collection = {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "header",
      label: "Header",
    },
    {
      type: "object",
      name: "logo",
      label: "Logo",
      fields: [
        { type: "image", name: "light", label: "Light Mode Image" },
        { type: "image", name: "dark", label: "Dark Mode Image" },
        { type: "string", name: "alt", label: "Alt Text" },
      ],
    },
    {
      type: "object",
      list: true,
      name: "links",
      label: "Links",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.header,
          };
        },
      },
      fields: [
        { type: "string", name: "title" },
        {
          type: "string",
          ui: {
            component: "select",
          },
          name: "icon",
          options: ["lightning", "click", "docs", "discord"],
        },
        { type: "string", name: "url" },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "index") {
        return "/";
      }
      return undefined;
    },
  },
};
