import { client } from "../../../../tina/__generated__/client";

interface Params {
  slug: string;
}

export default async function DynamicPage({ params }: { params: Params }) {
  const { slug } = params;
  const { data } = await client.queries.pages({ relativePath: `${slug}.md` });

  if (!data) return <h1>Page Not Found</h1>;

  return (
    <div>
      {/* <h1>{data.page.title}</h1> */}
      <h1>{data.pages.subtitle}</h1>
      <p>{data.pages.body}</p>
    </div>
  );
}
