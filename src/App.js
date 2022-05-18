import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import LoginContext from './LoginContext';
import Title from './components/Title';
import Home from "./components/Home"
import List from './components/List';
import {Route, BrowserRouter, Routes, Navigate } from "react-router-dom"


function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'));

  return (
    <>
      <BrowserRouter>
        <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
          <Title/>
          <Container>
            <Routes>
              <Route path="/" exact component={Title}/>
              <Route path="/todo">            
                {loggedIn ? <Home /> : <Navigate to="/"/>}
              </Route>
              <Route render={() => <div>404</div>} />
            </Routes>
          </Container>
        </LoginContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
