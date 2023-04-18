#!/usr/bin/node
// a script that prints the first argument passed to it.
const i = process.argv;
if (i) {
  console.log(i);
} else {
  console.log('No argument');
}
