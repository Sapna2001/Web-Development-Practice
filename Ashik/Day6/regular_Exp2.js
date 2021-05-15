// Day 6 Regular Expression 2

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


function regExp2(s)
{
    var re = /[Me.,Mrs.,Ms.,Dr.,Er.](?<=)[Me.,Mrs.,Ms.,Dr.,Er.]][a-z,A-z]/;
    return re;   
}

void main()
{
    var s = readLine();
    var re = regExp2(s);
    console.log(re.test(s));
}