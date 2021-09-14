import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background-color: lightblue; */
`;

const Section = styled.div`
  display: block;
  width: 500px;
  height: 700px;
  padding: 32px;
  border-radius: 6px;
  color: white;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 16px 0 rgba(31, 38, 35, 0.1);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
`;

export { HomeContainer, Section };
