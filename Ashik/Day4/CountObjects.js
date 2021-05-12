// Day 4 Count Objects

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


function countObjects(a)
{
    var count = 0;
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        if(element.x == element.y){
            count++;
        }
        
    }
    return count;
}

//var n = readLine();
var obj = [];
for(let i=0;i<n;i++)
{
   [a,b] = readLine().split("  ");

    obj.push({ x : a, y: b});
    console.log(countObjects(obj));
}
