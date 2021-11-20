const React = require('react');
import TrafficDateTimePicker from './TrafficDateTimePicker.jsx';
import HikeCard from './HikeCard.jsx';
import HikePopout from "./HikePopout.jsx";
import SearchBar from './SearchBar.jsx';

class HikeList extends React.Component {
 
    constructor(props) {
        super(props)
        this.state = {
            hikes: [],
            popoutOpen: false,
            hikeOpened: {},
            search: false
        }
        this.hikeListRef = React.createRef();
        this.popoutRef = React.createRef();
    }
    render() {
    return (
        <div class="h-full">
            <div id='hike-list' ref={this.hikeListRef} class="flex flex-col h-full p-4 overflow-y-auto space-y-4 bg-gray-50 lg:w-full w-full">  
                <div class = "flex w-full h-auto bg-gray-50 justify-left lg:flex-row flex-col space-y-3 lg:space-y-0 lg:space-x-3">
                    <div class="flex flex-row gap-4">
                        <ul class="flex justify-left">
                            <i class="fas fa-map-marker-alt py-1"></i>
                        </ul>
                        <p>Search</p>
                        <SearchBar/>
                    </div>
                    <div class="flex flex-row gap-4">
                        <ul class="flex justify-left">
                                <i class="fas fa-calendar-alt py-1"></i>
                            </ul>
                        <p> Traffic Time</p>
                        <TrafficDateTimePicker/>
                    </div>
                    
                </div>
                <div>
                {
                    this.state.hikes.map((hike) => {
                        var a_hike = { ...hike };
                        if(this.state.search == true) {
                            if(!hike.name.toLowerCase().includes(search)) {
                                return <HikeCard parentCallback={this.openPopoutCallback } 
                                            key= { hike.hike_id } 
                                            hike =  { a_hike }
                                        />
                            }
                            this.state.search = false;
                        } else {
                            return <HikeCard parentCallback={this.openPopoutCallback } 
                                        key= { hike.hike_id } 
                                        hike =  { a_hike }
                                    />
                        }
                        
                    })
                }
                </div>
            </div> 
            <div id="hike-popout" class="h-full w-full hidden" ref={this.popoutRef}>
                <HikePopout parentCallback= {this.closePopoutCallback} hike= { this.state.hikeOpened }/>
            </div>
        </div>
        
    )
   } 
            

    openPopoutCallback = (hikeData) => {
        this.setState({
            popoutOpen: true,
            hikeOpened: hikeData
        })
        this.openPopout();
    }

    closePopoutCallback = () => {
        this.setState({
            popoutOpen: false,
            hikeOpened: {}
        })
        this.closePopout();
    }

    openPopout() {
        this.popoutRef.current.classList.remove('hidden');
        this.hikeListRef.current.classList.add('hidden');
    }

    closePopout() {
        this.hikeListRef.current.classList.remove('hidden');
        this.popoutRef.current.classList.add('hidden');
    }

    componentDidMount() {
        this.get_hike_data();
    }
        
    get_hike_data() {
        fetch('/getHikeData')
        .then(response => response.json())
        .then(data => {
            this.setState({
                hikes: data
            })
        })
    }

    

}
export default HikeList;
