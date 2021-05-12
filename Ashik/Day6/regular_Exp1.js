//Day 6 Regular Expression 1

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


function regExp(s)
{
if(s[0] == s[s.length - 1])
  {
    var re = /^[a,e,i,o,u]/;  
  }  
  else{
      var re = /^![a,e,i,o,u]/;

  }
  return re;
}

void main()
{
  var s = readLine();
 var re = regExp(s);
 console.log(re.test(s));
}
