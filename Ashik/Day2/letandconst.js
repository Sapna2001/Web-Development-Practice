// Day 2 let and const

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


const PI = Math.PI;

function getArea(r) 
{
    return PI*r*r;
}

function getPerimeter(r) 
{
  return 2*PI*r;  
}

void main()
{
    var r = readLine();
    r.toFixed(3);
    console.log(getArea(r));
    console.log(getPerimeter(r));
}