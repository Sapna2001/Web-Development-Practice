// Day 5 Template Literals

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


function sides(tag,P,A)
{
    var s = [];
    s1 = (P + Math.sqrt((P*P) - (16*A)))/4;
    s.push(s1);
    s2 = (P - Math.sqrt((P*P) - (16*A)))/4;
    s.push(s2);
    s.sort(function(a,b){return a-b;});
    return s;
}

function main()
{
    var s1 = readLine();
    var s2 = readLine();
 var a = sides('Area is ${s1*s2} and Perimeter is ${2*(s1*s2)}',2*(s1+s2),s1*s2);
 console.log(a);
}