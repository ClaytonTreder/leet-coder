# leet-coder

A local, no-UI environment for practicing coding problems with real automated
tests instead of eyeballing output.

Each language lives in its own top-level folder with its own tooling. Start
here with [typescript/](typescript/), and add sibling folders (e.g.
`python/`, `go/`) the same way as needed — nothing here assumes only one
language.

Solutions are never checked into this repo — only the problem scaffolding
and its test cases are. See [Solutions aren't
committed](typescript/README.md#solutions-arent-committed) in the
TypeScript README for the mechanics and how it applies to agent-assisted
workflows.

## Layout

```
leet-coder/
  typescript/          # a language folder — self-contained, own package manager/config
    problems/
      _template/        # copy this to start a new problem
      two-sum/           # example problem
        solution.ts       # your implementation — gitignored
        cases.ts           # test case data — populate this per problem
        solution.test.ts    # wires cases.ts into the test runner (rarely edited)
    src/testHarness.ts    # shared helper that turns `cases` into test cases
    scripts/new-problem.mjs # scaffolds a new problems/<slug> folder
```

## Adding a new language folder later

There's no shared build system tying languages together on purpose — each
language folder should be runnable on its own with that language's normal
tooling (e.g. `python/` with `pytest`, `go/` with `go test`). Mirror the
shape used in `typescript/`:

- `problems/<slug>/` per problem, containing a solution file and its test
  cases
- a `_template` problem folder to copy from
- whatever native test runner fits the language
- a `.gitignore` rule that excludes each problem's solution file (but not
  its `_template` copy or its test cases) — see [Solutions aren't
  committed](typescript/README.md#solutions-arent-committed)

## Quick start

```bash
cd typescript
npm install
npm test
```

See [typescript/README.md](typescript/README.md) for how to add problems.
