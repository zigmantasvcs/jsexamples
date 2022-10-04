// Write a function which prints all even (0, 2, 4, …) numbers to the page list (<ul> and <li> used for the list) from 0 to 100. Use while loop.
function printEvenNumbers() {
    let index = 0;
    document.write("<ul>");

    while (index <= 100) {
        
        if(index % 2 == 0){
            document.write(`<li>${index}</li>`)
        }

        index++;
    }

    document.write("</ul>");
}

// v2
function printEvenNumbersV2() {
    let index = 0;
    document.write("<ul>");

    while (index <= 100) {
        
        document.write(`<li>${index}</li>`)

        index += 2;
    }

    document.write("</ul>");
}

// Write a function which returns | separated string with odd numbers. Numbers are from interval from 0 to 1000. Use while loop.
function getStringWithOddNumbers(){

    let index = 1;
    let line = "";
    while (index < 1000) {
        if(index != 999){
            line += index + "|";
        }
        else{
            line += index;
        }
        
        index += 2;
    }

    return line;
}

function getStringWithOddNumbersV2(){
    let index = 1;
    let oddNumbers = [];

    while (index < 1000) {
        oddNumbers.push(index);
        index += 2;
    }

    return oddNumbers.join("|");
}

// Write a function which accepts array of numbers. It should iterate through the array and return first element which divides from 5 and 7. Use while loop.

function getFirstNumberWhichDevidesBySevenAndFive(array) {
    
    let index = 0;
    while (index < array.length) {
        console.log(index);
        if(array[index] % 5 == 0 && array[index] % 7 == 0){
            return array[index];
        }

        index++;
    }
}
