import { useState } from "react";
import APIClient from "./APIClient";
import { AxiosResponse } from "axios";

const useWeather = () => {
  const [weather, setWeather] = useState();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getWeatherByCityName = async (name: string) => {
    try {
      const { data }: AxiosResponse = await APIClient.get("/weather", {
        params: {
          q: name,
          appid: API_KEY,
          cnt: 3,
        },
      });
      setWeather(data);
    } catch (e) {
      console.error("Error: ", e);
      throw new Error(e as string);
    }
  };

  const getForecast = async (lat: number, lon: number) => {
    try {
      const { data }: AxiosResponse = await APIClient.get("/onecall", {
        params: {
          lat,
          lon,
          appid: API_KEY,
        },
      });
      console.log(
        "🚀 ~ file: useWeather.tsx ~ line 33 ~ getForecast ~ data",
        data
      );
    } catch (e) {
      throw new Error(e as string);
    }
  };

  return { weather, getWeatherByCityName, getForecast };
};

export default useWeather;
