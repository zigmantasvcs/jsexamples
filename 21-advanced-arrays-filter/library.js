// Create a function which accepts an array of numbers. Function should return filtered array: all numbers which are bigger than 100 should be returned only.
function getNumbersBiggerThan100(numbers){
    return numbers.filter((number) => number > 100 && number < 105); // will take numbers from 100 to 105 from an array
}

// Create a function which accepts an array of numbers. Function should return filtered array: all numbers which divides by 5 and 7 should be returned.
function getNumbersWhichDevidesBy5And7(numbers){
    return numbers.filter(function(number){
        return number % 5 == 0 && number % 7 == 0;
    })
}

function getNumbersWhichDevidesBy5And7V2(numbers){
    return numbers.filter((number) => {
        return number % 5 == 0 && number % 7 == 0;
    })
}

function getNumbersWhichDevidesBy5And7V3(numbers){
    return numbers.filter((number) => number % 5 == 0 && number % 7 == 0);
}

// extend: return false if empty array
function doesAnyNumberWhichDevidesBy5AndSevenExist(numbers){
    let newArray = numbers.filter(
        (number) => 
            number % 5 == 0 
            && number % 7 == 0
    );

    return newArray.length == 0;
}


// Create a function which accepts an array of words. Function should return filtered array: all words shorter than 8 characters should be returned.
function getWordsShorterThan8Characters(words){
    return words.filter((word) => word.length < 8);
}
