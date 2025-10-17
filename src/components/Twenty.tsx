import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";
import { mediaSources } from "@/app/constants";
import { getRandomItems } from "@/utils/getRandomItems";

export async function Twenty() {
  const results = await getNotionData({
    filter: {
      and: [
        { property: "Status", select: { does_not_equal: "Finished" } },
        ...mediaSources.map((source) => ({
          property: "Link",
          url: { does_not_contain: source },
        })),
      ],
    },
    sorts: [
      {
        property: "Status",
        direction: "ascending",
      },

      {
        property: "Importance",
        direction: "ascending",
      },
    ],
    limit: false,
  });

  const workingResults = results.filter(
    (r) => r.properties.Status.select?.name === "Working"
  );
  const onDeckResults = results.filter(
    (r) => r.properties.Status.select?.name === "On Deck"
  );

  const randomWorkingResults = getRandomItems(workingResults, 10);
  const randomOnDeckResults = getRandomItems(
    onDeckResults,
    // Ensure full list is at least 20 items long
    Math.max(10, 20 - randomWorkingResults.length)
  );

  return <Links pages={[...randomWorkingResults, ...randomOnDeckResults]} />;
}
