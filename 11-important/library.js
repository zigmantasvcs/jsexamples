function isAdult(age){

    if(isNaN(age)){
        alert("Should be a number");
    }

    return age >= 18;
}