function checkIfStudentExist(students, student){
    for (const iterator of students) {
        if(iterator == student){
            console.log(`Student ${student} exist`);
        }
    }
}

function checkIfStudentExistv2(students, student){
    if(students.includes(student)){
        console.log(`Student ${student} exist`);
    }
}

// without knowing loops and include
// !!! very ugly solution
function checkIfStudentExistv3(students, student){
    if(students[0] == student){
        console.log(`Student ${student} exist`);
    }

    if(students[1] == student){
        console.log(`Student ${student} exist`);
    }

    if(students[2] == student){
        console.log(`Student ${student} exist`);
    }
}

// Write a function which accepts an array of text elements. Function should print array elements into the list. Use <ul> and <li> elements for it. Use for..of loop.
function printArrayToTheList(array){
    document.write("<ul>");
    for (const element of array) {
        document.write("<li>" + element + "</li>")
    }
    document.write("</ul>");

}