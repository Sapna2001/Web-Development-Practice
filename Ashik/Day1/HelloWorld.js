// Day 1 Hello World

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



var parametersVariable;

function myFunction(parametersVariable)
{
    console.log("Hello,World!");
    console.log(parametersVariable);
}

function main()
 {

    const parametersVariable = readLine();

    myFunction(parametersVariable);
}

