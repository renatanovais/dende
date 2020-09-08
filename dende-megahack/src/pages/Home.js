import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
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
      <div className="home-buttons">
        <Link to="/encomendas">
          <Button className="button-laranja botao-especial" size="1g" block>
            Agenda de Encomendas
          </Button>
          <br /><br />
        </Link>
        <Link to="fichas-tecnicas">
          <Button className="button-laranja botao-especial" size="1g" block>
            Fichas Técnicas
          </Button>
          <br /><br />
        </Link>
        <Link to="clientes">
          <Button className="button-laranja botao-especial" size="1g" block>
            Clientes
          </Button>
          <br /><br />
        </Link>
      </div>
    </div>
  )
};
