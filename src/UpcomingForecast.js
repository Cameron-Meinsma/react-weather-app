import React, { useState } from "react";
import axios from "axios";

import "./UpcomingForecast.css";

export default function UpcomingForecast({ city }) {
	const [forecastData, setForecastData] = useState({ loaded: false });
	const apiKey = "abd0f73t5848f341e6o2213e8b806178";

	function seeForecastData(response) {
		setForecastData({
			// weekday: new Date(response.data.daily[0].time * 1000),
			min_temp: response.data.daily[0].temperature.minimum,
			max_temp: response.data.daily[0].temperature.maximum,
			icon_url: response.data.daily[0].condition.icon_url,
			description: response.data.daily[0].condition.description,
		});
	}

	function getForecastWeather() {
		// API upcoming weather
		// const apiUrlUpcoming = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
		// axios.get(apiUrlUpcoming).then(seeForecastData);
	}

	return (
		<div className="UpcomingForecast">
			<div className="row">
				<div className="col upcoming-forecast-single-day">
					<div className="upcoming-forecast-day">Mon</div>
					<img
						className="upcoming-forecast-img"
						src={forecastData.icon_url}
						alt={forecastData.description}
					/>
					<div className="min-max-temp">
						<span className="max-temp">
							{Math.round(forecastData.max_temp)}°
						</span>
						<span className="min-temp">
							{Math.round(forecastData.min_temp)}°
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
