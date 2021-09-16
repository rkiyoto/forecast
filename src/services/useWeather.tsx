import { useState } from "react";
import toast from "react-hot-toast";
import APIClient from "./APIClient";
import { AxiosResponse } from "axios";
import { WeatherResponse, ForecastResponse } from "../types";

const getErrorMessage = (errorCode: number, city?: string) => {
  switch (errorCode) {
    case 401:
      return "Problemas na chave de API. Contate o suporte";
    case 404:
      return `Não foi possível encontrar informações para a cidade ${city}`;
    case 429:
      return "Tente novamente mais tarde";
    default:
      return "Erro desconhecido. Contate o suporte";
  }
};

const useWeather = () => {
  const [weather, setWeather] = useState<WeatherResponse>();
  const [forecast, setForecast] = useState<ForecastResponse>();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getWeatherByCityName = (name: string) => {
    APIClient.get("/weather", {
      params: {
        q: name,
        appid: API_KEY,
        units: "metric",
        lang: "pt_br",
      },
    })
      .then((response: AxiosResponse) => {
        setWeather(response.data);
      })
      .catch((error) => {
        toast.error(getErrorMessage(error.response.status, name), {
          position: "bottom-center",
          icon: "⚠️",
          style: {
            padding: 32,
            backgroundColor: "#ff141e",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
          },
        });
      });
  };

  const getForecast = async (lat: number, lon: number) => {
    APIClient.get("/onecall", {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
        lang: "pt_br",
      },
    })
      .then((response: AxiosResponse) => {
        setForecast(response.data);
      })
      .catch((error) => {
        toast.error(getErrorMessage(error.response.status), {
          position: "bottom-center",
          icon: "⚠️",
          style: {
            padding: 32,
            backgroundColor: "#ff141e",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
          },
        });
      });
  };

  return { weather, getWeatherByCityName, getForecast, forecast };
};

export default useWeather;
