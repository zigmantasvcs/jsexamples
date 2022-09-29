// Write a function which accepts an array of text elements. Function should print array elements into the list. Use <ul> and <li> elements for it. Use for loop.
function printArrayIntoTheList(array){
    document.write("<ul>");

    for (let index = 0; index < array.length; index++) {
        document.write("<li>" + array[index] + "</li>");
    }

    document.write("</ul>");
}