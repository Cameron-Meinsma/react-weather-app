import React, { useState } from "react";

export default function TemperatureUnitConversion({
	weatherTempCelsius,
	changeUnit,
}) {
	const [unit, setUnit] = useState("metric");
	function handleChange(event) {
		if (unit === "metric") {
			setUnit("imperial");
		} else {
			setUnit("metric");
		}
		changeUnit(event.target.value);
	}

	if (unit === "metric") {
		return (
			<div className="TemperatureUnitConversion">
				<span className="temperature">{Math.round(weatherTempCelsius)}</span>
				<span className="unit">
					<button className="active">°C</button> |{" "}
					<button className="inactive" onClick={handleChange}>
						°F
					</button>
				</span>
			</div>
		);
	} else {
		return (
			<div className="TemperatureUnitConversion">
				<span className="temperature">
					{Math.round((weatherTempCelsius * 9) / 5 + 32)}
				</span>
				<span className="unit">
					<button className="inactive" onClick={handleChange}>
						°C
					</button>{" "}
					| <button className="active">°F</button>
				</span>
			</div>
		);
	}
}
