import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useWeather from "../../services/useWeather";

interface Params {
  cityName: string;
}

const CityForecast = () => {
  const { cityName }: Params = useParams();
  const { weather, getWeatherByCityName, getForecast } = useWeather();

  useEffect(() => {
    getWeatherByCityName(cityName);
  }, []);

  useEffect(() => {
    if (weather) {
      getForecast(-22.805, -47.071);
    }
  }, [weather, getForecast]);

  console.log("weather", weather);

  return <div> {cityName} City</div>;
};

export default CityForecast;
