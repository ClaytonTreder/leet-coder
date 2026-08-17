import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "example 1", input: [["flower", "flow", "flight"]], expected: "fl" },
  { name: "example 2 (no common prefix)", input: [["dog", "racecar", "car"]], expected: "" },
  { name: "single string returns itself", input: [["single"]], expected: "single" },
  { name: "empty string in the list forces empty prefix", input: [["", "b"]], expected: "" },
  { name: "all strings identical", input: [["same", "same", "same"]], expected: "same" },
  {
    name: "long common prefix across several words",
    input: [["interspecies", "interstellar", "interstate"]],
    expected: "inters",
  },
  { name: "one letter string", input: [["a"]], expected: "a" },
  { name: "shortest string is the whole prefix", input: [["ab", "a"]], expected: "a" },
  { name: "each string extends the last", input: [["abc", "abcd", "abcde"]], expected: "abc" },
];
