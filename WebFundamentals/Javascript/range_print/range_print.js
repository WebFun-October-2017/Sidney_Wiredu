function printRange(a,b,c=1) {
    for (var i = a; i < b; i += c) {
        console.log(i);
    }
}

printRange(2,10,2);
