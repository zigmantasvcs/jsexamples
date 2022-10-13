// Write a function which accepts a date in format “2022-10-12” for example. Function should return the day of the week. Try to provide your birthday.
function getWeekday(date){
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[date.getDay()];
}

// Write a functions which accepts two dates in format “2022-10-12 00:00:00” for example. Dates together means duration. Function should subtract one date from another (bigger from smaller). Function should return subtraction in milliseconds.

function getDuration(date1, date2){
    if(date1 > date2){
        return date1 - date2;
    }

    return date2 - date1;
}