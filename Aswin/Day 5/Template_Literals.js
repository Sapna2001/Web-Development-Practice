function sides(literals, ...expressions) {
    //console.log(expressions)

    let peri = expressions[1];
    let area = expressions[0];
    let arr = [];
    arr.push((peri + (Math.sqrt(Math.pow(peri,2) - (16 * area)))) / 4);
    arr.push((peri - (Math.sqrt(Math.pow(peri,2) - (16 * area)))) / 4);
    arr.sort()
    //console.log(arr)
    return arr;
}