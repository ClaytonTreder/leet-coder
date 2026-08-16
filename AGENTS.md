# AGENTS.md

Instructions for AI coding agents working in this repo (Claude Code, Codex
CLI, Cursor, Aider, etc.). See also the human-facing
[README.md](README.md) and [typescript/README.md](typescript/README.md).

## Adding a new problem — don't write the solution

This repo exists so a human can practice solving problems with real test
coverage. When asked to add/scaffold a LeetCode problem — however it's
phrased ("add X", "scaffold X", "set up the X problem", "create X") — follow
this sequence and stop before implementing anything:

1. From `typescript/`, run:
   ```bash
   npm run new -- <slug>
   ```
   (kebab-case, e.g. `valid-parentheses`). This copies `problems/_template/`
   to `problems/<slug>/`.
2. In `problems/<slug>/solution.ts`, fill in only the doc comment: the
   problem title, the `https://leetcode.com/problems/<slug>/` link, and a
   short paraphrase of the description/constraints. You may update `solve`'s
   signature/types to match the problem if they're unambiguous from the
   prompt (e.g. `solve(nums: number[], target: number): number[]`), but
   leave the body as the template's `throw new Error("Not implemented")`
   stub. **Never fill in the algorithm.**
3. In `problems/<slug>/cases.ts`, populate real test cases — the examples
   from the problem statement plus a couple of edge cases. This is fine to
   fill in fully: cases describe what the answer should be, not how to
   compute it.
4. In `problems/<slug>/solution.test.ts`, replace `<title>` in the
   `runTestCases(...)` call with the problem's title.
5. Run `npm run typecheck` to confirm the stub compiles. Don't run
   `npm test` expecting it to pass — the stub throws by design, and that's
   correct.

**Exception:** if the user explicitly asks you to *solve* or *implement* a
specific problem (not just add/scaffold it), do that. The restriction above
is about not defaulting to a full solution when only scaffolding was asked
for.

## Keeping agents off `solution.ts` at the tool level

The rule above is a convention — honored by whatever agent reads this file,
but not technically enforced. If you want a hard guarantee instead of a
request, Claude Code supports blocking a specific tool+path combination via
`permissions.deny` in `.claude/settings.json`:

```jsonc
{
  "permissions": {
    "deny": [
      "Edit(typescript/problems/*/solution.ts)",
      "Write(typescript/problems/*/solution.ts)"
    ]
  }
}
```

This is **not enabled by default** in this repo — it would also block an
agent from helping you with a solution.ts on request, e.g. debugging a
failing case. Add it yourself (or ask your agent to) if you want that
tradeoff. Other tools have comparable mechanisms under different names
(Cursor: `.cursorignore`; Aider: `.aiderignore` / read-only mode) — those
tend to exclude a path from context entirely rather than just blocking
writes, so check the tool's docs before relying on one for this exact
behavior.
