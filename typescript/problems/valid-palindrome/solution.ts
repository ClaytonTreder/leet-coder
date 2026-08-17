// AGENTS: do not implement `solve` below — scaffold only (doc comment,
// signature, cases.ts). See AGENTS.md § "Adding a new problem". Claude Code
// additionally blocks Edit/Write on this path via .claude/settings.json;
// other tools should honor this comment directly.

const regex = /[^a-zA-Z0-9]/g;

export function solve(s: string): boolean {
  s = s.replace(regex, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const lChar = s[left]!;
    const rChar = s[right]!;

    if (lChar != rChar) return false;

    left++;
    right--;
  }

  return true;
}
