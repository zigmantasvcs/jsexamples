// Write a function which checks users password provided from prompt function. Function may be named accessGranted and should return true or false (boolean). Use do..while loop. Call the function in html file and if it returns true redirect user to the page https://www.vilniuscoding.lt.

function accessGranted(){

    let password = "";

    do {
        password = prompt("What is your password?");    
    } while (password != "qwerty123");

    return true;
}