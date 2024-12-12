import { assertEquals } from "@std/assert";
import { scan } from "./main.ts";

Deno.test("find magic word", () => {
  const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;
  const actual = scan(input);
  const expected = 18;
  assertEquals(actual, expected);
});

Deno.test("number of safe reports::puzzle", async () => {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFileSync("./04/part1/input.txt");
  const input = decoder.decode(data).trim();

  const actual = scan(input);
  const expected = 580;
  assertEquals(actual, expected);
});
