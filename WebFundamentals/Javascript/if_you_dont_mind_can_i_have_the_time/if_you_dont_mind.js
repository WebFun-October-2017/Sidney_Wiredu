var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = "PM";

if (MINUTE > 30 && PERIOD == 'AM') {
    var HOUR = HOUR + 1, PERIOD = "in the morning";
    console.log("It's almost",HOUR, PERIOD);

} else if (MINUTE < 30 && PERIOD == 'PM') {
    var PERIOD = "in the evening";
    console.log("It's just after",HOUR,PERIOD);
}
