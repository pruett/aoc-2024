import { assertEquals } from "@std/assert";
import { getDistance, testInput } from "./main.ts";

Deno.test(function getDistanceTest() {
  assertEquals(getDistance(testInput), 11);
});
