import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputText from '../components/InputText';
import { connect } from 'react-redux';

function Register(props) {
  const { itemList, registerItem } = props;
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

      <InputText />

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
      <Form.Group>
        <Button
          className="button-verde"
          type="button"
          onClick={() => {
            registerItem(itemList, name, date, produce, prepare);
            history.push('/fichas-tecnicas');
          }}
        >
          Ok
        </Button>
      </Form.Group>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  itemList: state.registerReducer.itens,
});

const mapDispatchToProps = (dispatch) => ({
  registerItem: (itemList, client, date, delivery, details) =>
    dispatch(scheduleIt(productList, client, date, delivery, details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
