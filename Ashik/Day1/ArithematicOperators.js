// Day 1 Arithematic Operators

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



function getArea(length,breadth)
{
    console.log(length*breadth);
}

function getPerimeter(length,breadth)
 {
    console.log(2*length*breadth);
}

void main()
{
    var length = readLine();
    var breadth = readLine();

    getArea(length,breadth);
    getPerimeter(length,breadth);
}