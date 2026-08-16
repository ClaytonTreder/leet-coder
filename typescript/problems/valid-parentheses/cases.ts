import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "single pair", input: ["()"], expected: true },
  { name: "multiple pair types", input: ["()[]{}"], expected: true },
  { name: "mismatched types", input: ["(]"], expected: false },
  { name: "nested", input: ["{[]}"], expected: true },
  { name: "wrong close order", input: ["(]"], expected: false },
  { name: "closes before opens", input: ["([)]"], expected: false },
  { name: "unclosed opener", input: ["((("], expected: false },
  { name: "unmatched closer", input: [")"], expected: false },
  { name: "empty string", input: [""], expected: true },
];
