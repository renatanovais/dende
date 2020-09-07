import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';


function Register(props) {
  const history = useHistory();
  const { products } = props;
  console.log(products);
  return (
    <React.Fragment>
      <Header />
      <React.Fragment>
        <h1>Lista Produto</h1>
        {products.length > 0 ? products.map((product, i) => (
          <div>
            <img alt={product.nameProduct} src={product.img} height="150px" />
            <p>{product.nameProduct}</p>
            <p>Preço: </p>
            <button onClick={() => history.push(`/fichas-tecnicas/details-${i}`)}>+ detalhes</button>
          </div>
        )) : <h4>Nenhum produto cadastrado</h4>}
      </React.Fragment>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  products: state.registerReducer.allProducts,
});

export default connect(mapStateToProps)(Register);
