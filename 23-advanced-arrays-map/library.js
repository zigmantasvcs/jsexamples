// Create a function which accepts array of numbers. Function should square each element and return new array.

function getNewArrayWithSqueredElements(numbers){
    return numbers.map((number) => number * number);
}

// Create a function which accepts array of words. Function should return all words decorated with character “!”; 
function getDecoratedArrayElements(words, symbol){
    return words.map((word) => word + symbol);
}