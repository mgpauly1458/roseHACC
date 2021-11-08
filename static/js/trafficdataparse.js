function getTraffic(trafficdatastring) {
    var trafficdata = JSON.parse(trafficdatastring);
    return trafficdata
}

export { getTraffic }