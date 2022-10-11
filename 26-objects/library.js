// Create a function which access object with student information. Object contains student properties: name, surname, age. Function should print logic sentence. For example:
// John Orange is 25 years old.

function printStudentInformation(student){
    document.write(student.name.concat(" ", student.surname, " is ", student.age, " years old."));
}