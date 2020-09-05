import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      Home
      {/* <nav>
        <Link to="/encomendas/add">Adicionar nova encomenda</Link>
        <Link to="/fichas-tecnicas/add">Adicionar nova ficha técnica</Link>
        <Link to="/clientes/add">Adicionar novo cliente</Link>
      </nav> */}

      <Link to="/encomendas">Agenda de Encomendas</Link>
      <Link to="fichas-tecnicas">Fichas Técnicas</Link>
      <Link to="clientes">Clientes</Link>
    </div>
  )
};
