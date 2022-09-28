// Write a function which accepts an age. If age is under 18, function should return text "You are not allowed to this site". If age is more than 18 or equal to eighteen it should return text "Welcome!".
// Call the function to test results.

function getAccessText(age) {
    if (age < 18) {
        return "You are not allowed to this site";
    } else {
        return "Welcome!";
    }
}