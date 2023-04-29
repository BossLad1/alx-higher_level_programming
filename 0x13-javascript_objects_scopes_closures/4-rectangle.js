#!/usr/bin/node
// Same as 3 but
// rotate() that exchanges the width and the height of the rectangle
// double() that multiples the width and the height of the rectangle by 2
class Rectangle {
  constructor (w, h) {
    if (w > 0 || h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () {
    const i = this.width;
    this.width = this.height;
    this.height = i;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
