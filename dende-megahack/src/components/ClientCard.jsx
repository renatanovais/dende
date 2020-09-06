import React from 'react';

export default function ClientCard(props) {
  const { name, birthday, phone, email, address, registryDate } = props.client;
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
