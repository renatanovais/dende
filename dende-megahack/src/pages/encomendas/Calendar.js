import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header';
import GridCalendar from '../../components/GridCalendar';
import { Link } from 'react-router-dom';

export default function Calendar() {
  return (
    <div>
      <Header />
      <h3>Agenda de Encomendas</h3>
      <GridCalendar />
      <Button className="button-verde">
        <Link to="/encomendas/add">
        Adicionar Encomenda
        </Link>
      </Button>
    </div>
  )
};
