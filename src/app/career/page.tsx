import Link from "next/link";
import client from "../../../tina/__generated__/client";

export default async function Career() {
  // Fetch pages collection instead of posts
  const pages = await client.queries.pagesConnection();

  // Fetch all page data in parallel
  const fullPages = await Promise.all(
    pages.data?.pagesConnection?.edges?.map(async (page) => {
      const pageData = await client.queries.pages({
        relativePath: `${page?.node?._sys.filename}.md`,
      });

      return {
        filename: page?.node?._sys.filename,
        title: pageData.data.pages.subtitle
        // title: pageData.data.pages.title,
        // body: pageData.data.pages.body, // If needed later
      };
    }) || []
  );

  return (
    <div>
      <div className="w-full h-20 border flex items-center justify-center">
        <h1>Career Page</h1>
      </div>
      <ul>
        {fullPages.map((page) => (
          <li key={page.filename} className="border-b p-4">
            <Link href={`/pages/${page.filename}`}>
              <h2 className="text-xl font-bold">{page.filename}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
