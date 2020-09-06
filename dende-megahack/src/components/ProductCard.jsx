import React from 'react';

export default function ProductCard(props) {
  const { item, quantity, price, date, rendimento, prepare } = props.itens;
  return (
    <div>
      <h2>{item}</h2>
      <p>Quantidade: {quantity}</p>
      <p>Preço: {price}</p>
      <p>Data: {date}</p>
      <p>Rendimento: {rendimento}</p>
      <p>Modo de Preparo:{prepare}</p>
    </div>
  );
}
