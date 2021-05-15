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
var getMaxLessThanK = function(n,k){
    let max = 0;
    for(let i=0; i< n; i++){
        for(let j=i+1; j< n+1; j++){
            let q = i&j;
            if(q < k){
                if(q > max){
                    max = q;
                }
            }
        }
    }
    return max;
}

function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }
}
