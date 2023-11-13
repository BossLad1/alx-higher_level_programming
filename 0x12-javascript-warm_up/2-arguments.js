#!/usr/bin/node
// prints a message depending of the number of arguments passed

const myArgv = process.argv.length -2;

if (myArgv === 0) {
   console.log('No argument');
} else if (myArgv === 1){
   console.log('Argument found');
} else {
   console.log('Arguemnt found');
}
