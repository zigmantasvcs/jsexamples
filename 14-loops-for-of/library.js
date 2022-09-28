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