import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "example 1", input: [121], expected: true },
  { name: "example 2 (negative)", input: [-121], expected: false },
  { name: "example 3 (trailing zero)", input: [10], expected: false },
  { name: "zero", input: [0], expected: true },
  { name: "single positive digit", input: [7], expected: true },
  { name: "single negative digit", input: [-7], expected: false },
  { name: "odd-length palindrome", input: [12321], expected: true },
  { name: "even-length palindrome", input: [1221], expected: true },
  { name: "not a palindrome", input: [12345], expected: false },
  { name: "trailing zero, not zero itself", input: [100], expected: false },
  { name: "larger non-palindrome", input: [1000021], expected: false },
  { name: "INT_MAX is not a palindrome", input: [2147483647], expected: false },
  { name: "large palindrome", input: [1000000001], expected: true },
];
