// Write a function which accepts an array of numbers. Function should filter odd numbers and increase odd numbers by 1; additionaly calculate the sum.
function getFilteredOddNumbersAndIncreasedByOne(numbers){
    return numbers
        .filter(number => number % 2 != 0)
        .map(number => number + 1)
        .reduce((previousValue, currentValue) => previousValue + currentValue);
}