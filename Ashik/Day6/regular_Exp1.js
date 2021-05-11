//Day 6 Regular Expression 1

function regExp(s)
{
if(s[0] == s[s.length - 1])
  {
    var re = /^[a,e,i,o,u]/;  
  }  
  else{
      var re = /^![a,e,i,o,u]/;

  }
  return re;
}

void main()
{
  var s = readLine();
 var re = regExp(s);
 console.log(re.test(s));
}
