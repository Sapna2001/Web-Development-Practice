// Day 6 Regular Expression 2

function regExp2(s)
{
    var re = /[Me.,Mrs.,Ms.,Dr.,Er.](?<=)[Me.,Mrs.,Ms.,Dr.,Er.]][a-z,A-z]/;
    return re;   
}

void main()
{
    var s = readLine();
    var re = regExp2(s);
    console.log(re.test(s));
}