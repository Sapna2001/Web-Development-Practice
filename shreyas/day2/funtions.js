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
/*
 * Create the function factorial here
 */
function factorial(n){var x = n;
   var i,j,y,flag;
   i=1;
   j=n;
   flag=0;
   if(j<=1)
   flag++;
   if (x>1)
    {for(i;i<j;j--)
     {x=x*(j-1);}
    return(x);
     }
   else if(flag==1)
   return(1);
    
   
      
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}