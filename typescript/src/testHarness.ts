import { describe, expect, it } from "vitest";

/**
 * One test case for a problem's `solve` function.
 *
 * `input` is the exact argument list `solve` is called with, so it stays
 * type-checked against the solution's real signature.
 */
export interface TestCase<TArgs extends unknown[], TResult> {
  /** Optional label shown in test output. Defaults to the input as JSON. */
  name?: string;
  input: TArgs;
  expected: TResult;
}

/**
 * Turns a list of TestCase entries into real, individually-reported test
 * runs. Problems shouldn't need to touch this — just populate `cases.ts`.
 */
export function runTestCases<TArgs extends unknown[], TResult>(
  label: string,
  fn: (...args: TArgs) => TResult,
  cases: TestCase<TArgs, TResult>[],
): void {
  describe(label, () => {
    if (cases.length === 0) {
      it.skip("no test cases yet — add some to cases.ts", () => {});
      return;
    }

    cases.forEach((testCase, index) => {
      const title = testCase.name ?? `case ${index + 1}: ${JSON.stringify(testCase.input)}`;
      it(title, () => {
        expect(fn(...testCase.input)).toEqual(testCase.expected);
      });
    });
  });
}
