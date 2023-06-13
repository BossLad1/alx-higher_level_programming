#!/usr/bin/node
// a script that prints My number:
const i = process.argv[2];
if (isNaN(i)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + parseInt(i));
}
