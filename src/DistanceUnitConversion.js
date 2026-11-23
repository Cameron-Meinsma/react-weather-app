import React from "react";

export default function DistanceUnitConversion({ wind }) {
	return (
		<div className="DistanceUnitConversion">
			<ul>
				<li>Wind: {wind} km/h</li>
				<li>{(wind * 0.6213711922).toFixed(2)} mph</li>
			</ul>
		</div>
	);
}
