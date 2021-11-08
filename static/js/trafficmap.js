import { Trails } from './trails.js'

function showMap(coordinate, zoom, trafficdata, timeSlot){

    var traffic = "NULL"
    
    function onEachFeature(feature, layer) {

        var greenIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
            });
        
        var customOptions =
            {
                'maxWidth': '400',
                'width': '200',
                'className' : 'popupCustom'
            }

        if (feature.properties && feature.properties.Trailname && feature.properties.TRAFFIC) {
            layer.bindPopup(feature.properties.Trailname, customOptions);
        }
        if (feature.properties && feature.geometry.type == "LineString"){
            var startCoords = feature.geometry.coordinates[0];
        }
        if (feature.properties && feature.geometry.type == "MultiLineString"){
            var startCoords = feature.geometry.coordinates[0][0];
        }
    
        var trailhead = L.marker([startCoords[1],startCoords[0]], {icon: greenIcon}).addTo(mymap);

        trailhead.bindPopup(feature.properties.Trailname + "<br><center>Trailhead", customOptions);

        var numpeople = trafficdata.find(t=>t.fields.hikeID === feature.properties.HIKEID).fields[timeSlot];

        if(numpeople < 20){
                traffic = "LIGHT"
            } else if (numpeople < 50) {
                traffic = "MEDIUM"
            } else {
                traffic = "HEAVY"
            }
    }

    var mymap = L.map('map', {
            renderer: L.canvas({ tolerance: 14 })
        }).setView(coordinate, zoom);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/outdoors-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiYWFrZW1vdG8iLCJhIjoiY2t2bHF1eGVhOWZtdDJwcGdwZWtoMmQ3bCJ9.l2t-FRs7-6a6G3MPgTfowg'
        }).addTo(mymap);

    L.geoJSON(Trails, {
        onEachFeature: onEachFeature,
        style: function(features){
            switch (traffic) {
                case 'HEAVY': return {color: "#ff0000", weight: 5, opacity: 0.8};
                case 'MEDIUM': return {color: "#FFC300", weight: 5, opacity: 0.8};
                case 'LIGHT':   return {color: "#008000", weight: 5, opacity: 0.8};
                }
            },
        }).addTo(mymap);
        
}

export { showMap }
