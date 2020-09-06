import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/encomendas/Calendar';
import Clients from './pages/Clients';
import Products from './pages/Products';
<<<<<<< HEAD
import Order from './pages/encomendas/Order';
=======
import NewClient from './pages/NewClient';
>>>>>>> bc4267cc88a5fed1b56ff02fb2469c6b8a147553

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/encomendas/add" component={Order} />
        <Route exact path="/encomendas" component={Calendar} />
        <Route exact path="/clientes" component={Clients} />
        <Route exact path="/fichas-tecnicas" component={Products} />
        <Route exact path="/add-client" component={NewClient} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
