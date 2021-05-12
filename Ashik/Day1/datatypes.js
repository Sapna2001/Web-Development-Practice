// Day 1 Data Types

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



function myfunction(secondInteger,secondDecimal,secondString)
{
    //Given Values
    var firstInteger = 2;
    var firstDecimal = 2.9;
    var firstString = "Hello,"

    //required operation
    Number(secondInteger);
    console.log(firstInteger+secondInteger);

    Number(secondDecimal);
    console.log(firstDecimal+secondDecimal);

    console.log(firstString+secondString);
}

void main()
{
    var secondInteger = readLine();
    var secondDecimal = readLine();
    var secondString = readLine();

    myfunction(secondInteger,secondDecimal,secondString);
}