//Day 3 Try.Catch and Finally

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function reverseString(s)
{
    var a =[];
    a = s.split('');
    a = a.reverse();
    s = a.join('');
    return s;
}

try {
    var s = Number(1234);
    s = reverseString(s);
} 
catch (error) {
    console.log(error);
  }

finally
{
    console.log(s);
}
 