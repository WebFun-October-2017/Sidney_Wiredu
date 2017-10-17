function randomChance(quarters, winningNumber) {
    while (quarters > 0 ) {
        var chance = Math.random();

        if (chance <= 1)    {
            var jackpot = Math.trunc(Math.random() * 50) + 50;

            quarters = quarters + jackpot;
            console.log("You've won " + jackpot + " total");
            console.log("You have " + quarters + " left");

            if (quarters >= winningNumber) {
                //console.log("You have " + winningNumber);
                break;
            }
        } else if (quarters == 0) {
            console.log("Sorry, no quarters left. Try again.")
        }
        quarters = quarters - 1;
        console.log("Sorry, you've lost. You now have " + quarters + " quarters.");
    }
}
randomChance(50, 100);
