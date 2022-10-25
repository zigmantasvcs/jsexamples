// Create a function which access flight data. Call fetch with url “http://zigmantas.codingschoolprojektai.lt/api/index.php?data=flightData”. Your function should accept data from API. Function should find all flights which has luggage options. It is enough just to log your findings (new object array) to console.

function getFlightData() {
    fetch("http://zigmantas.codingschoolprojektai.lt/api/index.php?data=flightData")
        .then(response => response.json())
        .then(data => filterFlightsWithLuggage(data))
        .then(filteredData => console.log(filteredData))
}

function filterFlightsWithLuggage(data){
    return data.flightData.filter(flight => flight.luggageOptions.length > 0);
}