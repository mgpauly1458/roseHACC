const React = require("react")
const ReactDOM = require("react-dom")

import "../node_modules/react-datetime/css/react-datetime.css";
import HikeList from "./components/trailmap/HikeList.jsx"
/*
const cal = document.querySelector("#root");
var a_date = cal.classList[0];
var a_time = cal.classList[1];

ReactDOM.render(<TrafficDateTimePicker date_str={a_date} time_str={a_time} />, cal)
*/

const card = document.getElementById("hike_list");
ReactDOM.render(<HikeList/>, card)
