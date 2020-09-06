import React from 'react';
import Form from 'react-bootstrap/Form';

function TextInput(props) {
  return (
    <Form.Group>
      <Form.Control placeholder="Ingrediente" value={props.ingrediente} />
      <Form.Control placeholder="Quantidade" value={props.qtdade} />
      <Form.Control placeholder="Unidade" value={props.unidade} />
    </Form.Group>
  );
}
export default TextInput;
