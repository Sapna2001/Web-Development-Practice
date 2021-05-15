//Day 4 Inheritance

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


class Rectangle
{
  constructor(a,b){
    this.length = a;
    this.breadth = b;
  }
    Area()
    {
           return this.length*this.breadth;
    }

}

class Square extends Rectangle
{
    constructor(c)
    {
      super(c);
       this.length = c;
        this.breadth = c;
    }
}


void main()
{
  var a = readLine();
  var b = readLine();
  var c = readLine();
var rec = new Rectangle(a,b);
var squ = new Square(c);

console.log(rec.Area());
console.log(squ.Area());

}
