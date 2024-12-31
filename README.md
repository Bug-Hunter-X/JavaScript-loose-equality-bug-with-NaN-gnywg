# JavaScript Loose Equality Bug with NaN

This repository demonstrates a common subtle bug in JavaScript related to loose equality (==) comparisons with NaN (Not a Number).

## Bug Description
The provided JavaScript code attempts to handle null values gracefully, returning 0 if the input `x` is null. However, due to the nature of NaN, this check fails to capture NaN values correctly. NaN does not equal itself or null using loose equality (==), leading to unexpected behavior.

## Bug Reproduction
1. Clone this repository.
2. Run `bug.js`.
3. Observe that the function returns NaN instead of the expected 0 when input is NaN.

## Solution
The bugSolution.js file provides a solution that correctly handles NaN by explicitly checking for it using isNaN().

## Lesson Learned
Always use strict equality (===) when comparing values unless you have a specific reason to use loose equality. Be mindful of NaN's unique properties and use isNaN() to correctly detect it.