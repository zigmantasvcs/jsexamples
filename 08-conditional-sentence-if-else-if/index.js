// Write a function which accepts temperature. Function should write in words text if the following conditions are met:
// -20 and less - "Very cold".
// -20 and 0 (not included) - "Cold"
// 0 and 5 (not included) - "Better"
// 5 and 15 (not included) - "Warm"
// 15 and 25 (not included) - "Hot"
// 25 and more - "Very hot"
// Call the function to test results.

function describeTemperature(temperature){
    if(isNaN(temperature)){
        document.write("\"" + temperature + "\" is not a number. Please provide number.<br>");
        return;
    }

    if(temperature <= -20){
        document.write("Very cold<br>");
    } else if(temperature > -20 && temperature < 0){
        document.write("Cold<br>");
    } else if(temperature >= 0 && temperature < 5){
        document.write("Better<br>");
    } else if(temperature >= 5 && temperature < 15){
        document.write("Warm<br>");
    } else if(temperature >= 15 && temperature < 25){
        document.write("Hot<br>");
    } else {
        document.write("Very hot<br>");
    }
}
