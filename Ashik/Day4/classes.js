// Day 4 Classes

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


class Polygons
{
    a = [];
    constructor(a = []){
         this.a = a;
    };

    Perimeter()
    {
        var perimeter =0;
        for (let i = 0; i < this.a.length; i++) {
            const element = this.a[i];
           perimeter += element;  
        }
        return perimeter;
    }
}

var rect = new Polygons([1,2,1]);

console.log(rect.Perimeter());
