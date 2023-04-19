#!/usr/bin/node
// a script that prints a square
const sqr = process.argv[2];
if (isNaN(sqr)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < sqr; i++) {
    let sqrt = '';
    for (let j = 0; j < sqr; j++) {
      sqrt += 'X';
    }
    console.log(sqrt);
  }
}
