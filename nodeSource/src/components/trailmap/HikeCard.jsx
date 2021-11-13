const React = require('react');

class HikeCard extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      hike: this.props.hike
    }
  }

  componentDidMount() {

  }
  
  render() {
    return(
          <button onClick= { this.sendData }  class="transition-all duration-200 ease-in-out w-full h-auto bg-white border-4 border-white rounded-md px-3 hover:border-white-100 shadow hover:border-indigo-500 text-left">
            <div class="flex flex-row-1 space-x-3 justify-right">
              <h><b> { this.props.hike.hike_name } </b></h>
            </div> 
            <div class="flex flex-row-1">
                <ul className="flex justify-center space-x-2">  
                <p >  Rating   </p>                      
                <li className="flex justify-center space-x-2" id="hike-rating">        
                {
                  this.add_stars()
                }        
                </li>
            </ul> 
            </div>
            <div class="flex flex-row-1 space-x-2">
                <i class="fas fa-hiking justify-center py-1"></i> 
                <div class="flex flex-row bg-gray-100 px-2 rounded-md">
                  <p className=""> { this.props.hike.hike_length } km / { this.props.hike.hike_duration } min </p>   
                  <p className="px-2" id="hike_duration_inline_hikeid" className  =""></p>
                </div>
    
                <div className="rounded-md border border-gray-100 bg-gray-100 px-2"> Difficulty: { this.props.hike.hike_difficulty } / 5 </div>
            </div>
            <div class="flex flex-row-1 space-x-3">
                <ul class="flex justify-center">                        
                    <li class="flex justify-center space-x-2" id="">                
                    </li>
                </ul>
            </div>
          </button>

    );
  }

  sendData = () => {
    this.props.parentCallback(this.props.hike);
  }

  add_stars() {
    let stars = [];
    for (let i = 0; i < this.props.hike.hike_rating; i++) {
      stars.push(<i className="fas fa-star text-yellow-300 fa-xs py-2 inline-block"></i>);
    }
    for (let i = 0; i < 5 - this.props.hike.hike_rating; i++) {
      stars.push(<i className="far fa-star text-yellow-300 fa-xs py-2 inline-block"></i>);
    }
    return stars;
  }
}
export default HikeCard;
