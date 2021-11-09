import Datetime from 'react-datetime';
const React = require("react")

const divStyle = {
  zIndex: 1
};

class TrafficDateTimePicker extends React.Component {

  constructor(props) {
      super(props); 
      var date_obj = this.date_string_to_date(this.props.date_str);
      var hrs = this.time_string_to_hours(this.props.time_str);
      var mins = this.time_string_to_minutes(this.props.time_str);
      var new_date = new Date(date_obj.getFullYear(), date_obj.getMonth(), date_obj.getDate(), hrs, mins);
      /*(var date_compact_str = new_date.getMonth() + "/" + new_date.getDay() + "/" + new_date.getFullYear() + " " + new_date.getHours() + ":" + new_date.getMinutes();*/
      console.log(this.props.date_string);

      this.state = {
        date: new_date,
      };
    }
  render() {  
    return (<Datetime 
      style={divStyle}
      inputProps={{ placeholder: "Select date..." }}
      onClose = {new_date => { 
        this.onExit(new_date);       
      }}
      />
    );
  }

  onExit(date) {
    var date_string = this.format_date_mmddyy(date);
    document.location.href = date_string;
  }    

  format_date_mmddyy(date) {
    var date = new Date(date);
    
    var day = date.getDate()+"";
    var month = date.getMonth() + 1 + "";
    var year = date.getFullYear()+"";

    var hours = date.getHours() + "";
    var minutes = date.getMinutes() + "";

    var date_string = this.pad_string(month) + this.pad_string(day) + this.trim_first_two(year) + this.pad_string(hours) + this.pad_string(minutes); 
    return date_string;
  }

  pad_string(the_string) {
    if (the_string.length == 1) {
      return "0" + the_string;
    }
    return the_string;
  }

  trim_first_two(the_string) {
    return the_string.substring(2);
  }

  date_string_to_date(date_string) {
    var month = date_string.substring(0,1);
    var day = date_string.substring(2,3);
    var year = date_string.substring(4,5);

    var date = new Date(year, month, day);
    return date;
  }

  time_string_to_hours(time_string) {
    var hours = time_string.substring(6,7);
    return hours;
  }

  time_string_to_minutes(time_string) {
    var minutes = time_string.substring(8,9);
    return minutes;
  }
}


export default TrafficDateTimePicker;