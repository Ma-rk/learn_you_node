// This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.

// Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.
var path = require('path');
var fs = require('fs');

module.exports = function (filePath, ext, runner){
  fs.readdir(filePath, function(err, fileNames){
    if(err){
      runner(err);
      return;
    }
    var filteredFileNames = new Array();
    for(idx in fileNames){
      if(path.extname(fileNames[idx]) === '.' + ext){
        filteredFileNames.push(fileNames[idx]);
      }
    }
    runner(null, filteredFileNames);
  });
}