import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import App from "./app";
import "./css/bootstrap.css";
import "./css/responsive.css";
import "./css/ui.css";
import "./fonts/fontawesome/css/all.css";
import "./fonts/material-icons/material-icons.css";
import "./fonts/roboto/font.css";

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
