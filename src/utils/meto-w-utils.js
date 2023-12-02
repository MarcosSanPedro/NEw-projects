import { fetchWeatherApi } from "openmeteo";

const params = {
	latitude: 25.7743,
	longitude: -80.1937,
	hourly: [
		"temperature_2m",
		"relative_humidity_2m",
		"precipitation_probability",
		"precipitation",
		"rain",
		"snowfall",
		"weather_code",
		"is_day",
	],
	temperature_unit: "fahrenheit",
	wind_speed_unit: "mph",
	precipitation_unit: "inch",
	timezone: "America/New_York",
	forecast_days: 1,
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Helper function to form time ranges
const range = (start, stop, step) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
// const timezone = response.timezone();
// const timezoneAbbreviation = response.timezoneAbbreviation();
// const latitude = response.latitude();
// const longitude = response.longitude();

const hourly = response.hourly();

// Note: The order of weather variables in the URL query and the indices below need to match!
export const weatherData = {
	hourly: {
		time: range(
			Number(hourly.time()),
			Number(hourly.timeEnd()),
			hourly.interval()
		).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
		temperature2m: hourly.variables(0).valuesArray(),
		relativeHumidity2m: hourly.variables(1).valuesArray(),
		precipitationProbability: hourly.variables(2).valuesArray(),
		precipitation: hourly.variables(3).valuesArray(),
		rain: hourly.variables(4).valuesArray(),
		snowfall: hourly.variables(5).valuesArray(),
		weatherCode: hourly.variables(6).valuesArray(),
		isDay: hourly.variables(7).valuesArray(),
	},
};
