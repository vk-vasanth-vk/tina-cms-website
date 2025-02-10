import Link from 'next/link';
import { client } from "../../tina/__generated__/client";

export default async function Home() {
  const pagesData = await client.queries.pagesConnection();

  return (
    <>
      <div className="h-20 w-full border flex items-center justify-end">
        <ul className="flex flex-row space-x-14 mr-[90px]">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
          {/* ✅ Fix: Wrap each Link inside its own <li> */}
          {pagesData.data?.pagesConnection?.edges?.map((edge) => (
            edge?.node && (
              <li key={edge.node._sys.filename}>
                <Link href={`/pages/${edge.node._sys.filename}`}>{edge.node.subtitle}</Link>
              </li>
            )
          ))}
          <li>
            <Link href="/admin/index.html">Admin</Link>
          </li>
        </ul>
      </div>
      <div className="h-[500px] flex items-center justify-center">
        <h1>Home Page</h1>
      </div>
    </>
  );
}
