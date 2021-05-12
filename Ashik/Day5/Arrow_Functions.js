//Day 5 Arrow Functions

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


modArray = (s) =>
{
    for (let i =  0;i < s.length; i++) 
    {
        if(s[i]%2==0)
             s[i] *=2;
        else
             s[i]*=3;
      
    }
    return s;
}

void main()
{
    var n = readline();
    var s = [];
    for( let i=0;i<n;i++)
    {
        s[i] = readLine().split(" ");
    }
console.log(modArray(s));
}