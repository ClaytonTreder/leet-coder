import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "classic example one", input: ["A man, a plan, a canal: Panama"], expected: true },
  { name: "classic example two", input: ["race a car"], expected: false },
  { name: "single space becomes empty string", input: [" "], expected: true },
  { name: "empty string", input: [""], expected: true },
  { name: "single character", input: ["a"], expected: true },
  { name: "single digit", input: ["7"], expected: true },
  { name: "two identical letters", input: ["aa"], expected: true },
  { name: "two distinct letters", input: ["ab"], expected: false },
  { name: "mixed case palindrome", input: ["Aa"], expected: true },
  { name: "punctuation only", input: ["...,,,---"], expected: true },
  { name: "numeric palindrome", input: ["121"], expected: true },
  { name: "numeric non-palindrome", input: ["123"], expected: false },
  { name: "alphanumeric palindrome", input: ["0P"], expected: false },
  { name: "not a palindrome after stripping", input: ["was it a car or a cat I saw?"], expected: true },
  { name: "long non-palindrome sentence", input: ["Was it a car or a cat I ate?"], expected: false },
];
