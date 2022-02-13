import React from 'react';
import styled, { ThemeProvider } from "styled-components"

import MainTab from './components/MainTab/MainTab';
import ThemeContainer from './components/MainTab/ThemeContainer';

const AllContentContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #854798;
`

const App = () => {
  return (
    <div className="App">
      <ThemeContainer>
        <AllContentContainer>
          <MainTab/>
        </AllContentContainer>
      </ThemeContainer>
    </div>
  );
}

export default App;
