import React from "react";

import "./WeekdayTime.css";

export default function dateTime({ dateTime, unit }) {
	const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	// Get the day, hours, and minutes
	let day = weekdays[dateTime.getDay()];
	let month = months[dateTime.getMonth()];
	let date = dateTime.getDate();
	let year = dateTime.getFullYear();
	let hours = dateTime.getHours();
	let minutes = dateTime.getMinutes();

	// Add '0' in front of single digit numbers
	function to24Hours(hours, minutes) {
		if (hours < 10) hours = `0${hours}`;
		if (minutes < 10) minutes = `0${minutes}`;

		return `${hours}:${minutes}`;
	}

	// Create 12 hour time
	function to12Hours(hours, minutes) {
		if (minutes < 10) minutes = `0${minutes}`;

		return hours < 12
			? `${hours}:${minutes} AM`
			: hours < 13
				? `${hours}:${minutes} PM`
				: `${hours - 12}:${minutes} PM`;
	}

	if (unit === "metric") {
		return (
			<div className="WeekdayTime">
				<span className="date-time-of-search">
					Latest Weather Update: {day}, {month} {date} {year} |{" "}
					{to24Hours(hours, minutes)} GMT+0100
				</span>
			</div>
		);
	} else {
		return (
			<div className="WeekdayTime">
				<span className="date-time-of-search">
					Latest Weather Update: {day}, {month} {date} {year} |{" "}
					{to12Hours(hours, minutes)} GMT+0100
				</span>
			</div>
		);
	}
}
