function factorial(n) 
{
    var m =1;
  while (n>0) {
      m = m*n;
      n--;
  }
  return m;  
}

void main()
{
    var n = readLine();
    if(n>=1 && n<=10)
    {
    console.log(factorial(n));
    }
}