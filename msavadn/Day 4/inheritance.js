// Inheritance-Day 4

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