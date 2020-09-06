import React from 'react';
import { connect } from 'react-redux';

function ClientCard(props) {
  const { name, birthday, phone, email, address, registryDate } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>Aniversário: {birthday}</p>
      <p>Telefone: {phone}</p>
      <p>E-mail: {email}</p>
      <p>Endereço: {address}</p>
      <p>Data de cadastro:{registryDate}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.clientsReducer.client.name,
  birthday: state.clientsReducer.client.birthday,
  phone: state.clientsReducer.client.phone,
  email: state.clientsReducer.client.email,
  address: state.clientsReducer.client.address,
  registryDate: state.clientsReducer.client.registryDate,
});

export default connect(mapStateToProps)(ClientCard);
