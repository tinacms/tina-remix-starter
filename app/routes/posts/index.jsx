import { Link, useLoaderData } from "@remix-run/react";
import { useTina } from "tinacms/dist/react";

import { Layout } from "~/components/Layout";
import { client } from ".tina/__generated__/client";

export default function PostList() {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { props } = useLoaderData();
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const postsList = data.postConnection.edges;
  return (
    <Layout>
      <h1>Posts</h1>
      <div>
        {postsList.map((post) => (
          <div key={post.node.id}>
            <Link to={`/posts/${post.node._sys.filename}`}>
              {post.node._sys.filename}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const loader = async () => {
  const { data, query, variables } = await client.queries.postConnection();

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
