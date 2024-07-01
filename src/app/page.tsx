import Image from "next/image";
import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";

export default async function Home() {
  const results = await getNotionData();
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-4">
      <section>
        <h1 className="text-xl underline">
          <a href="https://www.notion.so/mccambley/7f8031e04775419f95253a87b6882cae?v=adc32b420cf24186a970ce0305bfbae1">
            Reading List
          </a>
        </h1>
        <p>~</p>
        <Links pages={results} />
      </section>
    </main>
  );
}
