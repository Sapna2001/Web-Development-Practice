const PI = Math.PI;

function getArea(r) 
{
    return PI*r*r;
}

function getPerimeter(r) 
{
  return 2*PI*r;  
}

void main()
{
    var r = readLine();
    r.toFixed(3);
    console.log(getArea(r));
    console.log(getPerimeter(r));
}