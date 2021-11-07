var trafficdatastring = '{{ traffic_data|safe }}'

var trafficdata = JSON.parse(trafficdatastring);

function getTraffic(hikeID, date) {
    return trafficdata.filter(
            function(trafficdata){ return trafficdata.fields.hikeID == hikeID && trafficdata.fields.date == date}
    );
}