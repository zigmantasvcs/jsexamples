// Create a function which accepts an array. Array contains person name, weight in kilograms, height in meters. Function should return calculated body mass index. body mass index formula: mass/height*height.

function getBodyMassIndex(data){
    return data[1]/(data[2] * data[2]);
}