import React from "react";
import WeekdayTime from "./WeekdayTime";
import UnitConversion from "./UnitConversion";

export default function WeatherInfo({ weatherData }) {
	return (
		<div className="WeatherInfo">
			<div className="row">
				<div className="col-5">
					<div className="imageflex">
						<img src={weatherData.icon_url} alt={weatherData.description} />
						<span className="imageflexcontent">
							<UnitConversion weatherTempCelsius={weatherData.temperature} />
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
					<ul>
						<li>Wind: {weatherData.wind} km/h</li>
					</ul>
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
