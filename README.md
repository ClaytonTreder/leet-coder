![Git Hub Actions (TS)](https://github.com/ClaytonTreder/leet-coder/actions/workflows/test.ts.yml/badge.svg)

## Language Tests
![TS Passing Problems](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/ClaytonTreder/af4877d519a5dd3b94cbee51330ed088/raw/leet-coder-ts-badge.json)


# leet-coder

A local, no-UI environment for practicing coding problems with real automated
tests instead of eyeballing output.

Each language lives in its own top-level folder with its own tooling. Start
here with [typescript/](typescript/), and add sibling folders (e.g.
`python/`, `go/`) the same way as needed — nothing here assumes only one
language.

Solutions are never checked into this repo — only the problem scaffolding
and its test cases are.

If you ever want to commit a specific solution anyway (e.g. to share one),
make a new branch and it must be specifically added:
 `git add -f problems/<problem>/solution.*`. These branches will not be 
 checked into the main branch.

## Layout

```
leet-coder/
  <language>/                 # a language folder — self-contained, own package manager/config
    problems/
      _template/              # copy this to start a new problem
      <problem>/              # example problem
        README.md             # problem write-up — title, link, examples, constraints (renders on GitHub)
        solution              # your implementation — gitignored
        cases                 # test case data — populate this per problem
        solution.test.ts      # wires cases.ts into the test runner (rarely edited)
    src/testHarness.ts        # shared helper that turns `cases` into test cases
    scripts/new-problem.mjs   # scaffolds a new problems/<problem> folder
```

## Adding a new language folder later

There's no shared build system tying languages together on purpose — each
language folder should be runnable on its own with that language's normal
tooling (e.g. `python/` with `pytest`, `go/` with `go test`). Mirror the
shape used in `typescript/`:

- `problems/<problem>/` per problem, containing a solution file and its test
  cases
- a `_template` problem folder to copy from
- whatever native test runner fits the language
- a `.gitignore` rule that excludes each problem's solution file (but not
  its `_template` copy or its test cases) — see [Solutions aren't
  committed](typescript/README.md#solutions-arent-committed)

## Solution branches

`solutions/*` branches should be branched off `solutions/main`. The main
solution branch does not have the gitignore solutions check attached. If
new problems/languages are added to `solutions/main` will pull in `main`
and any other solution folder can have that pulled into it as well.

## Quick start

```bash
cd typescript
npm install
npm test
```
