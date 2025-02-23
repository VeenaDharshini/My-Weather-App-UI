"use client";

import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import {
	city_search_schema,
	CitySearch,
	CityWeatherResponse,
} from "../_schema/waether-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { MdLocationOn } from "react-icons/md";
import api from "../utils/api";
import { useState } from "react";
import { WeatherDetails } from "./weather-details";

export function WeatherAppMain() {
	const [weather_response, set_weather_response] =
		useState<null | CityWeatherResponse>(null);

	const form = useForm<CitySearch>({
		resolver: zodResolver(city_search_schema),
		defaultValues: {
			city: "",
			unit: "metric",
			lang: "en",
		},
	});

	const { control, handleSubmit } = form;

	const onSubmit = async (formData: CitySearch) => {
		try {
			const response = await api.get("weather", { params: formData });
			if (response.status === 200) {
				set_weather_response(response.data);
			}
		} catch (error) {
			set_weather_response(null);
			toast.error(JSON.stringify(error.response.data.message));
		}
	};

	return (
		<main>
			<Form {...form}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-row">
					<FormField
						control={control}
						name="city"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										className="border border-[#4114a3] rounded-l-md rounded-r-none border-dotted border-r-0"
										placeholder="Search Your City Here"
										{...field}
									/>
								</FormControl>
								<FormMessage className="text-red-500" />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="bg-[#8863d7] h-10 rounded-l-none w-fit">
						<MdLocationOn color="#4114a3" />
					</Button>
				</form>
			</Form>
			{weather_response ? (
				<WeatherDetails weather_details={weather_response} />
			) : null}
		</main>
	);
}
