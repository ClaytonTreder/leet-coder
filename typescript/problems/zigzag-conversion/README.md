# ZigZag Conversion

**Link:** https://leetcode.com/problems/zigzag-conversion/

## Description

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given
number of rows like this:

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`.

Write the code that will take a string and make this conversion given a
number of rows.

## Examples

- Input: `s = "PAYPALISHIRING", numRows = 3`
  Output: `"PAHNAPLSIIGYIR"`

- Input: `s = "PAYPALISHIRING", numRows = 4`
  Output: `"PINALSIGYAHRPI"`
  Explanation:
  ```
  P     I    N
  A   L S  I G
  Y A   H R
  P     I
  ```

- Input: `s = "A", numRows = 1`
  Output: `"A"`

## Constraints

- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
- `1 <= numRows <= 1000`

## Suggested `solve` signature

```ts
function solve(s: string, numRows: number): string;
```
