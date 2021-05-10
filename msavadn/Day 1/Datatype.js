function myfunction(secondInteger,secondDecimal,secondString)
{
    //Given Values
    var firstInteger = 2;
    var firstDecimal = 2.9;
    var firstString = "Hello,"

    //required operation
    Number(secondInteger);
    console.log(firstInteger+secondInteger);

    Number(secondDecimal);
    console.log(firstDecimal+secondDecimal);

    console.log(firstString+secondString);
}

void main()
{
    var secondInteger = readLine();
    var secondDecimal = readLine();
    var secondString = readLine();

    myfunction(secondInteger,secondDecimal,secondString);
}