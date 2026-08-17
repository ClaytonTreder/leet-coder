# Longest Substring Without Repeating Characters

**Link:** https://leetcode.com/problems/longest-substring-without-repeating-characters/

## Description

Given a string `s`, find the length of the longest substring without
repeating characters.

## Examples

- Input: `s = "abcabcbb"`
  Output: `3`
  Explanation: The answer is `"abc"`, with the length of 3.

- Input: `s = "bbbbb"`
  Output: `1`
  Explanation: The answer is `"b"`, with the length of 1.

- Input: `s = "pwwkew"`
  Output: `3`
  Explanation: The answer is `"wke"`, with the length of 3. Notice that the
  answer must be a substring; `"pwke"` is a subsequence, not a substring.

## Constraints

- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols, and spaces.

## Suggested `solve` signature

```ts
function solve(s: string): number;
```
