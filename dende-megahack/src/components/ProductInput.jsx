import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newProduct } from '../redux/actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ProductInput(props) {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState();

  return (
    <Form.Row>
      <Form.Group>
        <Form.Label>Produto</Form.Label>
        <Form.Control placeholder="Nome do Produto" onChange={(e) => setProduct(e.target.value)} />  
      </Form.Group>
      <Form.Group>
        <Form.Label>Quantidade</Form.Label>
        <Form.Control type="number" placeholder="Quantidade" onChange={(e) => setQuantity(e.target.value)} />  
      </Form.Group>
      <Button className="button-verde" onClick={() => props.saveProduct(product, quantity)}>
        V
      </Button>
    </Form.Row>
  )
};

const mapDispatchToProps = (dispatch) => ({
  saveProduct: (product, quantity) => dispatch(newProduct(product, quantity)),
})

export default connect(null, mapDispatchToProps)(ProductInput);