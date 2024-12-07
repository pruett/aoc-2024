export function getSimilarityScore(input: string): number {
  const left: number[] = [];
  const right: number[] = [];

  input
    .split("\n")
    .map((line) => line.split(" "))
    .map((row) => row.filter((item) => !isNaN(parseInt(item, 10))))
    .map((row) => row.map((item) => parseInt(item, 10)))
    .forEach(([l, r]) => {
      left.push(l);
      right.push(r);
    });

  if (left.length !== right.length) {
    throw new Error(
      "Invalid input, the left and right lists should have the same length"
    );
  }

  const listLength = left.length;
  let score = 0;

  for (let i = 0; i < listLength; i++) {
    let occurrences = 0;
    const leftNum = left[i];
    // scan through right list to find number of occurrences of leftNum
    for (let j = 0; j < listLength; j++) {
      if (leftNum === right[j]) {
        occurrences += 1;
      }
    }
    score += occurrences * leftNum;
  }

  return score;
}

const decoder = new TextDecoder("utf-8");
const data = await Deno.readFileSync("./01/part2/input.txt");
const input = decoder.decode(data).trim();

console.log(getSimilarityScore(input));
