#!/usr/bin/node

// converts a number from base 10 to another base
exports.converter = function (base) {
  function myConverter (num) {
    return num.toString(base);
  };
  return myConverter;
};
