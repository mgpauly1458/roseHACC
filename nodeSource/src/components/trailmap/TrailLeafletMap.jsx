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
        setupLeafletMap();
    }
}

export default TrailLeafletMap;