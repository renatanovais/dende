import React from 'react';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import TextInput from '../components/inputText';

function Register() {

  return (
    <React.Fragment>
      <Header />
      <React.Fragment>
        <h1>Cadastrar Produto</h1>
        <Form.Row>
          <Form.Group>
            <Form.Label>Nome do Produto</Form.Label>
            <Form.Control placeholder="Produto" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data de Cadastro</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Form.Row>
      </React.Fragment>
      
    </React.Fragment>
  );
}
export default Register;
