import { HomePage } from "../../components/homePage";
import client from "../../tina/__generated__/client";
import Link from 'next/link';

export default async function Home() {
  // const res = await client.queries.pages({ relativePath: "homePage.json" });
  // return <HomePage data={res.data} query={res.query} variables={res.variables} />;

  return(
    <>
      <div className="h-20 w-full border flex items-center justify-end">
        <ul className="flex flex-row space-x-14 mr-[90px]">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
          <li>
            <Link href="/admin/index.html">Admin</Link>
          </li>
        </ul>
      </div>
      <div className="h-[500px] flex items-center justify-center">
        <h1>Home Page</h1>
      </div>
    </>
  )
}