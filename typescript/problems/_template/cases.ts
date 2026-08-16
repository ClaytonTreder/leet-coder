import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

// Populate with test cases. Each `input` is the argument list passed to
// `solve`, and `expected` is what it should return.
export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  // { name: "example 1", input: [/* args */], expected: /* result */ },
];
