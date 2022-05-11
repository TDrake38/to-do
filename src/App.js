import React from 'react';
import { Container } from 'react-bootstrap';
import Title from './components/Title';
import Home from "./components/Home"

function App() {
  return (
    <>
      <Container>
        <Title/>
      </Container>
      <Home/>
    </>
  );
}

export default App;
