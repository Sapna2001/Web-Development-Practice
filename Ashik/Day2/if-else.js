// Day 2 if-else

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


function getGrade(Score) 
{
  if (Score>25 && Score<=30) {

      return 'A';

  } else if(Score>20 && Score<=25) 
  {

      return 'B';

  }  else if (Score>15 && Score<=20)
  {

        return 'C';

  }  else if (Score>10 && Score<=15)
  {

        return 'D';

  }  else if (Score>5 && Score<=10)
  {

        return 'E';

  }  else if (Score>=0 && Score<=5)
  {

        return 'F';

  }
}

void main()
{
    var Score = readLine();
    var grade = getGrade(Score);
    console.log(grade);
}