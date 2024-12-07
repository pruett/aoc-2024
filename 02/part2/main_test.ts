import { assertEquals } from "@std/assert";
import { getNumberOfSafeReports } from "./main.ts";

Deno.test("number of safe reports::example", () => {
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
  const actual = getNumberOfSafeReports(input);
  const expected = 4;
  assertEquals(actual, expected);
});

// Deno.test("number of safe reports::puzzle", async () => {
//   const decoder = new TextDecoder("utf-8");
//   const data = await Deno.readFileSync("./02/part2/input.txt");
//   const input = decoder.decode(data).trim();

//   const actual = getNumberOfSafeReport(input);
//   const notExpected = 605;
//   assertNotEquals(actual, notExpected);
// });
