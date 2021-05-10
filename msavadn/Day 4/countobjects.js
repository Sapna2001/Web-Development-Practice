//Count Objects-Day 4

function countObjects(a)
{
    var count = 0;
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        if(element.x == element.y){
            count++;
        }
        
    }
    return count;
}

//var n = readLine();
var obj = [];
for(let i=0;i<n;i++)
{
   [a,b] = readLine().split("  ");

    obj.push({ x : a, y: b});
    console.log(countObjects(obj));
}