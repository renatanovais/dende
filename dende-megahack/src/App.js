import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Clients from './pages/Clients';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/encomendas" component={Calendar} />
        <Route exact path="/clientes" component={Clients} />
        <Route exact path="/fichas-tecnicas" component={Products} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
