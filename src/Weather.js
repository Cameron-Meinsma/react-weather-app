import React, { useState } from "react";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import UpcomingForecast from "./UpcomingForecast";

import "./Weather.css";

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
						className="form-control"
					/>
				</div>
				<div className="col-3">
					<input
						type="submit"
						value="Search"
						className="btn btn-primary w-100 city-search-btn"
					/>
				</div>
			</div>
		</form>
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
