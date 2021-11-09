const React = require("react")
const ReactDOM = require("react-dom")
import Datetime from 'react-datetime';
import TrafficDateTimePicker from './components/TrafficDateTimePicker.jsx';

import "../node_modules/react-datetime/css/react-datetime.css";

const cal = document.getElementById("root");

/*
var a_date = cal.innerText.split(" ")[0];
var a_time = cal.innerText.split(" ")[1];*/

ReactDOM.render(<TrafficDateTimePicker/>, cal)
