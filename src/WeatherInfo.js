import React, { useState } from "react";
import WeekdayTime from "./WeekdayTime";
import TemperatureUnitConversion from "./TemperatureUnitConversion";
import DistanceUnitConversion from "./DistanceUnitConversion";

export default function WeatherInfo({ weatherData }) {
	const [unit, setUnit] = useState("metric");

	function changeUnit() {
		if (unit === "metric") {
			setUnit("imperial");
		} else {
			setUnit("metric");
		}
	}
	return (
		<div className="WeatherInfo">
			<div className="row">
				<div className="col-5">
					<div className="imageflex">
						<img src={weatherData.icon_url} alt={weatherData.description} />
						<span className="imageflexcontent">
							<TemperatureUnitConversion
								weatherTempCelsius={weatherData.temperature}
								changeUnit={changeUnit}
							/>
						</span>
					</div>
				</div>
				<div className="col-7 city-info">
					<h5 className="country">{weatherData.country}</h5>
					<h1 className="city-h1">{weatherData.city}</h1>
					<ul>
						<li>
							<WeekdayTime dateTime={weatherData.date_time} />
						</li>
					</ul>
				</div>
			</div>
			<div className="row other-weather-info">
				<div className="col-4 humidity">
					<ul>
						<li>Humidity: {weatherData.humidity}%</li>
					</ul>
				</div>
				<div className="col-4 wind">
					<DistanceUnitConversion wind={weatherData.wind} unit={unit} />
				</div>
				<div className="col-4 description">
					<ul>
						<li>
							{weatherData.description
								.toLowerCase()
								.replace(/(?:^|\s)\w/g, function (match) {
									return match.toUpperCase();
								})}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
