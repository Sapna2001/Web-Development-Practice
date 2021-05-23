function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}

var s = "1234";
console.log(reverseString(s));

var s = 1234;
console.log(reverseString(s));