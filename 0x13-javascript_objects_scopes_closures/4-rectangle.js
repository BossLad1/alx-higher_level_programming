#!/usr/bin/node
// an instance method called print() that prints the rectangle using the character X
module.exports = class Rectangle {
  constructor (w, h) {
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let i = this.height;
    while (i > 0) {
      console.log('X'.repeat(this.width));
      i -= 1;
    }
  }

  rotate () {
    let rottem = 0;
    rottem = this.width;
    this.width = this.height;
    this.height = rottem;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
};
