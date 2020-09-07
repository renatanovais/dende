import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Details(props) {
  const { products } = props;
  const history = useHistory();
  let total = 0;
  const [product, setProduct] = useState('');
  const [method, setMethod] = useState('');
  const [productPrice, setProductPrice] = useState();

  useEffect(() => {
    const { indice } = props.match.params;
    setProduct(products[indice]);
  }, []);
  
  function calcCost(quantity, price) {
    const value = quantity * price;
    total = (total + value);
    console.log('oi');
    return value;
  };

  const calcPrice = (e) => {
    const calcMethod = e.target.value;
    if (calcMethod === 'TRA') return setProductPrice(3 * total);
    if (calcMethod === '2x') return setProductPrice(2 * total);
    if (calcMethod === '80%') return setProductPrice(1.8 * total);
  }

  
  return (
    <React.Fragment>
  
      <Header />
      <React.Fragment>
        <h1>Detalhes do Produto</h1>

        {product !== '' ? (
          <div>
            <p>{product.nameProduct}</p>
            <p>{product.date}</p>
            <div>
              {product.itens.map((item, i) => (
                <div key={i}>
                  {item.item} | {item.quantity} | {item.unity} | {item.price} | {calcCost(item.quantity,item.price)}
                </div>
              ))}
            </div>
            <p>Rendimento: {product.produce}</p>
            <p>Custo total da receita: {total}</p>
          </div>
        ) : <p>Ocorreu algum erro no cadastro do seu produto</p>}
      </React.Fragment>
      <Form.Control className="button-verde" as="select" onChange={(e) => {
        setMethod(e.target.value)
        calcPrice(e)
      }}>
        <option value="metodo">Método de Cálculo</option>
        <option value="TRA">TRA</option>
        <option value="2x">2x</option>
        <option value="80%">80%</option>
      </Form.Control>
      {method !== '' && (
        <div>
          <h5>Preço do produto: {productPrice} </h5>
        </div>
      )}
      <div>
        <h5>Modo de Preparo</h5>
        {product.prepare}
      </div>
      <Form.Group>
        <Button className="button-verde" type="button" onClick={() => history.push('/fichas-tecnicas')}>
          Voltar
        </Button>
      </Form.Group>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  products: state.registerReducer.allProducts,
})

export default connect(mapStateToProps)(Details);
