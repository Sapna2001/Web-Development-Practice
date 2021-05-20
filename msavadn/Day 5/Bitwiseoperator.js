function getBit(n,k)
{
    var max = 0;
    for(let i=1;i<n;i++)
    {
        for(let j=i+1;j<=n;j++)
        {
            if((i&j)>max && (i&j)<k)
                max = (i&j);
        }
    }
      
return max;
     
}

void main()
{
    var q = readLine();
    var n = readLine();
    var k = readLine();
    var s = [n,k];
    for(let i=0;i<q;i++)
    {
       console.log(getBit(n,k));
    }
}