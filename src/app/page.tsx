import { WeatherAppMain } from "./_components/weather-app-main";

export default function Home() {
	return (
		<div className="flex flex-col gap-8 row-start-2 w-full items-center sm:items-start mt-16 mb-28 max-w-7xl mx-auto">
			<WeatherAppMain />
		</div>
	);
}
