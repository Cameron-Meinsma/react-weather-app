import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";

import "./UpcomingForecast.css";

export default function UpcomingForecast({ currentCity, unit }) {
	let [loaded, setLoaded] = useState(false);
	let [upcomingForecast, setUpcomingForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [currentCity]);

	function handleResponse(response) {
		console.log(response.data);
		setUpcomingForecast(response.data.daily);
		setLoaded(true);
	}

	function getDailyForecast() {
		const apiKey = "abd0f73t5848f341e6o2213e8b806178";
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${currentCity}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	if (loaded) {
		return (
			<div className="UpcomingForecast">
				<div className="row upcoming-forecast-row">
					{upcomingForecast.map((dailyForecast, index) => {
						if (index === 0) {
							return (
								<div
									className="col upcoming-forecast-single-day todays-daily-forecast"
									key={index}
								>
									<DailyForecast data={upcomingForecast[index]} unit={unit} />
								</div>
							);
						} else if (index === 1) {
							return (
								<div
									className="col upcoming-forecast-single-day tomorrows-daily-forecast"
									key={index}
								>
									<DailyForecast data={upcomingForecast[index]} unit={unit} />
								</div>
							);
						} else {
							return (
								<div
									className="col upcoming-forecast-single-day all-other-daily-forecasts"
									key={index}
								>
									<DailyForecast data={upcomingForecast[index]} unit={unit} />
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	} else {
		getDailyForecast();
		return null;
	}
}
