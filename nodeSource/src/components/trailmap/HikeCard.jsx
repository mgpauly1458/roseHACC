const React = require("react")
import Datetime from 'react-datetime';
const React = require("react")

const divStyle = {
  zIndex: 1001
};

class HikeCard extends React.Component {
  render() {
    return (
      <div className="card">

      </div>
    );
  }
}

function update_card_info(props) {
    var hike_name = props.hike_name;
    var hike_difficulty = props.hike_difficulty;
    var hike_distance = props.hike_distance;
    var hike_duration = props.hike_duration;
    var hike_elevation = props.hike_elevation;
    var hike_rating = props.hike_rating;
    
}

export default MyDateTimePicker;
