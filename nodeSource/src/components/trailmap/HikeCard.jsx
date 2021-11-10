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
    return(
          <button onClick= { this.sendData }  class="transition-all duration-200 ease-in-out w-full h-auto bg-white border-4 border-white rounded-md px-3 hover:border-white-100 shadow hover:border-indigo-500 text-left">
            <div class="flex flex-row-1 space-x-3 justify-right">
                <h><b> HIKE NAME </b></h>
            </div> 
            <div class="flex flex-row-1 space-x-3">
                <p> Average Rating </p>
                <ul class="flex justify-center">                        
                    <li class="flex justify-center space-x-2" id="{{hike.id}}-rating">                
                    </li>
                </ul>
            </div>
            <div class="flex flex-row-1 space-x-2">
                <i class="fas fa-hiking justify-center py-1"></i> 
                <div class="flex flex-row bg-gray-100 px-2 rounded-md">
                    <p class=""> km / </p>   
                    <p class="px-2" id="hike_duration_inline_{{hike.id}}" class=""></p>
                </div>
    
                <h class="rounded-md border border-gray-100 bg-gray-100 px-2">Difficulty: / 5 </h>
            </div>
            <div class="flex flex-row-1 space-x-3">
                <ul class="flex justify-center">                        
                    <li class="flex justify-center space-x-2" id="{{hike.id}}-traffic">                
                    </li>
                </ul>
            </div>
          </button>

    );
  }

  sendData = () => {
    this.props.parentCallback(true);
  }

  add_stars() {
    let stars = [];
    for (let i = 0; i < this.props.hike_rating; i++) {
      stars.push(<i className="fas fa-star text-yellow-300 fa-xs py-1"></i>);
    }
    for (let i = 0; i < 5 - this.props.hike_rating; i++) {
      stars.push(<i className="far fa-star text-yellow-300 fa-xs py-1"></i>);
    }
    return stars;
  }
}
export default HikeCard;
