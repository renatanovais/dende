import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';


function Details(props) {
  const { products } = props;
  let total = 0;
  const [product, setProduct] = useState('');
  // const [total, setTotal] = useState(0);

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
              {product.itens.map((item) => (
                <div>
                  {item.item} | {item.quantity} | {item.unity} | {item.price} | {calcValue(item.quantity,item.price)}
                </div>
              ))}
            </div>
            <p>Rendimento: {product.produce}</p>
            <p>Preço total da receita: {total}</p>
          </div>
        ) : <p>Ocorreu algum erro no cadastro do seu produto</p>}
      </React.Fragment>

      <Form.Group>
        <Form.Label>Rendimento</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group>
        <Form.Label>Preço Total da Receita</Form.Label>
        <Form.Control />
      </Form.Group>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="button-verde">
          Método de Cálculo
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">TRA</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Outro</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

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
