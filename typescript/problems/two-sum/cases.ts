import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "example 1", input: [[2, 7, 11, 15], 9], expected: [0, 1] },
  { name: "example 2", input: [[3, 2, 4], 6], expected: [1, 2] },
  { name: "duplicate values", input: [[3, 3], 6], expected: [0, 1] },
];
