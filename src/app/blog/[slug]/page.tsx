import client from "../../../../tina/__generated__/client";

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await client.queries.post({ relativePath: `${params.slug}.md` });

  return (
    <div>
      <h1>{post.data.post.title}</h1>
      {/* <p><strong>By {post.data.post.author}</strong> | {new Date(post.data.post.date).toDateString()}</p> */}
      <div dangerouslySetInnerHTML={{ __html: post.data.post.body }} />
    </div>
  );
}
