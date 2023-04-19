#!/usr/bin/node
// script that prints My number: <first argument converted in integer>
const i = process.argv[2];
if (isNaN(parseInt(i))) {
  console.log('Not a number');
} else {
  console.log('My number: ' + parseInt(i));
}
