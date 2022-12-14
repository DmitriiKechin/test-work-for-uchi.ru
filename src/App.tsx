import React from 'react';
import styled from 'styled-components';
import { MainPage } from './pages/main/mainPage';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
}

export default App;
