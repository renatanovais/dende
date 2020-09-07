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
        <Form.Control placeholder={props.item} onChange={(e) => setItem(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Quantidade</Form.Label>
        <Form.Control
          type="number" min="0.00" max="10000.00" step="0.01"
          placeholder={props.qtde}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Unidade</Form.Label>
        <Form.Control as="select" onChange={(e) => setUnity(e.target.value)}>
          <option value="">Unid.</option>
          <option value="kg">Kg</option>
          <option value="litro">Litro</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Preço Kg / L</Form.Label>
        <Form.Control
          type="number" min="0.00" max="10000.00" step="0.01"
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
