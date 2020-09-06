import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header';
import GridCalendar from '../../components/GridCalendar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Calendar(props) {
  const { orders } = props;
  return (
    <div>
      <Header />
      {orders.length > 0 ? orders.map((order) => <GridCalendar order={order} />) : <p>Não há encomendas</p>}
      <Button className="button-verde">
        <Link to="/encomendas/add">
        Adicionar Encomenda
        </Link>
      </Button>
    </div>
  )
};

const mapStateToProps = (state) => ({
  orders: state.orderReducer.orders,
})

export default connect(mapStateToProps)(Calendar)