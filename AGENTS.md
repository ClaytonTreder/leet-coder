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

The rule above is a convention, and two things reinforce it:

1. **A comment in the file itself.** `problems/_template/solution.ts` (and
   every `solution.ts` scaffolded from it) starts with an `// AGENTS: do not
   implement ...` line above the doc comment. `scripts/new-problem.mjs`
   copies the template verbatim, so this propagates to every new problem
   automatically. This is a request, not an enforcement — it only works on
   agents that read files before editing them.
2. **A hard block for Claude Code**, via `permissions.deny` in
   [.claude/settings.json](.claude/settings.json):

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

   This **is enabled in this repo**. It blocks Claude Code from editing or
   writing any `problems/*/solution.ts` outright, including on explicit
   request (e.g. "fix my failing case") — the exception in this file's
   opening section no longer applies for Claude Code specifically once this
   is in place. If you want an agent's help debugging a solution despite the
   block, remove or loosen the deny rule for that session, or paste the
   relevant code into the conversation directly instead of asking the agent
   to open/edit the file.

3. **Ignore files for other tools**, each with the same
   `typescript/problems/*/solution.ts` pattern (`.gitignore` syntax) at the
   repo root. Strength varies by tool — an ignore file usually keeps a path
   out of automatic context/indexing, not a hard write-block like Claude
   Code's `permissions.deny`:
   - [.cursorignore](.cursorignore) — Cursor. Blocks both indexing and
     `@`-mention reads/edits; the strongest of this group.
   - [.codeiumignore](.codeiumignore) — Windsurf / Cascade. Blocks viewing,
     editing, and creation of matching paths.
   - [.aiderignore](.aiderignore) — Aider. Excludes from the repo map /
     auto-context, but `/add`-ing the file explicitly still works.
   - [.clineignore](.clineignore) — Cline. Filters auto-loaded context only
     (explicit `@` mentions or shell commands can still reach the file), and
     Cline has flagged this mechanism for upstream deprecation, so treat it
     as best-effort.

   Two tools named at the top of this file have **no file-based option**, so
   only the comment convention (point 1) applies to them:
   - **Codex CLI** has no ignore-file mechanism as of this writing (it's an
     open feature request upstream) — it relies on reading the `// AGENTS:`
     comment and this file.
   - **GitHub Copilot**'s equivalent, Content Exclusion, is Business/
     Enterprise-only and configured in GitHub's web UI (repo or org Settings
     → Copilot → Content exclusion), not a file you can commit — so there's
     nothing to add here for it.

When adding a new language folder or renaming `problems/`, update the
pattern in all of these places together: `.gitignore`,
`.claude/settings.json`, `.cursorignore`, `.codeiumignore`, `.aiderignore`,
and `.clineignore`.
