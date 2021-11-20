const React = require('react');

class HikePopout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hike: this.props.hike,
        };
    }

    render() {                  
        return  (
            <div id='hike-popout' className="flex flex-col w-full border-4 border-white px-3 overflow-y-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                <div className="flex flex-col-auto w-full">
                    <button onClick={ this.sendData } className="transform transition-transform duration-500 hover:border-3 hover:scale-110 rounded-md w-10 h-10 flex flex-row " >
                        <i className="py-2 fas fa-arrow-left fa-lg"></i>
                    </button>
                </div>
                <div id="hike-popout-info" className="flex flex-col w-full h-full">
                    <div id="hike-info" className="flex flex-col w-full justify-center gap-4">
                        <div className='flex w-full justify-center py-3'>
                            <h1 id="hike_title" className="text-2xl font-bold text-center"> { this.props.hike.hike_name } </h1>
                        </div>
                        <div className='flex justify-center rounded-full py-3 gap-3'>
                            <img id="hike_image" className="transform w-3/4 h-full rounded-full border-8 transition ease-in-out duration-500 border-gray-100 hover:scale-105 hover:border-indigo-500" src= { this.props.hike.hike_images }></img>
                        </div>
                        <div className='flex justify-center'>
                            <ul className="flex justify-center space-x-2">      
                                <h1> Rating </h1>                  
                                <li className="flex justify-center space-x-2" id="hike_rating">  
                                { 
                                    this.add_stars()
                                }           
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-row justify-center gap-4'>
                            <div className='flex justify-center'>   
                                <h id="hike_difficulty" className="rounded-md border border-gray-100 bg-gray-100 px-2">
                                    Difficulty: { this.props.hike.hike_difficulty } / 5
                                </h>
                            </div>
                        </div>     
                        <div className="px-4 grid grid-cols-3 divide-x divide-indigo-500">
        
                            <div className="text-center text-xl"></div>
                            <div className="text-center text-xl"></div>
                            <div className="text-center text-xl"></div>
        
                            <div id='hike_elevation' className="text-center text-xl">
                                 <p>Elevation Gain</p>
                                {this.props.hike.hike_elevation} m
                            </div>
                            <div id='hike_length' className="text-center text-xl"> 
                                <p> Hike Length </p>    
                                { this.props.hike.hike_length } km 
                            </div>
                            <div id='hike_duration' className="text-center text-xl"> 
                                <p> Time </p>
                                { 
                                    this.convert_time(this.props.hike.hike_duration)
                                }
                            </div>
                        
                        </div>
                        <div className='flex flex-row justify-center gap-1'>   
                            <p id="hike_attributes" className="px-1">{ this.props.hike.hike_attributes}</p>
                        </div>    
                        <div className="h-full border border-l-0 border-r-0 border-t-4 border-b-0 border-gray-100 p-2 ">
                            <div className='w-full h-full justify-center px-2 gaps-4'>   
                                <h1 className="text-2xl font-medium">Route</h1>
                                <p id="hike_route_description" className="text-xl px-8 py-4 border border-l-4 border-r-0 border-t-0 border-b-0 border-indigo-500 shadow-md rounded-lg">{ this.props.hike.hike_route}</p>
                                <h1 className="text-2xl font-medium  py-2">Description</h1>
                                <p id="hike_description" className="text-xl px-8 py-4 border border-l-4 border-r-0 border-t-0 border-b-0 border-indigo-500 shadow-md rounded-lg"> { this.props.hike.hike_description}</p>
                            </div>                   
                        </div> 
                    </div>
                </div>           
            </div>
        );    
    }
    sendData = () => {
        this.props.parentCallback(false);
    }
    
    // Convert minutes to hours and minutes
    convert_time (time) {
        let hours = Math.floor(time / 60);
        let minutes = time % 60;
        return hours + "h " + minutes + "m";
    }

    add_stars() {
        let stars = [];
        for (let i = 0; i < this.props.hike.hike_rating; i++) {
            stars.push(<i className="fas fa-star text-yellow-300 fa-xs py-1"></i>);
        }
        for (let i = 0; i < 5 - this.props.hike.hike_rating; i++) {
            stars.push(<i className="far fa-star text-yellow-300 fa-xs py-1"></i>);
        }
        return stars;
    }
}

export default HikePopout;
