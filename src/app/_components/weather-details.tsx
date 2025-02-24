import { useEffect, useMemo } from "react";
import { CityWeatherResponse } from "../_schema/waether-schema";
import { WiHumidity } from "react-icons/wi";
import { BsCompass } from "react-icons/bs";
import { FaWind } from "react-icons/fa";

type Props = {
	weather_details: CityWeatherResponse & { unit: string };
};
export function WeatherDetails({ weather_details }: Props) {
	const bgImage = useMemo(() => {
		const temperature = weather_details.temperature;
		if (temperature >= 35) return "very-hot";
		if (temperature >= 30) return "hot";
		if (temperature >= 20) return "normal";
		if (temperature >= 10) return "cool";
		if (temperature >= 0) return "cold";
		return "freezing";
	}, [weather_details]);

	useEffect(() => {
		document.body.classList.remove(
			"very-hot",
			"hot",
			"normal",
			"cool",
			"cold",
			"freezing"
		);
		document.body.classList.add(
			bgImage,
			"bg-no-repeat",
			"object-cover",
			"bg-cover",
			"bg-fixed",
			"bg-center"
		);
	}, [bgImage]);

	return (
		<section className="bg-slate-100 border border-dotted border-gray-700 rounded w-full p-3 md:p-10">
			<p className="text-2xl md:text-3xl text-center">
				{weather_details.cityName}
			</p>
			<p className="text-center text-5xl font-semibold text-black my-5">
				{weather_details.temperature} {weather_details.unit ?? "°C"}
			</p>
			<p className="text-center">Experiencing {weather_details.description}</p>
			<div className="grid grid-cols-[max-content_max-content_max-content] gap-y-2.5 justify-center gap-x-10 grid-rows-3 my-5 items-center text-center">
				<WiHumidity
					size={45}
					className="mx-auto"
					color="#247ef2"
				/>
				<BsCompass
					size={30}
					color="#f27024"
					className="mx-auto"
				/>
				<FaWind
					size={30}
					className="mx-auto"
				/>
				<span className="text-2xl">{weather_details.humidity}</span>
				<span className="text-2xl">{weather_details.pressure}</span>
				<span className="text-2xl">{weather_details.windSpeed}</span>
				<span>Humidity</span>
				<span>Pressure</span>
				<span>WindSpeed</span>
			</div>
		</section>
	);
}
