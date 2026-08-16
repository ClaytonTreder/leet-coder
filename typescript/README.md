# typescript

Problem-solving practice with real test coverage, run via [Vitest](https://vitest.dev).

## Setup

```bash
npm install
```

## Workflow

Add a new problem (creates `problems/<slug>/` from the template):

```bash
npm run new -- valid-parentheses
```

Then:

1. Implement the problem in `problems/valid-parentheses/solution.ts` — the
   exported function is always called `solve`, whatever its signature.
2. Populate test cases in `problems/valid-parentheses/cases.ts`. This is the
   "section for test cases" — every entry is an `{ input, expected }` pair
   (`input` is the argument list passed to `solve`).
3. Leave `solution.test.ts` alone — it just wires `cases.ts` into Vitest via
   the shared harness in `src/testHarness.ts`.

## Running tests

```bash
npm test                    # run every problem once
npm test -- valid-parentheses  # run just one problem (Vitest filename filter)
npm run test:watch          # rerun on save
npm run typecheck           # tsc --noEmit, no test execution
```

## Layout

```
problems/
  _template/          # copy source for `npm run new`
  two-sum/             # worked example
    solution.ts          # your implementation (export `solve`)
    cases.ts               # test case data — edit this most often
    solution.test.ts         # generic runner, rarely touched
src/testHarness.ts    # turns cases.ts entries into individual Vitest tests
scripts/new-problem.mjs  # scaffolds problems/<slug> from _template
```
