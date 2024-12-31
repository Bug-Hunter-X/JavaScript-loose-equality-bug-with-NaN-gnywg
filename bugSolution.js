function foo(x) {
  if (isNaN(x) || x == null) {
    return 0;
  } else {
    return x + 1;
  }
}
console.log(foo(NaN));//Output: 0
console.log(foo(null));//Output: 0
console.log(foo(5));//Output: 6