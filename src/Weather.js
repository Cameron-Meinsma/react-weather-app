import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather({ city, units }) {
	// UseState
	const [weatherData, setWeatherData] = useState({ loaded: false });

	function seeWeatherData(response) {
		setWeatherData({
			loaded: true,
			temperature: response.data.temperature.current,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
			description: response.data.condition.description,
			weekday: "Monday",
			time: "03:00",
			city: response.data.city,
			country: response.data.country,
			icon_url: response.data.condition.icon_url,
		});
	}

	if (weatherData.loaded) {
		return (
			<div className="Weather">
				<form>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city.."
								className="form-control"
								autoFocus="on"
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<div className="row">
					<div className="col-5">
						<div className="imageflex">
							<img src={weatherData.icon_url} alt={weatherData.description} />
							<p className="imageflexcontent">
								<span className="temperature">
									{Math.round(weatherData.temperature)}
								</span>
								<span className="unit">°C</span>
							</p>
						</div>
					</div>
					<div className="col-7 city-info">
						<h5 className="country">{weatherData.country}</h5>
						<h1 className="city-h1">{weatherData.city}</h1>
						<ul>
							<li>
								<span className="weekday">{weatherData.weekday}</span>{" "}
								<span className="time">{weatherData.time}</span>
							</li>
							<li className="description">{weatherData.description}</li>
						</ul>
					</div>
				</div>
				<div className="row other-weather-info">
					<div className="col-6 humidity">
						<ul>
							<li>Humidity: {weatherData.humidity}%</li>
						</ul>
					</div>
					<div className="col-6 wind">
						<ul>
							<li>Wind: {weatherData.wind} km/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		// API
		const apiKey = "abd0f73t5848f341e6o2213e8b806178";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
		axios.get(apiUrl).then(seeWeatherData);
		return <div className="Weather">Loading</div>;
	}
}
