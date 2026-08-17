import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "example 1", input: ["III"], expected: 3 },
  { name: "example 2", input: ["LVIII"], expected: 58 },
  { name: "example 3", input: ["MCMXCIV"], expected: 1994 },
  { name: "subtractive form four", input: ["IV"], expected: 4 },
  { name: "subtractive form nine", input: ["IX"], expected: 9 },
  { name: "mix of repeats and subtractive forms", input: ["MMMDCCXLIX"], expected: 3749 },
  { name: "single largest symbol", input: ["M"], expected: 1000 },
  { name: "minimum value", input: ["I"], expected: 1 },
  { name: "subtractive form forty", input: ["XL"], expected: 40 },
  { name: "subtractive form ninety", input: ["XC"], expected: 90 },
  { name: "subtractive form four hundred", input: ["CD"], expected: 400 },
  { name: "subtractive form nine hundred", input: ["CM"], expected: 900 },
  { name: "maximum value", input: ["MMMCMXCIX"], expected: 3999 },
];
