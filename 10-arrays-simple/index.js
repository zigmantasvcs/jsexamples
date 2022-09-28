// Write a function which has an array of student evaluations. Function should return the last evaluation from array;

function getLastEvaluation(){
    let grades = [10, 9, 8, 9, 8];
    console.log(grades);
    document.write(grades);
    alert(grades); // in older version ouput was [Object, object]
    return grades[4];
}

// more complex and more universal
function getLastElement(array){
    return array[array.length - 1];
}