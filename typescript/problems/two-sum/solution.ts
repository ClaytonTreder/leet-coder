// AGENTS: do not implement `solve` below — see AGENTS.md.
/**
 * Problem: Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers `nums` and an integer `target`, return the
 * indices of the two numbers that add up to `target`. Each input has
 * exactly one solution, and the same element may not be used twice. The
 * two indices may be returned in any order.
 */
export function solve(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;

    if (map.has(target - num)) {
      return [map.get(target - num)!, i];
    }
    map.set(num, i);
  }

  throw new Error("Solution not found");
}
