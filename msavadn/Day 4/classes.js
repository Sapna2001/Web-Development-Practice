// Classes-Day 4


class Polygons
{
    a = [];
    constructor(a = []){
         this.a = a;
    };

    Perimeter()
    {
        var perimeter =0;
        for (let i = 0; i < this.a.length; i++) {
            const element = this.a[i];
           perimeter += element;  
        }
        return perimeter;
    }
}

var rect = new Polygons([1,2,1]);

console.log(rect.Perimeter());