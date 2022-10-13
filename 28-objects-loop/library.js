// Write a function which checks if specific key in the function exist. If key exist true should be returned otherwise false returned.
function doesKeyExistInTheObject(object, keyToFind){
    for (const key in object) {
        if(key == keyToFind) {
            return true;
        }
    }
    return false;
}