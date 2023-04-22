#!/usr/bin/node
// script that searches the second biggest integer in the list of arguments

const i = process.argv.length;
if (i <= 3) {
  console.log(0);
} else {
  const args = process.argv.map(Number)
    .slice(2, i)
    .sort((a, b) => a - b);
  console.log(args[args.length - 2]);
}
