# typescript

Problem-solving practice with real test coverage, run via [Vitest](https://vitest.dev).

## Setup

```bash
npm install
```

## Workflow

Add a new problem (creates `problems/<problem-name>/` from the template):

```bash
npm run new -- <problem-name>
```

Then:

1. Implement the solution in `problems/<problem-name>/solution.ts` — the
   exported function is always called `solve`, whatever its signature. Just
   edit the file and write your answer in `solve`'s body; there's no extra
   step to "add" it beyond saving. See [Solutions aren't
   committed](#solutions-arent-committed) below — this file never reaches
   git, so there's no risk in iterating freely.
2. Populate test cases in `problems/<problem>/cases.ts`. This is the
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

### Using an agent to add problems

The best split of labor: let an agent scaffold the problem (run `npm run
new`, write up the problem in the problem's own `README.md`, and populate
`cases.ts` with real test cases) but leave `solution.ts` completely
untouched — not even the doc comment or signature. See
[AGENTS.md](../AGENTS.md) for the exact instructions agents follow — since
solutions aren't meant to be committed anyway, having an agent write one
would just hand you the answer and skip the point of practicing. Once the
scaffolding is in place, copy the title, link, and suggested `solve`
signature from `problems/<problem>/README.md` into `solution.ts` yourself,
solve it, then run `npm test -- <problem>`.

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
  _template/                     # copy source for `npm run new`
  two-sum/                       # worked example
    README.md                    # problem write-up — title, link, examples, constraints (renders on GitHub)
    solution.ts                  # your implementation (export `solve`) — gitignored
    cases.ts                     # test case data — edit this most often
    solution.test.ts             # generic runner, rarely touched
src/testHarness.ts               # turns cases.ts entries into individual Vitest tests
scripts/new-problem.mjs          # scaffolds problems/<problem> from _template
```
