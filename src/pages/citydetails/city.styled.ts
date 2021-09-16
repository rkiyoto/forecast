import styled from "styled-components";

interface TempProps {
  light?: boolean;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 32px 48px;
  flex-direction: column;
`;

const BackButton = styled.button`
  position: fixed;
  top: 50;
  left: 50;
  z-index: 10;
  cursor: pointer;
  color: white;
  font-size: 16px;
  transition: all 0.2s;

  border-width: 0;
  border-radius: 6px 0 0 0;
  padding: 16px;
  background-color: transparent;

  :hover {
    background-color: lightgray;
  }
`;

const Heading = styled.h1`
  margin-top: 48px;
  color: white;
`;

const WeatherView = styled.div`
  display: flex;
  flex: 1;
  height: 300px;
  justify-content: space-between;
  padding: 24px;
  border-radius: 6px;
  color: white;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 16px 0 rgba(31, 38, 35, 0.1);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);

  h1 {
    font-size: 40px;
    font-weight: 600;
  }

  h2 {
    font-size: 32px;
    font-weight: 400;
    text-transform: capitalize;
  }
`;

const WeatherSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ForecastView = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  padding: 32px;
  overflow-x: auto;
  margin-top: 48px;
  border-radius: 6px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 16px 0 rgba(31, 38, 35, 0.1);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
`;

const ForecastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 24px;
  margin: 16px;
  border-radius: 6px;
  background-color: white;
  cursor: default;
  transition: all 0.1s;

  p {
    text-transform: capitalize;
  }

  :hover {
    transform: scale(1.1);
    background-color: lightskyblue;
    box-shadow: 0 4px 16px 0 rgba(31, 38, 35, 0.5);
  }
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  transition: transform 0.2s;

  ${ForecastCard}:hover & {
    transform: scale(1.1);
  }
`;

const MinMaxView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TempText = styled.p<TempProps>`
  margin: 16px 8px;
  font-size: 16px;
  color: ${({ light }) => (light ? "#999" : "#000")};
`;

export {
  Container,
  BackButton,
  Heading,
  WeatherView,
  WeatherSection,
  ForecastView,
  ForecastCard,
  WeatherIcon,
  MinMaxView,
  TempText,
};
