// You have a function which returns an array of employees information. Function can be found here. Create new function which accepts data from function above, new function should print all data to the table. Use new html elements (table, tr, th, td). Additionally write a function which returns employee object with biggest salary.
// Sort

function getEmployeeWithBiggestSalary(employees) {
    return employees.reduce((previousValue, currentValue) => 
        previousValue.salary > currentValue.salary ? previousValue : currentValue
    );
}

// using sort
function getEmployeeWithBiggestSalaryWithSort(employees){
    return employees.sort((a, b) => b.salary - a.salary)[0];
}