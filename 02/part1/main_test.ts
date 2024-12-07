import { assertEquals } from "@std/assert";
import { getNumberOfSafeReport } from "./main.ts";

Deno.test("number of safe reports::example", () => {
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
  const actual = getNumberOfSafeReport(input);
  const expected = 2;
  assertEquals(actual, expected);
});

Deno.test("number of safe reports::puzzle", async () => {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFileSync("./02/part1/input.txt");
  const input = decoder.decode(data).trim();

  const actual = getNumberOfSafeReport(input);
  const expected = 580;
  assertEquals(actual, expected);
});
