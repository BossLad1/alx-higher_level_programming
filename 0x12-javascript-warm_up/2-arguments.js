#!/usr/bin/node
// a script that prints a message depending of the number of argument passed.
const i = process.argv.length;
if (i < 3) {
  console.log('No argument');
} else if (i === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
