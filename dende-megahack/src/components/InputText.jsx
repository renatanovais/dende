import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newItem } from '../redux/actions/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import checkIcon from '../images/icons/check-verde-cinza.svg';


function TextInput(props) {
  const [item, setItem] = useState();
  const [quantity, setQuantity] = useState();
  const [unity, setUnity] = useState();
  const [price, setPrice] = useState();
  const [disable, setDisable] = useState(false);


  return (
    <Form.Row>
      <Form.Group>
        <Form.Label className="label-form">Ingrediente</Form.Label>
        <Form.Control disabled={disable} placeholder={props.item} onChange={(e) => setItem(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label className="label-form">Quantidade</Form.Label>
        <Form.Control
          type="number" min="0.00" max="10000.00" step="0.01"
          placeholder={props.qtde}
          disabled={disable}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="label-form">Unidade</Form.Label>
        <Form.Control disabled={disable} as="select" onChange={(e) => setUnity(e.target.value)}>
          <option value="">Unid.</option>
          <option value="kg">Kg</option>
          <option value="litro">Litro</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label className="label-form">Preço Kg / L</Form.Label>
        <Form.Control
          type="number" min="0.00" max="10000.00" step="0.01"
          placeholder={props.preco}
          disabled={disable}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <Button className="button-verde check-input-button" onClick={() => {props.saveItem(item, quantity, unity, price);
        setDisable(!disable);
      }} disabled={disable}>
        <img alt="Confirmar" src={checkIcon} height="40px" />
      </Button>
    </Form.Row>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveItem: (item, quantity, unity, price) => dispatch(newItem(item, quantity, unity, price)),
});

export default connect(null, mapDispatchToProps)(TextInput);
