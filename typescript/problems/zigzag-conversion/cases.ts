import type { TestCase } from "../../src/testHarness";
import type { solve } from "./solution";

export const cases: TestCase<Parameters<typeof solve>, ReturnType<typeof solve>>[] = [
  { name: "example 1", input: ["PAYPALISHIRING", 3], expected: "PAHNAPLSIIGYIR" },
  { name: "example 2", input: ["PAYPALISHIRING", 4], expected: "PINALSIGYAHRPI" },
  { name: "single row is unchanged", input: ["A", 1], expected: "A" },
  { name: "single row longer string is unchanged", input: ["ABCDEFGHIJ", 1], expected: "ABCDEFGHIJ" },
  { name: "empty string", input: ["", 3], expected: "" },
  { name: "two-char string with one row", input: ["AB", 1], expected: "AB" },
  { name: "numRows exceeds string length", input: ["AB", 3], expected: "AB" },
  { name: "numRows equals string length", input: ["PAYPALISHIRING", 14], expected: "PAYPALISHIRING" },
  { name: "numRows of 1 always returns original", input: ["PAYPALISHIRING", 1], expected: "PAYPALISHIRING" },
  { name: "two rows splits into odd/even indices", input: ["PAYPALISHIRING", 2], expected: "PYAIHRNAPLSIIG" },
  { name: "two-row two-char string", input: ["AB", 2], expected: "AB" },
  { name: "no full down-up cycle completes", input: ["ABCDE", 4], expected: "ABCED" },
];
