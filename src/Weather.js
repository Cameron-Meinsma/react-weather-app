import React, { useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo.js";
import UpcomingForecast from "./UpcomingForecast.js";

import "./Weather.css";

import axios from "axios";

export default function Weather() {
	const [unit, setUnit] = useState("metric");

	function changeUnit() {
		if (unit === "metric") {
			setUnit("imperial");
		} else {
			setUnit("metric");
		}
	}
	// UseState
	const [weatherData, setWeatherData] = useState({ loaded: false });
	const [city, setCity] = useState("Los Angeles");

	function seeWeatherData(response) {
		setWeatherData({
			loaded: true,
			temperature: response.data.temperature.current,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
			description: response.data.condition.description,
			date_time: new Date(response.data.time * 1000),
			city: response.data.city,
			country: response.data.country,
			icon_url: response.data.condition.icon_url,
		});
	}

	function getCityWeather() {
		const apiKey = "abd0f73t5848f341e6o2213e8b806178";

		// API current weather
		let apiUrlCurrent = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrlCurrent).then(seeWeatherData);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getCityWeather();
	}

	function searchCity(event) {
		setCity(event.target.value);
	}

	let searchBar = (
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="col-9">
					<input
						type="search"
						placeholder="Enter a city.."
						autoFocus="on"
						onChange={searchCity}
						className="form-control city-search-textbox"
					/>
				</div>
				<div className="col-3">
					<input type="submit" value="Search" className="city-search-btn" />
				</div>
			</div>
		</form>
	);

	const gitHubLink = (
		<footer>
			This project was made with ♥️ by{" "}
			<a
				href="https://www.linkedin.com/in/cameron-meinsma"
				target="_blank"
				rel="noreferrer"
			>
				Cameron Meinsma
			</a>{" "}
			and is open-sourced on{" "}
			<a
				href="https://github.com/Cameron-Meinsma/react-weather-app.git"
				target="_blank"
				rel="noreferrer"
			>
				GitHub
			</a>
		</footer>
	);

	if (weatherData.loaded) {
		return (
			<div className="Weather">
				{searchBar}
				<WeatherInfo
					weatherData={weatherData}
					changeUnit={changeUnit}
					unit={unit}
				/>
				<div className="upcoming-forecast">
					<UpcomingForecast currentCity={weatherData.city} unit={unit} />
				</div>
				{gitHubLink}
			</div>
		);
	} else {
		getCityWeather();
		return (
			<div className="Weather">
				<MutatingDots
					visible={true}
					height="100"
					width="100"
					color="#cecece"
					secondaryColor="#cecece"
					radius="12.5"
					ariaLabel="mutating-dots-loading"
					wrapperStyle={{}}
					wrapperClass=""
				/>
			</div>
		);
	}
}
