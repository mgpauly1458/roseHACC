import Datetime from 'react-datetime';
const React = require("react")

const divStyle = {
  zIndex: 1001
};

class TrafficDateTimePicker extends React.Component {
  render() {
    return (<Datetime 
      style={divStyle}
      onChange={date => { this.onChanged(date); }}
    />);
  }

  onChanged(date) {
    var date_string = this.format_date_mmddyy(date);
    document.location.href = date_string;
  }    

  format_date_mmddyy(date) {
    var date = new Date(date);
    
    var day = date.getDate()+"";
    var month = date.getMonth() + 1 + "";
    var year = date.getFullYear()+"";

    var date_string = this.pad_string(month) + this.pad_string(day) + this.trim_first_two(year); 
    return date_string;
  }

  pad_string(the_string) {
    console.log(the_string);
    if (the_string.length == 1) {
      return "0" + the_string;
    }
    return the_string;
  }

  trim_first_two(the_string) {
    return the_string.substring(2);
  }
}


export default TrafficDateTimePicker;