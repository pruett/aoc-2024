import { assertEquals } from "@std/assert";
import { getSimilarityScore } from "./main.ts";

const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

Deno.test("calculates similarity score correctly", function () {
  const result = getSimilarityScore(testInput);
  const expected = 31;
  assertEquals(result, expected);
});
