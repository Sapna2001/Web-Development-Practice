class Polygon{
    constructor(sides){        
        this.sides = sides
    }
    perimeter() {
        return this.sides.reduce(function add(a,b){return a+b;})
    } 
}
