import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import addEncomenda from '../images/icons/new-event-icon.png';
import addFicha from '../images/icons/new-recipe-icon.png';
import addCliente from '../images/icons/new-client-icon.png';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="buttons-add-container">
        <Link to="/encomendas/add">
          <img alt="Add encomenda" src={addEncomenda} height="95" />
          <p>Adicionar <br/> encomenda</p>
        </Link>
        <Link to="/fichas-tecnicas/add">
          <img alt="Add encomenda" src={addFicha} height="95" />
          <p>Adicionar <br/> ficha técnica</p>
        </Link>
        <Link to="/add-client">
          <img alt="Add cliente" src={addCliente} height="95" />
          <p>Adicionar <br/> cliente</p>
        </Link>
      </div>
      {/* <Nav activeKey="/home" className="buttons-add-container">
        <Nav.Item className="button-add">
          <Nav.Link href="/encomendas/add">
            <img alt="Add encomenda" src={addEncomenda} height="95" />
            <p>Adicionar encomenda</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="button-add">
          <Nav.Link href="/fichas-tecnicas/">
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
      </Nav> */}
      <div className="home-buttons">
        <Link to="/encomendas">
          <Button className="button-laranja" size="1g" block>
            Agenda de Encomendas
          </Button>
        </Link>
        <Link to="fichas-tecnicas">
          <Button className="button-laranja" size="1g" block>
            Fichas Técnicas
          </Button>
        </Link>
        <Link to="clientes">
          <Button className="button-laranja" size="1g" block>
            Clientes
          </Button>
        </Link>
      </div>
    </div>
  )
};
