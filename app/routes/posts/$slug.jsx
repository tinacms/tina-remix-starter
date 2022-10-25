import { useLoaderData } from "@remix-run/react";
import { useTina } from "tinacms/dist/react";

import { Layout } from "~/components/Layout";
import { client } from ".tina/__generated__/client";

export default function Home() {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { props } = useLoaderData();
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout>
      <code>
        <pre
          style={{
            backgroundColor: "lightgray",
          }}
        >
          {JSON.stringify(data.post, null, 2)}
        </pre>
      </code>
    </Layout>
  );
}

export const loader = async ({ params }) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: params.slug + ".md",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
