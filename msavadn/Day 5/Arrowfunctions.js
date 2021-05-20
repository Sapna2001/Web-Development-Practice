modArray = (s) =>
{
    for (let i =  0;i < s.length; i++) 
    {
        if(s[i]%2==0)
             s[i] *=2;
        else
             s[i]*=3;
      
    }
    return s;
}

void main()
{
    var n = readline();
    var s = [];
    for( let i=0;i<n;i++)
    {
        s[i] = readLine().split(" ");
    }
console.log(modArray(s));
}