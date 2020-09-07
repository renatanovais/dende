import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header';
import GridCalendar from '../../components/GridCalendar';
import addEncomenda from '../../images/icons/new-event-icon.png';

function getWeekDates() {

  let now = new Date();
  let dayOfWeek = now.getDay(); //0-6
  let numDay = now.getDate();

  let start = new Date(now); //copy
  start.setDate(numDay - dayOfWeek);
  start.setHours(0, 0, 0, 0);


  let end = new Date(now); //copy
  end.setDate(numDay + (7 - dayOfWeek));
  end.setHours(0, 0, 0, 0);

  return [start, end];
}

function Calendar(props) {
  const { orders } = props;
  const actualDate = new Date();
  const [filterOrders, setFilterOrders] = useState(orders);
  const [formatDate, setFormatDate] = useState();
  const [emptyMessage, setEmptyMessage] = useState('cadastradas');
  const [weekStart, weekEnd] = getWeekDates();
  
  const getDate = (actualDate) => {
    const actualDay = actualDate.getDate();
    const actualMonth = (actualDate.getMonth() + 1);
    const actualYear = actualDate.getFullYear();
    return `${actualDay} / ${actualMonth} / ${actualYear}`
  }

  const latestOrders = (array) => {
    if (array.length > 0) {
      const changeDate = array.slice().sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return dateA - dateB;
      });
      setFilterOrders(changeDate);
    }
  }
  
  const showAll = () => {
    latestOrders(orders);
  }
  const filterDay = (actualDate) => {
    const filterByDay = orders.filter((order) => {
      const orderDate = new Date(order.dueDate);
      const comparison = ((orderDate.getDate() + 1) <= actualDate.getDate() && orderDate.getMonth() === actualDate.getMonth() && orderDate.getFullYear() === actualDate.getFullYear());
      return (comparison);
    });
    if (filterByDay.length === 0) {
      setFilterOrders([]);
      return setEmptyMessage('para hoje');
    } else {
      latestOrders(filterByDay);
    };
  }

  const filterWeek = () => {
    const filterByWeek = orders.filter((order) => {
      const orderDate = new Date(order.dueDate);
      console.log('order', orderDate);
      console.log('start', weekStart);
      console.log('end', weekEnd);
      const comparison = (weekStart.getDate() <= orderDate.getDate() && weekEnd.getDate() >= orderDate.getDate() && weekStart.getMonth() === orderDate.getMonth() && weekStart.getFullYear() === orderDate.getFullYear());
      console.log(comparison);
      return (comparison);
    });
    if (filterByWeek.length === 0) {
      setFilterOrders([]);
      return setEmptyMessage('nesta semana');
    } else {
      latestOrders(filterByWeek);
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
      latestOrders(filterByMonth);
    };
  }
  
  useEffect(() => {
    setFormatDate(getDate(actualDate));
    latestOrders(orders);
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
        <Button className="button-verde" onClick={() => filterWeek()}>Semana</Button>
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
