// Day 4 Create a Rectangle Object

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


function Rectangle(a,b)
{
    var rect =
    {
    length : a,
    breadth : b,
    area : a*b,
    perimeter : 2*a*b,
    };
    return rect;
}


void main ()
{
    var a = readLine();
    var b = readLine();
var rect = Rectangle(a,b);
console.log(rect.length);
console.log(rect.breadth);
console.log(rect.area);
console.log(rect.perimeter);
}