import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Navbar from "./components/Navbar/Navbar";
// import ChartApp from "./components/Dashboard/Chart/ChartApp";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
