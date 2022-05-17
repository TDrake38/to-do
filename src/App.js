import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import LoginContext from './LoginContext';
import Title from './components/Title';
import Home from "./components/Home"


function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'));

  return (
    <>
      <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
        <Container>
          <Title/>
        </Container>
        <Home/>
      </LoginContext.Provider>
    </>
  );
}

export default App;
