import { useState } from "react";
import APIClient from "./APIClient";
import { AxiosResponse } from "axios";
import { WeatherResponse, ForecastResponse } from "../types";

const useWeather = () => {
  const [weather, setWeather] = useState<WeatherResponse>();
  const [forecast, setForecast] = useState<ForecastResponse>();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getWeatherByCityName = async (name: string) => {
    try {
      const { data }: AxiosResponse = await APIClient.get("/weather", {
        params: {
          q: name,
          appid: API_KEY,
          units: "metric",
          lang: "pt_br",
        },
      });
      setWeather(data);
    } catch (e) {
      console.error("Error: ", e);
      // throw new Error(e as string);
    }
  };

  const getForecast = async (lat: number, lon: number) => {
    try {
      const { data }: AxiosResponse = await APIClient.get("/onecall", {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: "metric",
          lang: "pt_br",
        },
      });
      setForecast(data);
    } catch (e) {
      console.error("Error: ", e);
      // throw new Error(e as string);
    }
  };

  return { weather, getWeatherByCityName, getForecast, forecast };
};

export default useWeather;
