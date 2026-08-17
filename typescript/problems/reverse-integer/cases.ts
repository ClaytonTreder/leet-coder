import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "example 1", input: [123], expected: 321 },
  { name: "example 2 (negative)", input: [-123], expected: -321 },
  { name: "example 3 (trailing zero dropped)", input: [120], expected: 21 },
  { name: "zero", input: [0], expected: 0 },
  { name: "single positive digit", input: [5], expected: 5 },
  { name: "single negative digit", input: [-8], expected: -8 },
  { name: "positive overflow returns 0", input: [1534236469], expected: 0 },
  { name: "INT_MIN reversed overflows, returns 0", input: [-2147483648], expected: 0 },
  { name: "INT_MAX reversed overflows, returns 0", input: [2147483647], expected: 0 },
  { name: "leading zeros after reversal are dropped", input: [100], expected: 1 },
  { name: "negative leading zeros after reversal are dropped", input: [-100], expected: -1 },
  { name: "large value that still overflows", input: [1000000003], expected: 0 },
];
