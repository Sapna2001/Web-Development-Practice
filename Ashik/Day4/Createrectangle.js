// Day 4 Create a Rectangle Object

function Rectangle(a,b)
{
    var rect =
    {
    length : a,
    breadth : b,
    area : a*b,
    perimeter : 2*a*b,
    };
    return rect;
}


void main ()
{
    var a = readLine();
    var b = readLine();
var rect = Rectangle(a,b);
console.log(rect.length);
console.log(rect.breadth);
console.log(rect.area);
console.log(rect.perimeter);
}