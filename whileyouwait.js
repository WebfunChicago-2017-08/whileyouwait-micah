var daysUntilMyBirthday = 60;

function whileYouWait() {
    while (daysUntilMyBirthday >= 30) {
        console.log(daysUntilMyBirthday + " days until my birthday.  Such a long time... :(");
        daysUntilMyBirthday--;
    }
    while (daysUntilMyBirthday >= 5) {
        console.log(daysUntilMyBirthday + " days until my birthday...getting excited!");
        daysUntilMyBirthday--;
    }
    while (daysUntilMyBirthday >= 1) {
        console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!!");
        daysUntilMyBirthday--;
    }
    if (daysUntilMyBirthday === 0) {
        console.log("IT'S MY BIRTHDAY!!!!!!!@#@#%#$^@#%^$&*^&(*^*(");
    }

}