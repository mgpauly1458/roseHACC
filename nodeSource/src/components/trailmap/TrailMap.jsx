import React from 'react';
import TrailLeafletMap from './TrailLeafletMap.jsx';
import HikeList from './HikeList.jsx';

class TrailMap extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
            <div className="trail-map absolute flex flex-col h-full w-full bg-white lg:flex-row"> 
                <div class="w-full lg:w-1/4 h-full" id="hike-list-container">
                    <HikeList/>
                </div>
                <div class="w-full lg:w-3/4 h-full" id="map-container">
                    <TrailLeafletMap/>
                </div>
            </div>
        )
    }
}

export default TrailMap;