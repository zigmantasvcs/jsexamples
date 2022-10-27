// All tasks should be done in the same file library.js. Call the functions if you want to check results.
// 1. Create a function which accepts an argument. Argument is any word. Function should check if words length is odd or even number. If even - true is returned, if odd - false is returned.

function checkWordLength(){
    return word.length % 2 == 0;
}

// 2. Create a function which accepts an index. Index is a number. Function has already declared array of colors: ["Blue", "Yellow", "Green", "Red"]. Function should return an element (color) from the array by provided Index. Make sure Index is correct for the array (validation).
function getColor(index){
    return ["Blue", "Yellow", "Green", "Red"][index];
}

// 3. Create a function which accepts array of words. Function should return an average of all word's length.
function getWordsLengthAverage(words){
    let sum = 0;
    for (const word of words) {
        sum += word.length;
    }

    return sum / words.length;
}

// 4. Create a function which accepts two arguments. One argument is a sentence, other argument is a single word. Function should return true if word exist in the sentence. Function should return false if word does not exist in the function.

function doesWordExistInArray(sentence, word){
    return sentence.includes(word);
}

// 5. Create a function which accepts a word as argument. Function should return word written opposite. For example: if word provided hello, function returns olleh.
function returnWordOposite(word){
    let opositeWord = "";
    for (let index = word.length - 1; index >= 0; index--) {
        const character = word[index];
        opositeWord += character;
    }

    return opositeWord;
}

// 6. Create a function which accepts an array of words. Function should return array with the same words but ordered in descending order (from z to a).
function orderByDescending(words){
    return words.sort((a, b) => {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    });
}


// 7. Create a function which accepts a course object.  Course object example: {title: "Javascript course", hours: 21, lecturer: "Zigmantas", numberOfStudents: 15}. Function should return a string: "I have finished Javascript course. Course length is 21 hours. Course lecturer is Zigmantas. Group has 15 students."
function getInformationAboutCourse(course){
    return `I have finished ${course.title} course. Course length is ${course.hours} hours. Course lecturer is ${course.lecturer}. Group has ${course.numberOfStudents} students.`;
}


// 8. Create a function which accepts object array:
// [
//     {title: "Javascript course", hours: 21, lecturer: "Zigmantas", numberOfStudents: 15},
//     {title: "WEB course", hours: 40, lecturer: "John", numberOfStudents: 20},
//     {title: "Data analytics course", hours: 74, lecturer: "Ana", numberOfStudents: 18},
//     {title: "Quality assurance course", hours: 54, lecturer: "Eva", numberOfStudents: 17},
//     {title: "Java course", hours: 30, lecturer: "Simon", numberOfStudents: 14},
//     {title: "C# course", hours: 45, lecturer: "Olof", numberOfStudents: 13}
// ]
// function should filter course which has more than 15 students and which takes longer than 50 hours. Filtered courses should be converted to new objects with only properties: title, lecturer. Basically, function returns new filtered and converted array. Result from input data should be:
// [
//     {title: "Data analytics course", lecturer: "Ana"},
//     {title: "Quality assurance course", lecturer: "Eva"}
// ]

function convertCourses(courses){
    return courses
        .filter(course => course.numberOfStudents > 15 && course.hours > 50)
        .map(course => {
            return {
                title: course.title,
                lecturer: course.lecturer
            }
        });
}


// 9. Create a function which accepts objects array (same as in task 8). Function should find shortest course (in hours), create sentence from the course which is shortest and return it. Sentence example: "The shortest course from the list Javascript course".
function getShortestCourse(courses){
    return courses
        .reduce((previousCourse, currentCourse) => previousCourse.hours <= currentCourse.hours ? previousCourse : currentCourse);
}


// 10. Create a function which access data about price comparison for playstation 5. Call fetch with url “http://zigmantas.codingschoolprojektai.lt/api/?data=ps5”. Your function should accept data from API.Your function should return TOP 3 offers with lowest price ordered in asccending order by price (lowest price first!).
function processPrices(){
    fetch("http://zigmantas.codingschoolprojektai.lt/api/?data=ps5")
        .then(response => response.json())
        .then(data => getTopLowestPrice(data))
        .then(topPrices => console.log(topPrices))
}

function getTopLowestPrice(prices){
    // of course to get top 3 you can uses loop with 3 itarations and push to new array
    return prices
        .sort((a, b) => {
            return a.price - b.price;
        })
        .slice(0, 3);
}
