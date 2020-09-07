import React from 'react';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


function Details() {
  
  function calcValue(quantity, price) {
    const value = quantity * price;
    return value;
  };
  
  return (
    <React.Fragment>
  
      <Header />
      <React.Fragment>
        <h1>Detalhes do Produto</h1>

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

export default Details;
