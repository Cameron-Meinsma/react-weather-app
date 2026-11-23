import React, { useState } from "react";

export default function UnitConversion({ weatherTempCelsius }) {
	const [unit, setUnit] = useState("celsius");
	const [celsiusActivity, setCelsiusActivity] = useState("active");
	const [fahrenheitActivity, setFahrenheitActivity] = useState("inactive");

	function toCelsius() {
		setUnit("celsius");
		setCelsiusActivity("active");
		setFahrenheitActivity("inactive");
	}

	function toFahrenheit() {
		setUnit("fahrenheit");
		setFahrenheitActivity("active");
		setCelsiusActivity("inactive");
	}

	if (unit === "celsius") {
		return (
			<div className="UnitConversion">
				<span className="temperature">{Math.round(weatherTempCelsius)}</span>
				<span className="unit">
					<button className={celsiusActivity} onClick={toCelsius}>
						°C
					</button>{" "}
					|{" "}
					<button className={fahrenheitActivity} onClick={toFahrenheit}>
						°F
					</button>
				</span>
			</div>
		);
	} else {
		return (
			<div className="UnitConversion">
				<span className="temperature">
					{Math.round((weatherTempCelsius * 9) / 5 + 32)}
				</span>
				<span className="unit">
					<button className={celsiusActivity} onClick={toCelsius}>
						°C
					</button>{" "}
					|{" "}
					<button className={fahrenheitActivity} onClick={toFahrenheit}>
						°F
					</button>
				</span>
			</div>
		);
	}
}
