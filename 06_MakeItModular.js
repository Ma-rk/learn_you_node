// This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.

// Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.
//var filter_ext = require('06_filter_ext');
var filter_ext = require('./06_filter_ext.js');

filter_ext(process.argv[2], process.argv[3], function (err, data){
  if(err){
    console.err(err);
    process.exit(1);
  }
  for(idx in data){
    console.log(data[idx]);
  }
});

// function errorHandler(err, data){
//   if(err){
//     console.err(err);
//     process.exit(1);
//   }
//   console.log(data);
// }

// filter_ext(process.argv[2], process.argv[3], errorHandler(err, data));