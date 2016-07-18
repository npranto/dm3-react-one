import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import "./index.css"

document.addEventListener("DOMContentLoaded", ()=>{
	const reactNode = document.getElementById("react-node");
	if (reactNode) {
		ReactDOM.render(
			<div className = "wrapper">
				<h1>Hello World!</h1>
				<h3>Hello World!</h3>

				{
					/* <p>This is how you comment</p> */
				}

				<App />
			</div>

		, reactNode)
	}
})

