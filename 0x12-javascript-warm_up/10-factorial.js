#!/usr/bin/node
// a script that computes and prints a factorial
function factorial (n) {
  if ((isNan(n)) || (n === 1)) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(parseInt(number(process.argv[2]))));
