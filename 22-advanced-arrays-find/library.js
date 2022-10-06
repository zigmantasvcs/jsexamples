// Create a function which accepts an array of numbers and number to find. Function should return found number or if number is not found function should return 0;

function getNumber(numbers, numberToGet){
    let result = numbers.find((number) => number == numberToGet);

    if(result == undefined){
        return 0;
    }

    return result;
}

// Create a function which accepts an array of words. Function should return true if word “hello” is found. Otherwise false should be returned;
function doesWordHelloExistInArray(words){
    let result = words.find((word) => word.toLowerCase() == "hello".toLowerCase());

    return result != undefined;
}


// addtional function which finds if part of the word exist
function doesThePartOfTheWordExcist(array, line){
    let result = array.find((word) => {
        if(word.indexOf(line) >= 0){
            return word;
        }
    })

    return result != undefined;
}
