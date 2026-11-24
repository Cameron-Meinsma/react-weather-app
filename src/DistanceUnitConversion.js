import React from "react";

export default function DistanceUnitConversion({ wind, unit }) {
	if (unit === "metric") {
		return (
			<div className="DistanceUnitConversion">
				<ul>
					<li>Wind: {wind} km/h</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div className="DistanceUnitConversion">
				<ul>
					<li>Wind: {(wind * 0.6213711922).toFixed(2)} mph</li>
				</ul>
			</div>
		);
	}
}
