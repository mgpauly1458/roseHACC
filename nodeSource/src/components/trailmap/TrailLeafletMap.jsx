import React from 'react';

class TrailLeafletMap extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
            <div id="map" class="flex h-full w-full"></div>
        )
    }

    componentDidMount() {
        this.setupLeafletMap();
    }

    setupLeafletMap() {
        var origin = [21.481056406745278, -157.95845361227276];
        var zoom = 11;
    
        var currentdate = new Date();
        var datearray = getFormattedDateTime(currentdate)
    
        var date = datearray[0];
        var time = datearray[1];
    
        var num_people_n = timeParse(time);
    
        var mymap = L.map('map', {
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

    showMapFromDateTime(date, time) {
        var parseTime = time/100
        var slot = Math.floor(parseTime / 4) + 1;
        var num_people_n = 'num_people_' + slot;
        updateMap(map, date, num_people_n)
    }

    updateMapFocus(map, hike_id) {
        changeMapOrigin(map, hike_id)
    }
}

export default TrailLeafletMap;