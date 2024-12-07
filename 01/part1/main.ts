const decoder = new TextDecoder("utf-8");
const data = await Deno.readFileSync("./01/part1/input.txt");
const puzzleInput = decoder.decode(data);
console.log(puzzleInput);

export const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

export function getDistance(input: string): number {
  let left: number[] = [];
  let right: number[] = [];

  input
    .split("\n")
    .map((line) => line.split(" "))
    .map((row) => row.filter((item) => !isNaN(parseInt(item, 10))))
    .map((row) => row.map((item) => parseInt(item, 10)))
    .forEach(([l, r]) => {
      left.push(l);
      right.push(r);
    });

  let sortedLeft = left.sort((a, b) => a - b);
  let sortedRight = right.sort((a, b) => a - b);

  // console.log(sortedLeft.slice(0, 5));
  // console.log(sortedRight.slice(0, 5));
  if (sortedLeft.length !== sortedRight.length) {
    throw new Error(
      "Invalid input, left and right should have the same length"
    );
  }

  let distance = 0;

  for (let i = 0; i < sortedLeft.length; i++) {
    let diff = Math.abs(sortedLeft[i] - sortedRight[i]);
    if (isNaN(diff)) {
      throw new Error(
        `isNaN found: ${i} - left: ${sortedLeft[i]}, right: ${sortedRight[i]}`
      );
    }
    // console.log(sortedLeft[i], sortedRight[i], diff);
    distance = distance + diff;
  }

  return distance;
}

console.log(getDistance(puzzleInput.trim()));
