#!/usr/bin/node
// the number of arguments already printed and the new argument value
let argc = 0;

exports.logMe = function count (item) {
  console.log(`${argc}: ${item}`);
  argc++;
