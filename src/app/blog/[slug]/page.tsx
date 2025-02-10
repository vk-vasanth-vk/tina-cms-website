import client from "../../../../tina/__generated__/client";

interface TextNode {
  text: string;
}

interface Block {
  children: TextNode[];
}

interface Body {
  children: Block[];
}

const extractText = (body: Body): string => {
  return body.children.map((block) =>
    block.children.map((textNode) => textNode.text).join("")
  ).join("\n");
};

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await client.queries.post({ relativePath: `${params.slug}.md` });

  // Extract raw text from the body
  const content = extractText(post.data.post.body);

  return (
    <div>
      <h1>{post.data.post.title}</h1>
      <p>{content}</p>
    </div>
  );
}
