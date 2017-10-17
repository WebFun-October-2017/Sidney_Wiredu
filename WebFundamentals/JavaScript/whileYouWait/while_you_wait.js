var daysUntilMyBirthday = 60;

while (daysUntilMyBirthday <= 60) {
    console.log(daysUntilMyBirthday,"days until my birthday.");
    daysUntilMyBirthday--;

    if(daysUntilMyBirthday >= 30) {
        console.log("Such a long time... :(");
    }
    if (daysUntilMyBirthday < 30) {
        console.log("Whoo! We are getting closer!");
    }
    if (daysUntilMyBirthday < 5) {
        console.log("WE ARE ALMOST THERE!!!!");
    }
    if (daysUntilMyBirthday == 0){
        console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
        break;
    }
}
