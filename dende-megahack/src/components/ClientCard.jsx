import React from 'react';
import { connect } from 'react-redux';

function ClientCard(props) {
  const { name, birthday, phone, email, address, registryDate } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>Aniversário: {birthday}</p>
      <p>Telefone: {phone}</p>
      <p>E-mail: {email}</p>
      <p>Endereço: {address}</p>
      <p>Data de cadastro:{registryDate}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.clientsReducer.clients[0].name,
  birthday: state.clientsReducer.clients[0].birthday,
  phone: state.clientsReducer.clients[0].phone,
  email: state.clientsReducer.clients[0].email,
  address: state.clientsReducer.clients[0].address,
  registryDate: state.clientsReducer.clients[0].registryDate,
});

export default connect(mapStateToProps)(ClientCard);
