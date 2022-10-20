// Create a function which access flight data. Call fetch with url “zigmantas.codingschoolprojektai.lt/api/flightData.json”. Your function should accept data from API. Function should find the flight which duration is shortest and return it. Use your function in fetch and display information about shortest flight.

function processFlightData() {
    fetch("http://zigmantas.codingschoolprojektai.lt/api/index.php?data=flightData")
        .then(response => response.json())
        .then(data => console.log(getShortestDuration(data.flightData)))
}


function getShortestDuration(flights) {
    let shortestTime = new Date(flights[0].inboundDateTime) - new Date(flights[0].outboundDateTime);
    let flightWithShortestTime = {};

    for (const flight of flights) {

        if(new Date(flight.inboundDateTime) - new Date(flight.outboundDateTime) < shortestTime){
            
            shortestTime = new Date(flight.inboundDateTime) - new Date(flight.outboundDateTime);
            flightWithShortestTime = flight;
        }
    }

    return flightWithShortestTime;
}

