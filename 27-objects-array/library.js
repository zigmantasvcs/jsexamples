// You have a function which returns an array of student information. Function can be found here. Create new function which accepts data from function above, new function should print all data to the table. Use new html elements (table, tr, th, td).
function printStudentsInfromationToTheTable(students){
    document.write(`<table border="1">`);
    document.write(`<tr><th>Name</th><th>Surname</th><th>Age</th><th>Average</th></tr>`);

    students.forEach((student) => document.write(`<tr><td>${student.name}</td><td>${student.surname}</td><td>${student.age}</td><td>${student.studiesAverage}</td></tr>`));

    document.write(`</table>`);
}
/* <table border="1">
<tr><th>Name</th><th>Surname</th><th>Age</th><th>Average</th></tr>   
<tr><td>John</td><td>Orange</td><td>25</td><td>7</td></tr>
</table> */



// name: "John",
// 			surname: "Orange",
// 			age: 25,
// 			studiesAverage: 8.7