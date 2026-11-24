import React, { useState } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";

import "./UpcomingForecast.css";

export default function UpcomingForecast({ currentCity }) {
	let [loaded, setLoaded] = useState(false);
	let [upcomingForecast, setUpcomingForecast] = useState(null);

	function handleResponse(response) {
		console.log(response.data);
		setUpcomingForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="UpcomingForecast">
				<div className="row">
					{upcomingForecast.map((dailyForecast, index) => {
						return (
							<div className="col upcoming-forecast-single-day" key={index}>
								<DailyForecast data={upcomingForecast[index]} />
							</div>
						);
					})}
				</div>
			</div>
		);
	} else {
		const apiKey = "abd0f73t5848f341e6o2213e8b806178";
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${currentCity}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return null;
	}
}
