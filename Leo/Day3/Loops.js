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
function vowelsAndConsonants(s) {
    for(var i=0;i<s.length;i++)
    {
        switch(true){
            case 'aeiou'.includes(s[i]):
                console.log(s[i]);break;
        }
    }
    for(var j=0;j<s.length;j++){
        switch(false){
            case 'aeiou'.includes(s[j]):
                console.log(s[j]);break;
        }
    }
    
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
