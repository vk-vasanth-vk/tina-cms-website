import Link from "next/link";
import client from "../../../tina/__generated__/client";

export default async function Blog() {
  const posts = await client.queries.postConnection();

  return (
    <div>
      <div className="w-full h-20 border flex items-center justify-center">
        <h1>Blog Post</h1>
      </div>
      <ul>
        {posts.data?.postConnection?.edges?.map(async (post) => {
          const postData = await client.queries.post({
            relativePath: `${post?.node?._sys.filename}.md`,
          });

          return (
            <li key={post?.node?._sys.filename} className="border-b p-4">
              <Link href={`/blog/${post?.node?._sys.filename}`}>
                <h2 className="text-xl font-bold">{postData.data.post.title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
