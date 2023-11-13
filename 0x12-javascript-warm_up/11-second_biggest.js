#!/usr/bin/node
// searches the second biggest integer in the list of arguments.

if (process.argv.length <= 3) {
  console.log(0);
} else {
  const args = process.argv.slice(2)
    .map(Number)
    .sort((a, b) => b - a)[1];
  console.log(args);
}
