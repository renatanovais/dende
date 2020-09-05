import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

      <Form>
        <Form.Row>
          <Form.Group>
            <Form.Label>Ingrediente</Form.Label>
            <Form.Control placeholder="Ingrediente" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Quantidade</Form.Label>
            <Form.Control placeholder="Quantidade" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Unidade de medida</Form.Label>
            <Form.Control placeholder="Unidade" />
          </Form.Group>

          <Form.Group>
            <Form.Check type="checkbox" label="Check" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Rendimento</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>Modo de Preparo</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Form.Control placeholder="URL da Imagem do seu Produto" />
        <Link to="https://pt-br.imgbb.com/">Saiba como obter a URL da sua imagem</Link>
      </Form>
      <Form.Group>
        <Button className="button-verde" type="button">
          Ok
        </Button>
      </Form.Group>
    </React.Fragment>
  );
}
export default Register;
