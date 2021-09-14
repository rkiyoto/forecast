import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useWeather from "../../services/useWeather";

import Card from "./card";

import * as S from "./city.styled";

interface Params {
  cityName: string;
}

const CityForecast = () => {
  const { cityName }: Params = useParams();
  const { weather, getWeatherByCityName, getForecast, forecast } = useWeather();

  useEffect(() => {
    getWeatherByCityName(cityName);
  }, []);

  useEffect(() => {
    if (weather?.coord) {
      getForecast(weather.coord.lat, weather.coord.lon);
    }
  }, [weather]);

  console.log("weather", weather);

  if (!weather || !forecast)
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );

  return (
    <S.Container>
      <S.WeatherView>
        <S.WeatherSection>
          <h1>{weather.name}</h1>
          <h2>{weather.main.temp.toFixed(1)} ºC</h2>
        </S.WeatherSection>
        <S.WeatherSection>
          <S.WeatherIcon
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <h2>{weather.weather[0].description}</h2>
        </S.WeatherSection>
      </S.WeatherView>
      <S.ForecastView>
        {forecast.daily.map((day) => (
          <Card
            key={day.dt}
            dt={day.dt}
            min={day.temp.min}
            max={day.temp.max}
            icon={day.weather[0].icon}
          />
        ))}
      </S.ForecastView>
    </S.Container>
  );
};

export default CityForecast;
