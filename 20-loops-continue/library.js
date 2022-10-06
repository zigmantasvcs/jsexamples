// Write a function which accepts an array of numbers. Function should count sum of even numbers. Function should collect all even numbers to one string line separated by |. Function should print generated line and sum. Use continue in the loop.
function printEvenNumbers(numbers){

    let sum = 0;
    let line = "";
    for (const number of numbers) {
        if(number % 2 != 0){
           continue;
        }

        sum += number;
        line += number + "|";
    }

    document.write(sum);
    document.write("<br>");
    document.write(line);

}
