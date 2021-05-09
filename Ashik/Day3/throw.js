//Day 3 Throw

function isPositive(n)
{
    if(n>0)
    {return "YES";}

    else if(n==0)
    {
        throw "Zero error";
    }
    else
    {
        throw "Negative Error";
    }
}

var n = -34;
try
{
    console.log(isPositive(n));
}
catch(err)
{
    console.log(err);
}