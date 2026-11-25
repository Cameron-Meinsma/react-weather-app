import React from "react";

export default function DailyForecast({ data, unit }) {
	function day() {
		let date = new Date(data.time * 1000);
		let day = date.getDay();

		const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}

	function toFahrenheit(weatherTempCelsius) {
		let fahrenheit = (weatherTempCelsius * 9) / 5 + 32;
		let roundedFahrenheit = Math.round(fahrenheit);
		return roundedFahrenheit;
	}

	if (unit === "metric") {
		return (
			<div className="DailyForecast">
				<div className="upcoming-forecast-day">{day()}</div>
				<img
					className="upcoming-forecast-img"
					src={data.condition.icon_url}
					alt={data.condition.description}
				/>
				<div className="min-max-temp">
					<span className="max-temp">
						{Math.round(data.temperature.maximum)}°
					</span>{" "}
					<span className="min-temp">
						{Math.round(data.temperature.minimum)}°
					</span>
				</div>
			</div>
		);
	} else {
		return (
			<div className="DailyForecast">
				<div className="upcoming-forecast-day">{day()}</div>
				<img
					className="upcoming-forecast-img"
					src={data.condition.icon_url}
					alt={data.condition.description}
				/>
				<div className="min-max-temp">
					<span className="max-temp">
						{toFahrenheit(data.temperature.maximum)}°
					</span>{" "}
					<span className="min-temp">
						{toFahrenheit(data.temperature.minimum)}°
					</span>
				</div>
			</div>
		);
	}
}
