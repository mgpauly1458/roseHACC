const React = require('react');
import HikeCard from './HikeCard.jsx';

class HikeList extends React.Component {
 
    constructor(props) {
        super(props)
        this.state = {
            hikes: []
        }
    }
  render() {
    return (
        <div id='hike_list' className="p-4 flex-auto flex-col-1 flex-row-auto w-full h-full overflow-y-auto space-y-4 bg-gray-50">
            <div className="flex w-full h-auto flex-row-1 space-x-3 bg-gray-50 justify-left sm:flex-row md:flex-col-1 md:flex-row">
                <ul className="flex justify-left">
                    <i className="fas fa-grip-vertical py-1"></i>
                </ul>
                <p> Sort By </p>
                <select name="sort" id="sort"></select>
                <ul className="flex justify-left">
                    <i className="fas fa-filter py-1"></i>
                </ul>
                <p> Filters </p>
                <select name="filter" id="filter"></select>
                <p> Traffic Time</p>
                <div id="calendar" className=""></div>
            </div>
            {
                this.state.hikes.map((hike) => {
                    console.log(hike.hike_difficulty)
                    return <HikeCard key={hike.hike_id} hike_name={hike.hike_name} 
                                        hike_length = { hike.hike_length } hike_duration = { hike.hike_duration } 
                                        hike_difficulty={ hike.hike_difficulty } hike_rating={hike.hike_rating} />
                })
            }
        </div>
        )
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
