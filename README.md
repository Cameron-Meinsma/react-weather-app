# React Weather App

**This weather app was built using [React](https://react.dev/) and [Node.js](https://nodejs.org/en) and is [hosted](https://cameron-react-weather-app.netlify.app/) on [Netlify](https://www.netlify.com/).**

### Functionalities

1. Showing the latest weather data of the next seven days, including today;
2. A city search engine;
3. And the ability to convert between metric and imperial units.

### 1. Getting the Latest Weather Data

It utilizes the [SheCodes](https://www.shecodes.io/) weather API to get the latest weather data, in metric units, of any city.

The following data is shown on the app:

1. The temperature;
2. The country;
3. The city;
4. The weather icon;
5. The associated weather description;
6. The humidity;
7. The wind;
8. And the future weather forecast of the next seven days, including today. This forecast includes the minimum and maximum temperature, as well as the abbreviated day and the weather icon.

### 2. Using the City Search Engine

If the search engine can find the city, it will show the weather data of said city. Otherwise, it will not update the weather data.

### 3. Units Conversion

It is automatically set to metric. However, by clicking on the _°F_, the app will convert the units to imperial. By clicking on _°C_, it will switch back to metric. The units conversion will update the following:

1. The temperature (from Celsius to Fahrenheit, or vice versa), including the forecast of the upcoming days;
2. The wind (from km/h to mph, or vice versa);
3. And the latest weather update time (from 24h to 12h time, or vice versa).

---

To check out the app, see: [https://cameron-react-weather-app.netlify.app/](https://cameron-react-weather-app.netlify.app/).
