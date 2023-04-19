#!/usr/bin/node
// a script that print x times 'C is fun
const x = process.argv[2];
if (!parseInt(x)) {
  console.log('Missing number of occurences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
