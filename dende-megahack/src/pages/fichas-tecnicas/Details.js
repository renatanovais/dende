import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';


function Details(props) {
  const { products } = props;
  let total = 0;
  const [product, setProduct] = useState('');
  const [method, setMethod] = useState('');

  useEffect(() => {
    const { indice } = props.match.params;
    setProduct(products[indice]);
    console.log(products[indice]);
  }, []);
  
  function calcValue(quantity, price) {
    const value = quantity * price;
    total = (total + value);
    console.log('oi');
    return value;
  };

  
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
                  {item.item} | {item.quantity} | {item.unity} | {item.price} | {calcValue(item.quantity,item.price)}
                </div>
              ))}
            </div>
            <p>Rendimento: {product.produce}</p>
            <p>Custo total da receita: {total}</p>
          </div>
        ) : <p>Ocorreu algum erro no cadastro do seu produto</p>}
      </React.Fragment>
      <Form.Control className="button-verde" as="select" onChange={(e) => setMethod(e.target.value)}>
        <option value="metodo">Método de Cálculo</option>
        <option value="TRA">TRA</option>
      </Form.Control>

      <div>
        <h5>Preço do produto: {method === '' ? '' : total * 3} </h5>
      </div>  

      <Form.Group>
        <Form.Label>Preço de Venda</Form.Label>
        <Form.Control onChange={calcValue}/>
      </Form.Group>

      <Form.Group>
        <Button className="button-verde" type="button">
          Ok
        </Button>
      </Form.Group>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  products: state.registerReducer.allProducts,
})

export default connect(mapStateToProps)(Details);
