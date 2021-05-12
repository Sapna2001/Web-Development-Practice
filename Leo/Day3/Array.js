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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    var lar2=-1, lar1=-1;
    for(var j=0;j<nums.length;j++)
    {
        if(nums[j]>lar1)
        {
            lar2=lar1;
            lar1=nums[j];
        }    
        else if(nums[j]>lar2&&nums[j]<lar1)
        //{
            lar2=nums[j];
        //}   
    }
    return(lar2);
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
