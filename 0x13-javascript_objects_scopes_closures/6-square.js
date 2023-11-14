#!/usr/bin/node
// Square that defines a square and inherits from Rectangle of 4-rectangle.js

const SuperSquare = require('./5-square');

module.exports = class Square extends SuperSquare {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let y = 0; y < this.width; y++) {
        row += c;
      }
      console.log(row);
    }
  }
};
