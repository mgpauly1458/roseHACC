const React = require("react")
const ReactDOM = require("react-dom")
import Datetime from 'react-datetime';
import TrafficDateTimePicker from './components/TrafficDateTimePicker.jsx';

import "../node_modules/react-datetime/css/react-datetime.css";

const cal = document.querySelector("#root");
var a_date = cal.classList[0];
var a_time = cal.classList[1];

console.log(a_time);

ReactDOM.render(<TrafficDateTimePicker date_str={a_date} time_str={a_time} />, cal)