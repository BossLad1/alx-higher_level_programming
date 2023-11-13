#!/usr/bin/node
//  a script that prints a square

const mySqr = process.argv[2];

if (isNaN(mySqr)) {
  console.log('Missing size');
} else {
  const row = 'X'.repeat(mySqr);
  for (let i = 0; i < mySqr; i++) {
    console.log(row);
  }
}
