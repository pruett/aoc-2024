import { assertEquals } from "@std/assert";
import { computeInstructions } from "./main.ts";

Deno.test("analyze instructional sequence", () => {
  const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
  const actual = computeInstructions(input);
  const expected = 161;
  assertEquals(actual, expected);
});

Deno.test("number of safe reports::puzzle", async () => {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFileSync("./03/part1/input.txt");
  const input = decoder.decode(data).trim();

  const actual = computeInstructions(input);
  const expected = 580;
  assertEquals(actual, expected);
});
