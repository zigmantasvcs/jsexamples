// Write a function which accepts an array of names. Function should check if there are any words with length of 5. If such word found it should be printed. Name the function printFirstWordWithFiveLettersExistInTheArray. Use break in the loop.

function printFirstWordWithFiveLettersExistInTheArray(array){
    for (const item of array) {
        if(item.length == 5){
            document.write(item);
            break;
        }
    }
}