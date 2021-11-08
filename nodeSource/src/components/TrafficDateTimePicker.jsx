import Datetime from 'react-datetime';
const React = require("react")

const divStyle = {
  zIndex: 1001
};

class TrafficDateTimePicker extends React.Component {
  render() {
    return (<Datetime 
      style={divStyle}
      placeHolderText="Select Date"
      onChange={date => { this.onChanged(date) }}
    />);
  }

  onChanged(data) {
    var date_string = this.format_date_mmddyy(data);
    document.location.href = date_string;
  }    

  format_date_mmddyy(date) {
    var date = new Date(date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear() + "";
    var year_trimmed = this.trim_first_two(year);

    var date_string = month + "" + "" + day + "" + year_trimmed; 
    return date_string;
  }

  trim_first_two(string) {
    return string.substring(2);
  }
}


export default TrafficDateTimePicker;