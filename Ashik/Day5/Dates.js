//Day 5 Dates

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


function getDay(Dates)
{
    var d = new Date(Dates);
    var day = d.getDay();
    switch(day)
    {
        case 0 : console.log("Sunday");break;
        case 1 : console.log("Monday");break;
        case 2 : console.log("Tuesday");break;
        case 3 : console.log("Wednesday");break;
        case 4 : console.log("Thursday");break;
        case 5 : console.log("Friday");break;
        case 6 : console.log("Saturday");break;
    }
}

void main()
{
    var n = readLine();
    for (let i = 0;i < n;i++)
    {
        var date = readLine();
        getDate(date);
    }

}