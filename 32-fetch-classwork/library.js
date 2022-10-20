// Create a function which access flight data. Call fetch with url “http://zigmantas.codingschoolprojektai.lt/api/index.php?data=flightData”. Your function should accept data from API. Function should create array of strings. Strings are sentences from flight information… For example: Flight from STO to LON is on Wednesday.

function processFlightData() {
    fetch("http://zigmantas.codingschoolprojektai.lt/api/index.php?data=flightData")
        .then(response => response.json())
        .then(data => createSentencesFromTheFlightDataV2(data.flightData))
        .then(convertedData => console.log(convertedData))
        .catch(error => alert("Temporary problem occur. Try again later"));
}

function createSentencesFromTheFlightData(flightData) {
    console.log(flightData);

    let flightArray = [];

    for (const flight of flightData) {
        let weekday = getDayOfWeek(new Date(flight.outboundDateTime).getDay());

        flightArray.push(`Flight from ${flight.outbound} to ${flight.inbound} is on ${weekday}`);
    }

    return flightArray;
}

function createSentencesFromTheFlightDataV2(flightData) {
    return flightData.map(flight => {
        let weekday = getDayOfWeek(new Date(flight.outboundDateTime).getDay());

        return `Flight from ${flight.outbound} to ${flight.inbound} is on ${weekday}`;
    });
}

function getDayOfWeek(number){
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][number];
}


// Create a function which access pictures data. Call fetch with url “http://zigmantas.codingschoolprojektai.lt/api/index.php?data=pictures”. Your function should accept data from API. Function should filter images with type of sport and print to the page.

function processImages(type) {
    fetch("http://zigmantas.codingschoolprojektai.lt/api/index.php?data=pictures")
        .then(response => response.json())
        .then(data => filterImages(data.pictures, type))
        .then(filteredData => printImages(filteredData))
        .catch(() => alert("Ups"));

}

function filterImages(pictures, type) {
    return pictures.filter(picture => picture.type == type);
}

function printImages(images) {
    images.forEach(image => {
        document.write(`<img src="${image.image}">`);
    });
}