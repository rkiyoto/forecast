import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./home.styled";

const Home = () => {
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { value } = document.getElementById("city") as HTMLInputElement;

    history.push(`/${value}`);
  };

  return (
    <S.HomeContainer>
      <S.Section>
        <h1>Welcome to Forecast :D</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="ex: São Paulo" id="city" name="city" />
          <button type="submit">OK</button>
        </form>
      </S.Section>
    </S.HomeContainer>
  );
};

export default Home;
