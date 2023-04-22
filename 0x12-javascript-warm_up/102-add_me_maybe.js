#!/usr/bin/node
// a function that increment and calls a function

exports.addMeMaybe = function (number, theFunction) {
  theFunction(++number);
};
