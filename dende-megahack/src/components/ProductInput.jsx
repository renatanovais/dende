import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import checkIcon from '../images/icons/check-laranja-cinza.svg';
import { newProduct } from '../redux/actions';

function ProductInput(props) {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState();
  const [disable, setDisable] = useState(false);

  return (
    <Form.Row className="row-form">
      <Form.Group id="product-input">
        <Form.Label className="label-form">Produto</Form.Label>
        <Form.Control placeholder={props.name} onChange={(e) => setProduct(e.target.value)} disabled={disable} />  
      </Form.Group>
      <Form.Group id="qtd-input">
        <Form.Label className="label-form">Quantidade</Form.Label>
        <Form.Control type="number" placeholder={props.qtde} onChange={(e) => setQuantity(e.target.value)} disabled={disable} />  
      </Form.Group>
      <Button className="button-verde check-input-button" onClick={() => {
        props.saveProduct(product, quantity);
        setDisable(!disable);
      }}>
        <img alt="Confirmar" src={checkIcon} height="40px" />
      </Button>
    </Form.Row>
  )
};

const mapDispatchToProps = (dispatch) => ({
  saveProduct: (product, quantity) => dispatch(newProduct(product, quantity)),
})

export default connect(null, mapDispatchToProps)(ProductInput);