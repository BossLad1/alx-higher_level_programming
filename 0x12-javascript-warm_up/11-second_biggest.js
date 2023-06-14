#!/bin/usr/node
// searches the second biggest integer in the list of arguments
const i = process.argv.length
if (i <= 3) {
  console.log(0);
} else {
  const args = process.argv.map(number)
    .slice(2, i)
    .sort((x, y) => x - y);
  console.log(args[args.length - 2]);
}
