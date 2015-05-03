// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.
var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function func(err, data){
    var arr = data.split('\n');
    console.log(arr.length - 1);
});