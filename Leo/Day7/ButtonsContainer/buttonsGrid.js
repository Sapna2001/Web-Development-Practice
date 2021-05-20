var l = "4";

var elements = ["1", "2", "3", "6", "9", "8", "7", "4"];

var id = ["1", "2", "3", "6", "9", "8", "7", "4"];



var rotate = function() {

    for (var i = 7; i > 0; i--) {

        elements[i] = elements[i - 1];

    }

    elements[0] = l;

    l = elements[7];

    for (var i = 0; i < 8; i++) {

        document.getElementById("btn" + id[i]).innerText = elements[i];

    }

}