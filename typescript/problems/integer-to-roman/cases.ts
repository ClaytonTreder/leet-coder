import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "example 1", input: [3749], expected: "MMMDCCXLIX" },
  { name: "example 2", input: [58], expected: "LVIII" },
  { name: "example 3", input: [1994], expected: "MCMXCIV" },
  { name: "minimum value", input: [1], expected: "I" },
  { name: "maximum value", input: [3999], expected: "MMMCMXCIX" },
  { name: "subtractive form four", input: [4], expected: "IV" },
  { name: "subtractive form nine", input: [9], expected: "IX" },
  { name: "subtractive form forty", input: [40], expected: "XL" },
  { name: "subtractive form ninety", input: [90], expected: "XC" },
  { name: "subtractive form four hundred", input: [400], expected: "CD" },
  { name: "subtractive form nine hundred", input: [900], expected: "CM" },
  { name: "repeated symbol up to three times", input: [3], expected: "III" },
  { name: "mix of repeats and subtractive forms", input: [3888], expected: "MMMDCCCLXXXVIII" },
];
