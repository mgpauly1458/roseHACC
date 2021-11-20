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
            filteredHikes: [],
            popoutOpen: false,
            hikeOpened: {},
            searchQuery: ""
        }
        this.hikeListRef = React.createRef();
        this.popoutRef = React.createRef();
    }

    render() {

        return (
            <div className="h-full">
                <div id='hike-list' ref={this.hikeListRef} class="flex flex-col h-full p-4 overflow-y-auto space-y-4 bg-gray-50 lg:w-full w-full">  
                    <div className = "flex w-full h-auto bg-gray-50 justify-left lg:flex-row flex-col space-y-3 lg:space-y-0 lg:space-x-3">
                        <div class="flex flex-row gap-4">
                            <ul class="flex justify-left">
                                <i class="fas fa-map-marker-alt py-1"></i>
                            </ul>
                            <p>Search</p>
                            <SearchBar parentCallback={this.onSearchCallback}/>
                        </div>
                        <div class="flex flex-row gap-4">
                            <ul class="flex justify-left">
                                    <i class="fas fa-calendar-alt py-1"></i>
                                </ul>
                            <p> Traffic Time</p>
                            <TrafficDateTimePicker/>
                        </div>
                        
                    </div>
                    <div className="flex flex-col gap-3">
                    {
                        this.state.filteredHikes.map((hike) => {
                            var a_hike = { ...hike };
                            return <HikeCard parentCallback={this.openPopoutCallback } 
                                        key= { a_hike.hike_id } 
                                        hike =  { a_hike }
                            />
                        })
                    }
                    </div>
                </div> 
                <div id="hike-popout" class="h-full w-full hidden" ref={this.popoutRef}>
                    <HikePopout parentCallback= {this.closePopoutCallback} hike={ this.state.hikeOpened }/>
                </div>
            </div>
        )
   } 
   
    componentDidMount() {
        this.getHikeData();
    }
        
    getHikeData() {
        fetch('/getHikeData')
        .then(response => response.json())
        .then(data => {
            this.setState({
                hikes: data,
                filteredHikes: data
            })
        })
    }

    onSearchCallback = (query) => {
         this.setState({
            search: true,
            searchQuery: query
         })     
        this.filterCards(query);
    }       

    filterCards(query) {
        var hikes = this.state.hikes;
        var filtHikes = [];
        for (var i = 0; i < hikes.length; i++) {
            if (hikes[i].hike_name.toLowerCase().includes(query.toLowerCase())) {
                filtHikes.push(hikes[i]);
            }
        }
        this.setState({
            filteredHikes: filtHikes
        })
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


}
export default HikeList;
