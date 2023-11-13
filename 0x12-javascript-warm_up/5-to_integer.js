#!/usr/bin/node
// a script that prints My number: <first argument converted in integer>
// if the first argument can be converted to an integer:
const myArgv = process.argv[2];

if (isNaN(myArgv)) {
   console.log('Not a number');
} else {
   console.log(myArgv);
}
