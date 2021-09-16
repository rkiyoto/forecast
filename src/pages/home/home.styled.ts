import styled from "styled-components";

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 64px;
  color: white;
  font-weight: 200;
`;

const SearchInput = styled.input`
  color: #202124;
  font-size: 16px;
  padding: 16px;
  border-radius: 4px;
  border-width: 0;
  margin: 16px;
`;

const SearchButton = styled.button`
  padding: 16px;
  color: #202124;
  font-size: 16px;
  width: 100px;
  border-width: 0;
  border-radius: 4px;
  cursor: pointer;
  background-color: skyblue;
  color: blue;

  transition: all 0.2s;

  :hover {
    box-shadow: 0px 4px 16px 0px rgba(31, 38, 35, 0.3);
    background-color: blue;
    color: skyblue;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  padding: 32px;
  margin-bottom: 48px;
  border-radius: 6px;
  color: white;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 16px 0 rgba(31, 38, 35, 0.1);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
`;

const ListTitle = styled.h2`
  margin-top: 16px;
  font-size: 24px;
  font-weight: 500;
  color: white;
  text-align: start;
`;

const ListContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

const ListView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 16px;
`;

const CityRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  margin: 8px;
  padding: 8px 24px;
  border-radius: 4px;
  text-transform: capitalize;
  transition: all 0.1s;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-width: 0;
    border-radius: 2px;
  }

  :hover {
    box-shadow: 0 4px 16px 0 rgba(31, 38, 35, 0.1);
    background-color: #aaa;
  }
`;

export {
  HomeContainer,
  SearchInput,
  Section,
  ListContainer,
  ListTitle,
  ListView,
  CityRow,
  SearchButton,
  Title,
};
