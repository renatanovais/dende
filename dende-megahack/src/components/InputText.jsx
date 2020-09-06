import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newItem } from '../redux/actions/index';
import Form from 'react-bootstrap/Form';

function TextInput(props) {
  const [item, setItem] = useState();
  const [quantity, setQuantity] = useState();
  const [unity, setUnity] = useState();
  const [price, setPrice] = useState();

  return (
    <Form.Row>
      <Form.Group>
        <Form.Label>Ingrediente</Form.Label>
        <Form.Control placeholder={props.ingrediente} onChange={(e) => setItem(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Quantidade</Form.Label>
        <Form.Control
          type="number"
          placeholder={props.qtde}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Unidade</Form.Label>
        <Form.Control placeholder={props.unidade} onChange={(e) => setUnity(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Preço</Form.Label>
        <Form.Control
          type="number"
          placeholder={props.preco}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          required
          type="checkbox"
          label="Check"
          onClick={() => props.saveItem(item, quantity, unity, price)}
        />
      </Form.Group>
    </Form.Row>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveItem: (item, quantity, unity, price) => dispatch(newItem(item, quantity, unity, price)),
});

export default connect(null, mapDispatchToProps)(TextInput);
