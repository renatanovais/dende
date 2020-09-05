import React from 'react';
import { connect } from 'react-redux';

// se os dados viessem de uma API própria
// teria um useEffect(() => getClientsFromAPI, [])

export function Clients(props) {
//  const { clients } = props;
  return (
    <div>
      <h1>Lista de Clientes</h1>
{/*       <div>
        {clients.map((client) => (
          <ClientCard key={client.name} />
        ))}
      </div> */}
    </div>
  )
};

/* const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients
}); */

// export default connect(mapStateToProps)(Clients);
