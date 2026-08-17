import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "example 1", input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
  { name: "example 2 (minimum length)", input: [[1, 1]], expected: 1 },
  { name: "tall ends, short middle", input: [[4, 3, 2, 1, 4]], expected: 16 },
  { name: "short-tall-short", input: [[1, 2, 1]], expected: 2 },
  { name: "best pair is adjacent, not the extremes", input: [[1, 2, 4, 3]], expected: 4 },
  { name: "zero height on one end", input: [[0, 2]], expected: 0 },
  { name: "zero height on the other end", input: [[2, 0]], expected: 0 },
  { name: "all zero heights", input: [[0, 0]], expected: 0 },
  { name: "strictly increasing heights", input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], expected: 25 },
  { name: "equal max heights at both ends", input: [[10000, 10000]], expected: 10000 },
];
