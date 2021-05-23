function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a*b
    }
}

 Rectangle(5,4);
console.log(Rectangle(5,4));