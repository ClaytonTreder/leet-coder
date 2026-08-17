// AGENTS: do not implement `solve` below — scaffold only (doc comment,
// signature, cases.ts). See AGENTS.md § "Adding a new problem". Claude Code
// additionally blocks Edit/Write on this path via .claude/settings.json;
// other tools should honor this comment directly.

export function solve(s: string): number {
  let left = 0;

  const map: Map<string, number> = new Map<string, number>();
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const rChar = s[i]!;

    if (map.has(rChar)) {
      left = Math.max(left, map.get(rChar)! + 1);
      map.delete(rChar);
    }
    map.set(rChar, i);
    result = Math.max(result, i - left + 1);
  }

  return result;
}
