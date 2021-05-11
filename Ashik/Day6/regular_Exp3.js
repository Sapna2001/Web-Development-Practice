// Day 6 Regular Expression 3

function regExp3()
{
    var re = /\d+/g;
     return re
}

var s = "1,4 and 4,1.4";
var re = regExp3();
var r = s.match(re);
for( const e of r)
{
    console.log(e);
}
