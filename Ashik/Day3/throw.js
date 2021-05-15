//Day 3 Throw

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


function isPositive(n)
{
    if(n>0)
    {return "YES";}

    else if(n==0)
    {
        throw "Zero error";
    }
    else
    {
        throw "Negative Error";
    }
}

var n = -34;
try
{
    console.log(isPositive(n));
}
catch(err)
{
    console.log(err);
}