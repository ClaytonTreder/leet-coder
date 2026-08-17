# Longest Common Prefix

**Link:** https://leetcode.com/problems/longest-common-prefix/

## Description

Write a function to find the longest common prefix string amongst an array
of strings.

If there is no common prefix, return an empty string `""`.

## Examples

- Input: `strs = ["flower","flow","flight"]`
  Output: `"fl"`

- Input: `strs = ["dog","racecar","car"]`
  Output: `""`
  Explanation: There is no common prefix among the input strings.

## Constraints

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters.

## Suggested `solve` signature

```ts
function solve(strs: string[]): string;
```
