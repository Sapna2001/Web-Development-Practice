// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    var daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
    var Date1 = new Date(dateString);
    dayName = daysWeek[Date1.getDay()];
    return dayName;
}


