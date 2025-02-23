import { CityWeatherResponse } from "../_schema/waether-schema";

type Props = {
	weather_details: CityWeatherResponse;
};
export function WeatherDetails({ weather_details }: Props) {
	return (
		<div>
			<section>
				<p>{weather_details.cityName}</p>
				<p>{weather_details.description}</p>
				<p>humidity: {weather_details.humidity}</p>
				<p>pressure: {weather_details.pressure}</p>
				<p>temperature: {weather_details.temperature}</p>
				<p>windSpeed: {weather_details.windSpeed}</p>
			</section>
		</div>
	);
}
