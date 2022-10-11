// Create a function which calculates sum of provided array numbers. Function should return the sum.

function getSumFromArrayNumbers(numbers){
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

// Create a function which accepts an array of numbers. Function should return a string. For example provided array is [2, 3, 4], returned string should be: sum=2+3+4;

function getSumExcpressionFromArray(numbers){
    return numbers.reduce((previousValue, currentValue, index) => 
        previousValue + (index == 0 ? "=" : "+") + currentValue, "sum");
}

function getSumExcpressionFromArrayV2(numbers){
    return numbers.reduce((previousValue, currentValue, index) => {
        if(index == 0){
            return previousValue + "=" + currentValue;
        }
        else{
            return previousValue + "+" + currentValue;
        }
    }, "sum")
}
