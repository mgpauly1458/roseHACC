const React = require('react');

class HikeCard extends React.Component {
  render() {
    return (
      <button onclick="" class="transition-all duration-200 ease-in-out w-full h-auto bg-white border-4 border-white rounded-md px-3 hover:border-white-100 shadow hover:border-indigo-500 text-left">
        <div class="flex flex-row-1 space-x-3 justify-right">
            <h><b> HIKE NAME </b></h>
        </div> 
        <div class="flex flex-row-1 space-x-3">
            <p> Average Rating </p>
            <ul class="flex justify-center">                        
                <li class="flex justify-center space-x-2" id="hike-rating">                
                </li>
            </ul>
        </div>
        <div class="flex flex-row-1 space-x-2">
            <i class="fas fa-hiking justify-center py-1"></i> 
            <div class="flex flex-row bg-gray-100 px-2 rounded-md">
                <p class=""> Distance km / Duration hr min </p>   
                <p class="px-2" id="hike_duration_inline_hikeid" class=""></p>
            </div>
            <h class="rounded-md border border-gray-100 bg-gray-100 px-2">Difficulty: difficulty / 5 </h>
        </div>
        <div class="flex flex-row-1 space-x-3">
            Traffic Level
            <ul class="flex justify-center">                        
                <li class="flex justify-center space-x-2" id="hike-traffic">                
                </li>
            </ul>
        </div>
        </button>
    );
  }
}
export default HikeCard;
