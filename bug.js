function foo(x) {
  if (x == null) {
    return 0; //This line will cause error if x is NaN
  } else {
    return x + 1;
  }
}
console.log(foo(NaN));//Output: NaN. Expected 0