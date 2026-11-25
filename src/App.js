import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather />
				<footer>
					This project was coded by Cameron Meinsma and is{" "}
					<a
						href="https://github.com/Cameron-Meinsma/react-weather-app.git"
						target="_blank"
						rel="noreferrer"
					>
						open-sourced on GitHub
					</a>
				</footer>
			</div>
		</div>
	);
}
