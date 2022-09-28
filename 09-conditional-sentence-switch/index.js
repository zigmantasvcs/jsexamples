// Write a function which accepts the day of the week. Function should return the day of the week in word. For example: 1 - Monday. Call the function to test results.
function getWeekDay(number){

    switch (number) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Please provide correct number";
    }
}