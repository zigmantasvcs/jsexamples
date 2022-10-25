// Create the function which accepts flight object. Flight properties can be outbound, inbound, outboundDateTime, inboundDateTime. Function should collect information and return information for example: “Flight from STO (2022-11-01 10:00:00) to LON (2022-11:01 11:00:00)”. If flight is null or not defined throw an exception. Call the function in try catch block.

function printFlightInformation(flight){
    if(flight == null || flight == undefined){
        throw "Flight should be defined.";
    }

    return `Flight from ${flight.outbound} ${flight.outboundDateTime} to ${flight.inbound} ${flight.inboundDateTime}`;
}