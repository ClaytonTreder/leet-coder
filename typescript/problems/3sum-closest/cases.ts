import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "example 1", input: [[-1, 2, 1, -4], 1], expected: 2 },
  { name: "example 2", input: [[0, 0, 0], 1], expected: 0 },
  { name: "closest sum is negative distance from target", input: [[1, 1, 1, 0], -100], expected: 2 },
  { name: "exact match not possible, nearest overshoot", input: [[1, 2, 4, 8, 16, 32, 64, 128], 82], expected: 82 },
  { name: "symmetric array, target zero", input: [[-3, -2, -1, 0, 1, 2, 3], 0], expected: 0 },
  { name: "small mixed array", input: [[0, 2, 1, -3], 1], expected: 0 },
  { name: "minimum length array", input: [[1, 1, -1], 0], expected: 1 },
];
