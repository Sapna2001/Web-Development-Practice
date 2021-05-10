// create a rectangle object-Day 4

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