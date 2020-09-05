import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import Header from '../components/Header';

// se os dados viessem de uma API própria
// teria um useEffect(() => getClientsFromAPI, [])

export default function Clients(props) {
//  const { clients } = props;
  return (
    <div>
      <Header />
      <h1>Lista de Clientes</h1>
{/*       <div>
        {clients.map((client) => (
          <ClientCard key={client.name} />
        ))}
      </div> */}
      <h2><Link to="/add-client">Cadastrar novo cliente</Link></h2>
    </div>
  )
};

/* const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients
}); */

// export default connect(mapStateToProps)(Clients);
