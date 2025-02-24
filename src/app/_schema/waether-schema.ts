import { z } from "zod";

export const city_search_schema = z.object({
	cityName: z
		.string()
		.trim()
		.min(1, {
			message: "Type valid city name",
		})
		.min(3, {
			message: "Name must be at least 3 characters.",
		}),
	unit: z.string().default("metric"),
	language: z.string().default("en"),
});

export type CitySearch = z.infer<typeof city_search_schema>;

export const city_weather_response = z.object({
	cityName: z.string(),
	temperature: z.number(),
	humidity: z.number(),
	pressure: z.number(),
	windSpeed: z.number(),
	description: z.string(),
	longitude: z.number(),
	latitude: z.number(),
});

export type CityWeatherResponse = z.infer<typeof city_weather_response>;
