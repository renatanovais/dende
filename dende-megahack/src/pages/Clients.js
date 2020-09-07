import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/clients.css';
import Header from '../components/Header';
import ClientCard from '../components/ClientCard';
import addCliente from '../images/icons/new-client-icon.png';

function Clients(props) {
  const { clients } = props;
  return (
    <div>
      <Header />
      <div className="clients-list-header">
        <h4 className="clients-list-title">Lista de Clientes</h4>
        <Link className="add-button-client" to="/add-client">
          <img alt="Add cliente" src={addCliente} />
          <p>Adicionar <br/> cliente</p>
        </Link>
      </div>
      <div className="clients-grid">
        {clients.length === 0 ? <p>Nenhum cliente cadastrado</p>
        :
        clients.map((client) => (
          <ClientCard key={client.name} client={client} clients={clients} />
        ))
        }
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients
});

export default connect(mapStateToProps)(Clients);
