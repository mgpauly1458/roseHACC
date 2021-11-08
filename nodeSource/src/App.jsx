const React = require("react")
const ReactDOM = require("react-dom")
import Datetime from 'react-datetime';
import TrafficDateTimePicker from './components/TrafficDateTimePicker.jsx';

import "../node_modules/react-datetime/css/react-datetime.css";

const root = document.getElementById("root")
ReactDOM.render(<TrafficDateTimePicker/>, root)