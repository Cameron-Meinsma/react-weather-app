import React from "react";
import "./Weather.css";

export default function Weather() {
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
						<img
							src="https://www.gstatic.com/weather/conditions/v4/svg/clear_night_light.svg"
							alt="Clear"
						/>
						<p className="imageflexcontent">
							<span className="temperature">6</span>
							<span className="unit">°C</span>
						</p>
					</div>
				</div>
				<div className="col-7 city-info">
					<h1 className="city-h1">Los Angeles</h1>
					<ul>
						<li>
							<span className="weekday">Monday</span>{" "}
							<span className="time">03:00</span>
						</li>
						<li className="description">Clear</li>
					</ul>
				</div>
			</div>
			<div className="row other-weather-info">
				<div className="col-4 precipitation">
					<ul>
						<li>Precipitation: 100%</li>
					</ul>
				</div>
				<div className="col-4 humidity">
					<ul>
						<li>Humidity: 100%</li>
					</ul>
				</div>
				<div className="col-4 wind">
					<ul>
						<li>Wind: 100 km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
