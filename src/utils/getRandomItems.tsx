export function getRandomItems(arr: Array<any>, numItems: number) {
  // Make a copy of the array to avoid modifying the original array
  let arrayCopy = arr.slice();

  // Fisher-Yates (Knuth) Shuffle
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }

  // Return the first `numItems` elements of the shuffled array
  return arrayCopy.slice(0, numItems);
}
