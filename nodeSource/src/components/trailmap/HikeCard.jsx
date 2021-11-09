const React = require('react');

class HikeCard extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      hike_id: this.props.hike_id,
      hike_name: this.props.hike_name,
      hike_rating: this.props.hike_rating,
      hike_distance: this.props.hike_distance,
      hike_duration: this.props.hike_duration,
      hike_difficulty: this.props.hike_difficulty,
      hike_traffic: this.props.hike_traffic,
      hike_description: this.props.hike_description,
      hike_route: this.props.hike_route
    }
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <button className="transition-all duration-200 ease-in-out w-full h-auto bg-white border-4 border-white rounded-md px-3 hover:border-white-100 shadow hover:border-indigo-500 text-left">
        <div className="flex flex-row-1 space-x-3 justify-right">
            <h><b> { this.props.hike_name } </b></h>
        </div> 
        <div className="flex flex-row-1 space-x-3">
            <p> Average Rating </p>
            <ul className="flex justify-center">                        
                <li className="flex justify-center space-x-2" id="hike-rating">                
                </li>
            </ul>
        </div>
        <div className="flex flex-row-1 space-x-2">
            <i className="fas fa-hiking justify-center py-1"></i> 
            <div className="flex flex-row bg-gray-100 px-2 rounded-md">
                <p className=""> { this.props.hike_length } km / { this.props.hike_duration } min </p>   
                <p className="px-2" id="hike_duration_inline_hikeid" className  =""></p>
            </div>
            <div className="rounded-md border border-gray-100 bg-gray-100 px-2"> Difficulty: { this.props.hike_difficulty } / 5 </div>
            {
              console.log( this.props.hike_difficulty )
            }
        </div>
        <div className="flex flex-row-1 space-x-3">
            Traffic Level
            <ul className="flex justify-center">                        
                <li className="flex justify-center space-x-2" id="hike-traffic">                
                </li>
            </ul>
        </div>
        </button>
    );
  }
}
export default HikeCard;
