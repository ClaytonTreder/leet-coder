import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "example 1 (no wildcard, partial match rejected)", input: ["aa", "a"], expected: false },
  { name: "example 2 (star repeats preceding char)", input: ["aa", "a*"], expected: true },
  { name: "example 3 (dot-star matches anything)", input: ["ab", ".*"], expected: true },
  { name: "star can match zero occurrences", input: ["aab", "c*a*b"], expected: true },
  { name: "mixed dot and star, no match", input: ["mississippi", "mis*is*p*."], expected: false },
  { name: "mixed dot and star, match", input: ["mississippi", "mis*ip*."], expected: true },
  { name: "empty string with trailing star pattern", input: ["", "a*"], expected: true },
  { name: "empty string with dot-star pattern", input: ["", ".*"], expected: true },
  { name: "non-empty string vs empty pattern", input: ["a", ""], expected: false },
  { name: "both empty", input: ["", ""], expected: true },
  { name: "exact literal match", input: ["abc", "abc"], expected: true },
  { name: "dot substitutes single character", input: ["abc", "a.c"], expected: true },
  { name: "star matches multiple repeats then literal", input: ["aaa", "a*a"], expected: true },
  { name: "chained stars covering everything", input: ["aaa", "ab*a*c*a"], expected: true },
  { name: "dot-star fails to cover trailing literal", input: ["ab", ".*c"], expected: false },
  { name: "star after single leading char matches zero", input: ["a", "ab*"], expected: true },
];
