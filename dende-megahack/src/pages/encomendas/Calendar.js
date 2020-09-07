import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header';
import GridCalendar from '../../components/GridCalendar';
import addEncomenda from '../../images/icons/new-event-icon.png';

function Calendar(props) {
  const { orders } = props;
  const actualDate = new Date();
  const [filterOrders, setFilterOrders] = useState(orders);
  const [formatDate, setFormatDate] = useState();
  const [emptyMessage, setEmptyMessage] = useState('cadastradas');
  const [disableDay, setDisableDay] = useState(false);
  const [disableMonth, setDisableMonth] = useState(false);
  
  const getDate = (actualDate) => {
    const actualDay = actualDate.getDate();
    const actualMonth = (actualDate.getMonth() + 1);
    const actualYear = actualDate.getFullYear();
    return `${actualDay} / ${actualMonth} / ${actualYear}`
  }

  const latestOrders = () => {
    if (orders.length > 0) {
      const changeDate = orders.slice().sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return dateA - dateB;
      });
      setFilterOrders(changeDate);
    }
  }
  
  const showAll = () => {
    setFilterOrders(orders);
    latestOrders();
  }
  const filterDay = (actualDate) => {
    const filterByDay = orders.filter((order) => {
      const orderDate = new Date(order.dueDate);
      const comparison = ((orderDate.getDate() + 1) === actualDate.getDate() && orderDate.getMonth() === actualDate.getMonth() && orderDate.getFullYear() === actualDate.getFullYear());
      return (comparison);
    });
    if (filterByDay.length === 0) {
      setFilterOrders([]);
      return setEmptyMessage('para hoje');
    } else {
      setFilterOrders(filterByDay);
    };
  }

  const filterMonth = (actualDate) => {
    const filterByMonth = orders.filter((order) => {
      const orderDate = new Date(order.dueDate);
      const comparison = (orderDate.getMonth() === actualDate.getMonth() && orderDate.getFullYear() === actualDate.getFullYear());
      return (comparison);
    });
    if (filterByMonth.length === 0) {
      setFilterOrders([]);
      return setEmptyMessage('neste mês');
    } else {
      setFilterOrders(filterByMonth);
    };
  }
  
  useEffect(() => {
    setFormatDate(getDate(actualDate));
    latestOrders();
  }, [])

  return (
    <div>
      <Header />
      <div className="info-calendar">
        <div className="calendar-date">
          {formatDate}
        </div>
        <Link className="add-button-calendar" to="/encomendas/add">
          <img alt="Add encomenda" src={addEncomenda} />
          <p>Adicionar <br/> encomenda</p>
        </Link>
      </div>
      <div>
        <Button className="button-verde" onClick={() => showAll()}>Todas</Button>
        <Button className="button-verde" onClick={() => filterDay(actualDate)}>Dia</Button>
        <Button className="button-verde">Semana</Button>
        <Button className="button-verde" onClick={() => filterMonth(actualDate)}>Mês</Button>
      </div>
      <div className="calendar-grid">
      {filterOrders.length > 0 ? filterOrders.map((order, i) => <GridCalendar key={i} order={order} />) : <p>{`Não há encomendas ${emptyMessage}`}</p>}
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  orders: state.orderReducer.orders,
})

export default connect(mapStateToProps)(Calendar);
