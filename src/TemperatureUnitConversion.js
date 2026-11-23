import React, { useState } from "react";

export default function TemperatureUnitConversion({ weatherTempCelsius }) {
	const [unit, setUnit] = useState("celsius");
	const [celsiusActivity, setCelsiusActivity] = useState("activeCelsius");
	const [fahrenheitActivity, setFahrenheitActivity] =
		useState("inactiveFahrenheit");

	function toCelsius() {
		setUnit("celsius");
		setCelsiusActivity("activeCelsius");
		setFahrenheitActivity("inactiveFahrenheit");
	}

	function toFahrenheit() {
		setUnit("fahrenheit");
		setFahrenheitActivity("activeFahrenheit");
		setCelsiusActivity("inactiveCelsius");
	}

	if (unit === "celsius") {
		return (
			<div className="TemperatureUnitConversion">
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
			<div className="TemperatureUnitConversion">
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
