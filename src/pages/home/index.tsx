/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../../utils/useLocalStorage";

import * as S from "./home.styled";

const Home = () => {
  const { cityList, getList, addToList, removeFromList } = useLocalStorage();
  const history = useHistory();

  useEffect(() => {
    getList();
  }, []);

  const redirectToForecast = (value: string) => {
    addToList(value);
    history.push(`/${value}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { value } = document.getElementById("city") as HTMLInputElement;
    if (value) {
      redirectToForecast(value);
    }
  };

  const removeItem = (value: string) => {
    removeFromList(value);
    getList();
  };

  return (
    <S.HomeContainer>
      <S.Section>
        <form onSubmit={handleSubmit}>
          <S.SearchInput placeholder="ex: São Paulo" id="city" name="city" />
          <S.SearchButton type="submit">Buscar</S.SearchButton>
        </form>

        <S.ListTitle>Pesquisas recentes</S.ListTitle>
        <S.ListContainer>
          <S.ListView>
            {cityList.map((city: string) => (
              <S.CityRow onClick={() => redirectToForecast(city)}>
                <p>{city}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeItem(city);
                  }}
                >
                  x
                </button>
              </S.CityRow>
            ))}
          </S.ListView>
        </S.ListContainer>
      </S.Section>
    </S.HomeContainer>
  );
};

export default Home;
