// Write a function which accepts secret word. If secred word is "gold", function should print "You have found a gold!". Nothing else should be printed if word is something else.
// Call the function to test results.

function printFindings(secretWord){
    // if(secretWord.toLowerCase() == "gold"){
    //     document.write("You have found a gold!");
    // }

    if(secretWord == "gold" || secretWord == "Gold"){
        document.write("You have found a gold!");
    }

    console.log(secretWord);
}
