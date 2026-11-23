import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather city="Los Angeles" units="metric" />
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
