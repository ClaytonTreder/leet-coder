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
   exported function is always called `solve`, whatever its signature. Just
   edit the file and write your answer in `solve`'s body; there's no extra
   step to "add" it beyond saving. See [Solutions aren't
   committed](#solutions-arent-committed) below — this file never reaches
   git, so there's no risk in iterating freely.
2. Populate test cases in `problems/valid-parentheses/cases.ts`. This is the
   "section for test cases" — every entry is an `{ input, expected }` pair
   (`input` is the argument list passed to `solve`).
3. Leave `solution.test.ts` alone — it just wires `cases.ts` into Vitest via
   the shared harness in `src/testHarness.ts`.

## Solutions aren't committed

`.gitignore` excludes every `problems/*/solution.ts` (the `_template` copy
source is the one exception). `cases.ts` and `solution.test.ts` are tracked
normally, so the problem statement and its tests live in git history, but
your answer never does — `git status`/`git add` won't see it, and cloning
the repo elsewhere gets you the problems and tests but not the solved code.
That's intentional: this repo exists to practice solving problems, not to
publish spoilers of the answers.

If you ever want to commit a specific solution anyway (e.g. to share one),
it has to be explicit: `git add -f problems/<slug>/solution.ts`.

### Using an agent to add problems

The best split of labor: let an agent scaffold the problem (run `npm run
new`, fill in the doc comment in `solution.ts`, and populate `cases.ts` with
real test cases) but leave `solution.ts`'s `solve` body unimplemented. See
[AGENTS.md](../AGENTS.md) for the exact instructions agents follow — since
solutions aren't meant to be committed anyway, having an agent write one
would just hand you the answer and skip the point of practicing. Solve it
yourself once the scaffolding is in place, then run `npm test -- <slug>`.

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
    solution.ts          # your implementation (export `solve`) — gitignored
    cases.ts               # test case data — edit this most often
    solution.test.ts         # generic runner, rarely touched
src/testHarness.ts    # turns cases.ts entries into individual Vitest tests
scripts/new-problem.mjs  # scaffolds problems/<slug> from _template
```
