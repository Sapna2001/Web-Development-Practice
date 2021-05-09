function getArea(length,breadth)
{
    console.log(length*breadth);
}

function getPerimeter(length,breadth)
 {
    console.log(2*length*breadth);
}

void main()
{
    var length = readLine();
    var breadth = readLine();

    getArea(length,breadth);
    getPerimeter(length,breadth);
}