import React from "react";
import Weather from "./Weather";

import "./WeekdayTime.css";

export default function dateTime({ dateTime }) {
	const weekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
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
	if (hours < 10) hours = `0${hours}`;
	if (minutes < 10) minutes = `0${minutes}`;

	return (
		<div className="WeekdayTime">
			<span className="date-time-of-search">GMT+0100</span>
			<br />
			{day}, {month} {date} {year} | {hours}:{minutes}
		</div>
	);
}
