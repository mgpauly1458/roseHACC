const React = require('react');
import HikeCard from './HikeCard.jsx';
import HikePopout from "./HikePopout.jsx";

class HikeList extends React.Component {
 
    constructor(props) {
        super(props)
        this.state = {
            hikes: [],
            popoutOpen: false
        }
        this.hikeListRef = React.createRef();
        this.popoutRef = React.createRef();
    }
  render() {
    return (
        <div>
            <div id='hike-list' ref={this.hikeListRef} class="flex flex-col h-full p-4 overflow-y-auto space-y-4 bg-gray-50 lg:w-full w-full">  
                <div class = "flex w-full h-auto space-x-3 bg-gray-50 justify-left lg:flex-row flex-col ">
                    <ul class="flex justify-left">
                        <i class="fas fa-grip-vertical py-1"></i>
                    </ul>
                    <p> Sort By </p>
                    <select name="sort" id="sort"></select>
                    <ul class="flex justify-left">
                        <i class="fas fa-filter py-1"></i>
                    </ul>
                    <p> Filters </p>
                    <select name="filter" id="filter"></select>
                    <p> Traffic Time</p>
                </div>
                <HikeCard parentCallback={this.popoutCallback} />
                <HikeCard/>
                <HikeCard/>
                <HikeCard/>
            </div> 
            <div id="hike-popout" ref={this.popoutRef}>
                <HikePopout parentCallback={this.popoutCallback}/>
            </div>
        </div>
        
    )
   } 
            

    popoutCallback = (childData) => {
        this.setState({
            popoutOpen: childData
        })

        if(!childData) {
            this.hikeListRef.current.classList.remove('hidden');
            this.popoutRef.current.classList.add('hidden');
        } else {           
            this.popoutRef.current.classList.remove('hidden');
            this.hikeListRef.current.classList.add('hidden');
        }

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
