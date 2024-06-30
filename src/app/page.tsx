import Image from "next/image";
import { getNotionData } from "@/utils/getNotionData";

export default async function Home() {
  const { results } = await getNotionData();
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-4">
      <section>
        <h1 className="text-xl underline">
          <a href="https://www.notion.so/mccambley/7f8031e04775419f95253a87b6882cae?v=adc32b420cf24186a970ce0305bfbae1">
            Reading List
          </a>
        </h1>
        <p>~</p>

        <ul>
          {results.map((item) => (
            <li key={item.id}>
              <a className="underline" href={item.properties.Link.url || ""}>
                {item.properties.Name.title[0].plain_text}
              </a>
              <p className="italic">
                <a href={item.url || ""}>
                  {new Date(item.created_time).toDateString()}
                </a>
              </p>
              -
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
