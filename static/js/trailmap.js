var mymap;

function setupLeafletMap() {
    var origin = [21.481056406745278, -157.95845361227276];
    var zoom = 11;

    var currentdate = new Date();
    var datearray = getFormattedDateTime(currentdate)

    var date = datearray[0];
    var time = datearray[1];

    var num_people_n = timeParse(time);

    mymap = L.map('map', {
        renderer: L.canvas({ tolerance: 14 })
        }).setView(origin, zoom);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/outdoors-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiYWFrZW1vdG8iLCJhIjoiY2t2bHF1eGVhOWZtdDJwcGdwZWtoMmQ3bCJ9.l2t-FRs7-6a6G3MPgTfowg'
        }).addTo(mymap);
        
    updateMap(mymap, date, num_people_n);
}

function showMapFromDateTime(date, time) {
    var parseTime = time/100
    var slot = Math.floor(parseTime / 4) + 1;
    var num_people_n = 'num_people_' + slot;
    updateMap(mymap, date, num_people_n)
}

function updateMapFocus(map, hike_id) {
    changeMapOrigin(map, hike_id)
}

function changeMapOrigin(map, hike_id){

    var selectedHike = Trails.features.filter(t=>t.properties.HIKEID === parseInt(hike_id));

    if(selectedHike[0].geometry.type == "LineString"){
        var originCoords = selectedHike[0].geometry.coordinates[0];
    }
    if(selectedHike[0].geometry.type == "MultiLineString"){
        var originCoords = selectedHike[0].geometry.coordinates[0][0];
    }

    map.flyTo([originCoords[1],originCoords[0]], 14);  
}
    
async function updateMap(mymap, date, timeSlot){
    
        window.mymap.eachLayer(function(layer) {
            if (!!layer.toGeoJSON) {
                window.mymap.removeLayer(layer);
            }
        });
        
        var trafficdata;

        var url = '/getTrafficData/' + String(date)

        trafficdata = await fetch(url).then(response => response.json()).then(data => data)

        var traffic = "NULL"

        console.log(trafficdata)

        //console.log(Trails)

        L.geoJSON(Trails, {
            onEachFeature: onEachFeature,
            style: function(features){
                switch (traffic) {
                    case 'HEAVY': return {color: "#ff0000", weight: 5, opacity: 0.8};
                    case 'MEDIUM': return {color: "#FFC300", weight: 5, opacity: 0.8};
                    case 'LIGHT':   return {color: "#008000", weight: 5, opacity: 0.8};
                    }
                },
            }).addTo(window.mymap);
      
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
      
          var trailhead = L.marker([startCoords[1],startCoords[0]], {icon: greenIcon}).addTo(window.mymap);
  
          trailhead.bindPopup(feature.properties.Trailname + "<br><center>Trailhead", customOptions);

          var numpeople = trafficdata.find(t=>t.hike_id-1 === feature.properties.HIKEID)[timeSlot];
  
          if(numpeople < 20){
                  traffic = "LIGHT"
              } else if (numpeople < 50) {
                  traffic = "MEDIUM"
              } else {
                  traffic = "HEAVY"
              }
      }
          
  }

  function format_date_mmddyy(date) {
    var day = date.getDate()+"";
    var month = date.getMonth() + 1 + "";
    var year = date.getFullYear()+"";

    var hours = date.getHours() + "";
    var minutes = date.getMinutes() + "";

    var date_string = this.pad_string(month) + this.pad_string(day) + this.trim_first_two(year) + ":" + this.pad_string(hours) + this.pad_string(minutes); 
    return date_string;
  }

  function pad_string(the_string) {
    if (the_string.length == 1) {
      return "0" + the_string;
    }
    return the_string;
  }

  function trim_first_two(the_string) {
    return the_string.substring(2);
  }

  function getFormattedDateTime(date) {
    var year = date.getFullYear() % 100;
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    hours = date.getHours()

    if(date.getMinutes() != 0){
        if(hours != 24){
            hours = date.getHours() + 1
        } else {
            hours = 1
        }
    }
    
    return [month + day + year, hours*100];
  }

function timeParse(time){
    var parseTime = time/100
    var slot = Math.floor(parseTime / 4) + 1;
    var num_people_n = 'num_people_' + slot;
    return num_people_n
}
