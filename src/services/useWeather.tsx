import { useState } from "react";
import APIClient from "./APIClient";
import { AxiosResponse } from "axios";

const useWeather = () => {
  const [weather, setWeather] = useState();

  const getWeatherByCityName = async (name: string) => {
    try {
      const { data }: AxiosResponse = await APIClient.get("/weather", {
        params: {
          q: name,
          appid: "71f2246f77fe18df229a7a1a08365b5e",
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
          appid: "71f2246f77fe18df229a7a1a08365b5e",
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
