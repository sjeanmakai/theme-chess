import React from "react";
import { RecoilRoot } from "recoil";
import { Board } from "./components/Board";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GameContainer = styled.div`
  background-color: #fffdd0;
`;

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <GameContainer>
        <Board />
      </GameContainer>
    </RecoilRoot>
  );
};

export default App;
