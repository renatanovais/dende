import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import '../../css/products.css';
import Lupa from '../../images/icons/zoom-in-laranja.svg';
import Header from '../../components/Header';
import addFicha from '../../images/icons/new-recipe-icon.png';


function Register(props) {
  const history = useHistory();
  const { products } = props;
  console.log(products);
  return (
    <React.Fragment>
      <Header />
      <div className="products-list-header"> 
        <h4 className="products-list-title">Lista Produto</h4>
        <Link className="add-button-product" to="/fichas-tecnicas/add">
          <img alt="Add encomenda" src={addFicha} height="95" />
          <p>Adicionar <br/> ficha técnica</p>
        </Link>
      </div>
      <div className="products-grid">
        {products.length > 0 ? products.map((product, i) => (
          <div className="product-card">
            <div className="product-card-header">
              <h4>{product.nameProduct}</h4>
              <button onClick={() => history.push(`/fichas-tecnicas/details-${i}`)}>
                <img alt="Mais detalhes" src={Lupa} />
              </button>
            </div>
            <img alt={product.nameProduct} src={product.img} height="150px" width="180px" />
            <p className="product-price">Preço: {product.productPrice} </p>
          </div>
        )) : <h4>Nenhum produto cadastrado</h4>}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  products: state.registerReducer.allProducts,
});

export default connect(mapStateToProps)(Register);
