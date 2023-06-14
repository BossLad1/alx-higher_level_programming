#!/bin/usr/node
// searches the second biggest integer in the list of arguments
if (process.argv.length <= 3) {
  console.log(0);
} else {
  const args = process.argv
    .map(number)
    .slice(2, process.argv.length)
    .sort((x, y) => x - y);
  console.log(args[args.length - 2]);
}
