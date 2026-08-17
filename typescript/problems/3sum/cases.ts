import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

// Expected triplets assume the standard sort + two-pointer approach: sort
// `nums` ascending, then scan inward per `i`. That yields each triplet
// sorted ascending internally, and triplets ordered by increasing first
// element — see the README's "A note on this repo's tests".
export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  {
    name: "example 1",
    input: [[-1, 0, 1, 2, -1, -4]],
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  { name: "example 2 (no valid triplet)", input: [[0, 1, 1]], expected: [] },
  { name: "example 3 (all zeros)", input: [[0, 0, 0]], expected: [[0, 0, 0]] },
  { name: "all positive, no triplet sums to zero", input: [[1, 2, 3]], expected: [] },
  { name: "all negative, no triplet sums to zero", input: [[-1, -2, -3]], expected: [] },
  { name: "duplicates collapse to one triplet", input: [[-2, 0, 0, 2, 2]], expected: [[-2, 0, 2]] },
  { name: "extra zeros still yield one triplet", input: [[0, 0, 0, 0]], expected: [[0, 0, 0]] },
  { name: "exactly three elements that sum to zero", input: [[3, -2, -1]], expected: [[-2, -1, 3]] },
  {
    name: "larger mixed array with several distinct triplets",
    input: [[-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]],
    expected: [
      [-4, -2, 6],
      [-4, 0, 4],
      [-4, 1, 3],
      [-4, 2, 2],
      [-2, -2, 4],
      [-2, 0, 2],
    ],
  },
];
