# 3Sum

**Link:** https://leetcode.com/problems/3sum/

## Description

Given an integer array `nums`, return all the triplets
`[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`,
and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

## Examples

- Input: `nums = [-1,0,1,2,-1,-4]`
  Output: `[[-1,-1,2],[-1,0,1]]`
  Explanation:
  `nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0`.
  `nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0`.
  `nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0`.
  The distinct triplets are `[-1,0,1]` and `[-1,-1,2]`.
  Notice that the order of the output and the order of the triplets does
  not matter.

- Input: `nums = [0,1,1]`
  Output: `[]`
  Explanation: The only possible triplet does not sum up to 0.

- Input: `nums = [0,0,0]`
  Output: `[[0,0,0]]`
  Explanation: The only possible triplet sums up to 0.

## Constraints

- `3 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`

## A note on this repo's tests

LeetCode itself doesn't care about triplet order or the order of elements
within a triplet. This repo's test harness does exact (`toEqual`)
comparison, though, so `cases.ts` bakes in the order produced by the
standard approach: sort `nums` ascending, then for each `i` two-pointer
inward — which yields triplets sorted ascending internally, ordered by
increasing first element. If you solve it with that approach the tests
should just pass; a differently-ordered but still-correct answer would
need its own comparison logic to pass here.

## Suggested `solve` signature

```ts
function solve(nums: number[]): number[][];
```
