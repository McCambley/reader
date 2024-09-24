import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";

type ArrayOfObjects = ({
  [key: string]: string;
} | null)[];

interface Counts {
  [key: string]: number;
}

function createFrequencyObject(arrayOfObjects: ArrayOfObjects): Counts {
  const counts: Counts = {};
  for (const object of arrayOfObjects) {
    if (!object) continue;
    if (counts[object.name]) {
      counts[object.name]++;
    } else {
      counts[object.name] = 1;
    }
    counts["total"];
  }
  return counts;
}

function createFrequencyObjects(
  keys: string[],
  data: any
): { [key: string]: Counts } {
  const frequencyObject: { [key: string]: Counts } = {};
  for (const key of keys) {
    frequencyObject[key] = createFrequencyObject(
      data.map((r: any) => r.properties[key].select)
    );
  }
  return frequencyObject;
}

export async function Data() {
  const results = await getNotionData({ limit: false });

  const totalCount = results.length;
  const counts = createFrequencyObjects(
    ["Status", "Importance", "Facet", "Type", "Source"],
    results
  );

  return Object.keys(counts).map((property, index) => (
    <>
      <p className="mb-1">{property}</p>
      <table key={index} className="mb-3">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>#</td>
            <td>%</td>
          </tr>
          {Object.keys(counts[property])
            .sort((a, b) => {
              if (counts[property][a] < counts[property][b]) {
                return 1;
              } else if (counts[property][a] > counts[property][b]) {
                return -1;
              }
              return 0;
            })
            .map((key, index) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{counts[property][key]}</td>
                <td>
                  {Math.round((counts[property][key] / totalCount) * 10000) /
                    100}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  ));
}
