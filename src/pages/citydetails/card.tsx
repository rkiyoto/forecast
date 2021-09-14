import { ForecastCard, WeatherIcon, MinMaxView, TempText } from "./city.styled";

interface CardProps {
  min: number;
  max: number;
  dt: number;
  icon: string;
}

const Card = ({ min, max, dt, icon }: CardProps) => {
  const day = new Date(dt * 1000);
  console.log("🚀 ~ file: card.tsx ~ line 12 ~ Card ~ day", day);
  return (
    <ForecastCard>
      <p>{`${day.toLocaleDateString("pt-BR", {
        weekday: "short",
        // year: "numeric",
        month: "numeric",
        day: "numeric",
      })}`}</p>
      <WeatherIcon src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <MinMaxView>
        <TempText>{`${Math.ceil(max)}ºC`}</TempText>
        <TempText light>{`${Math.ceil(min)}ºC`}</TempText>
      </MinMaxView>
    </ForecastCard>
  );
};

export default Card;
