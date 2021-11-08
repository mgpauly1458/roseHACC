const React = require("react")
const ReactDOM = require("react-dom")
import Datetime from 'react-datetime';
import TrafficDateTimePicker from './components/TrafficDateTimePicker.jsx';

import "../node_modules/react-datetime/css/react-datetime.css";

const cal = document.querySelector("#root");
ReactDOM.render(<TrafficDateTimePicker/>, cal)