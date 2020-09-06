import React from 'react';

export default function ClientCard(props) {
  const { name, birthday, phone, email, address, observations } = props.client;
  return (
    <div>
    <div className="client-card">
      <h4>{name}</h4>
      <p className="email-info">{email}</p>
      <div className="geral-info">
        <div className="row-info">
          <div>
            <p>Aniversário:</p>
            <p className="row-data">{birthday}</p>
          </div>
          <div>
           <p>Telefone:</p>
           <p className="row-data">{phone}</p>
          </div>
        </div>
        <div className="other-info">
          <p>Endereço: </p>
          <p className="other-info-data">{address}</p>
        </div>
        <div className="other-info">
          <p>Detalhes: </p>
          <p className="other-info-data italic-info">{observations}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
