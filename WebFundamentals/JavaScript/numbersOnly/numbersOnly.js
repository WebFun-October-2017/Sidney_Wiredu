function numbersOnly () {
    var oldArr = [1, "apple", -3, "orange", 0.5];
    var newArr = [];

    for (var i = 0; i <= oldArr.length; i++) {
        oldArr[i];

        if(typeof(oldArr[i]) === "number") {
            newArr.push(oldArr[i]);
        }
    }
    return console.log("New array is",newArr);
}
numbersOnly();


function stringsOnly () {
    var oldArr = [1, "apple", -3, "orange", 0.5];
    var newArr = [];

    for (var i = 0; i <= oldArr.length; i++) {
        oldArr[i];

        if(typeof(oldArr[i]) === "string") {
            newArr.push(oldArr[i]);
        }
    }
    console.log("New array is",newArr);
}
stringsOnly();
