const React = require('react');

class HikePopout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hike: this.props.hike,
            hike_id: this.props.hike_id,
            hike_title: this.props.hike_title,
            hike_image: this.props.hike_image,
            hike_rating: this.props.hike_rating,
            hike_difficulty: this.props.hike_difficulty,
            hike_traffic: this.props.hike_traffic,
            hike_elevation: this.props.hike_elevation,
            hike_length: this.props.hike_length,
            hike_duration: this.props.hike_duration,
            hike_attributes: this.props.hike_attributes,
            hike_route_description: this.props.hike_route_description,
            hike_description: this.props.hike_description,            
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
                            <h1 id="hike_title" className="text-2xl font-bold text-center"> Diamond Head Crater Hike </h1>
                        </div>
                        <div className='flex justify-center rounded-full py-3 gap-3'>
                            <img id="hike_image" className="transform w-3/4 h-full rounded-full border-8 transition ease-in-out duration-500 border-gray-100 hover:scale-105 hover:border-indigo-500" src=""></img>
                        </div>
                        <div className='flex justify-center'>
                            <ul className="flex justify-center space-x-2">      
                                <h1> Rating </h1>                  
                                <li className="flex justify-center space-x-2" id="hike_rating">                
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-row justify-center gap-4'>
                            <div className='flex justify-center'>   
                                <h id="hike_difficulty" className="rounded-md border border-gray-100 bg-gray-100 px-2"></h>
                            </div>
                            <div className='flex justify-center'>
                                <ul className="flex justify-center space-x-2">                      
                                    <h1>Traffic </h1>  
                                    <li className="flex justify-center space-x-2" id="hike_traffic">                
                                    </li>
                                </ul>
                            </div>
                        </div>     
                        <div className="px-4 grid grid-cols-3 divide-x divide-indigo-500">
        
                            <div className="text-center text-xl"></div>
                            <div className="text-center text-xl"></div>
                            <div className="text-center text-xl"></div>
        
                            <div id='hike_elevation' className="text-center text-xl">
                            </div>
                            <div id='hike_length' className="text-center text-xl"> 
                            </div>
                            <div id='hike_duration' className="text-center text-xl"> 
                            </div>
                        
                        </div>
                        <div className='flex flex-row justify-center gap-1'>   
                            <p id="hike_attributes" className="px-1"></p>
                        </div>    
                        <div className="h-full border border-l-0 border-r-0 border-t-4 border-b-0 border-gray-100 px-2 ">
                            <div className='w-full h-full justify-center px-2 gaps-4'>   
                                <h1 className="text-2xl font-medium">Route</h1>
                                <p id="hike_route_description" className="text-xl px-8 py-4 border border-l-4 border-r-0 border-t-0 border-b-0 border-indigo-500 shadow-md rounded-lg"></p>
                                <h1 className="text-2xl font-medium  py-2">Description</h1>
                                <p id="hike_description" className="text-xl px-8 py-4 border border-l-4 border-r-0 border-t-0 border-b-0 border-indigo-500 shadow-md rounded-lg"></p>
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
}

export default HikePopout;
