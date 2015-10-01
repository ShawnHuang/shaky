#! /usr/bin/env node
var Shaky = require('./index.js'),
    input,
    output,
    arg = process.argv;
    len = arg.length;
if(arg.length!=6){
    console.log("Usage: shaky -i ascii.txt -o diagram.png");
    return 0;
}
for (var index = 0; index < len; index++) {
  switch (arg[index]) {
   case '-i':
     input = arg[index+1];
     break;
   case '-o':
     output = arg[index+1];
     break;
  }
}

Shaky(input, output);
