import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import GridCalendar from '../../components/GridCalendar';
import addEncomenda from '../../images/icons/new-event-icon.png';


function Calendar(props) {
  const { orders } = props;

  const getDate = () => {
    const actualDate = new Date();
    const actualDay = actualDate.getDate();
    const actualMonth = actualDate.getMonth();
    const actualYear = actualDate.getFullYear();
    console.log('oi')
    return `${actualDay} / ${actualMonth} / ${actualYear}`
  }
  
  return (
    <div>
      <Header />
      <div className="info-calendar">
        <div className="calendar-date">
          {getDate()}
        </div>
        <Link className="add-button-calendar" to="/encomendas/add">
          <img alt="Add encomenda" src={addEncomenda} />
          <p>Adicionar <br/> encomenda</p>
        </Link>
      </div>
      <div className="calendar-grid">
      {orders.length > 0 ? orders.map((order, i) => <GridCalendar key={i} order={order} />) : <p>Não há encomendas</p>}
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  orders: state.orderReducer.orders,
})

export default connect(mapStateToProps)(Calendar);
