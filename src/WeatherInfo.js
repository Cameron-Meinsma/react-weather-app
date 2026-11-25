import React from "react";
import TemperatureUnitConversion from "./TemperatureUnitConversion.js";
import DistanceUnitConversion from "./DistanceUnitConversion.js";
import WeekdayTime from "./WeekdayTime.js";

export default function WeatherInfo({ weatherData, changeUnit, unit }) {
	return (
		<div className="WeatherInfo">
			<div className="weatherinfo-drop-shadow">
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
					</div>
				</div>
				<div className="row other-weather-info">
					<div className="col-4 description humidity wind">
						<ul>
							<li>
								{weatherData.description
									.toLowerCase()
									.replace(/(?:^|\s)\w/g, function (match) {
										return match.toUpperCase();
									})}
							</li>
							<li>Humidity: {weatherData.humidity}%</li>
							<li>
								<DistanceUnitConversion wind={weatherData.wind} unit={unit} />
							</li>
						</ul>
					</div>
					<div className="col-4"></div>
					<div className="col-4 latest-update">
						<WeekdayTime dateTime={weatherData.date_time} unit={unit} />
					</div>
				</div>
			</div>
		</div>
	);
}
