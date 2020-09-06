import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import addEncomenda from '../images/icons/new-event-icon.png';
import addFicha from '../images/icons/new-recipe-icon.png';
import addCliente from '../images/icons/new-client-icon.png';
import Header from '../components/Header';
import Details from '../pages/Details';

export default function Home() {
  return (
    <div>
      <Header />
      <Nav activeKey="/home" className="buttons-add-container">
        <Nav.Item className="button-add">
          <Nav.Link href="/encomendas/add">
            <img alt="Add encomenda" src={addEncomenda} height="95" />
            <p>Adicionar encomenda</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="button-add">
          <Nav.Link href="/fichas-tecnicas/add">
            <img alt="Add encomenda" src={addFicha} height="95" />
            <p>Adicionar ficha técnica</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="button-add">
          <Nav.Link href="/fichas-tecnicas/add">
            <Link to="/add-client">
              <img alt="Add encomenda" src={addCliente} height="95" />
              <p>Adicionar cliente</p>
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="home-buttons">
        <Button className="button-laranja" size="1g" block>
          <Link to="/encomendas">Agenda de Encomendas</Link>
        </Button>
        <Button className="button-laranja" size="1g" block>
          <Link to="fichas-tecnicas">Fichas Técnicas</Link>
        </Button>
        <Button className="button-laranja" size="1g" block>
          <Link to="clientes">Clientes</Link>
        </Button>
    </div>
  )
};
