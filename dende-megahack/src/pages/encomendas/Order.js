import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import ProductInput from '../../components/ProductInput';
import Header from '../../components/Header';
import Button from 'react-bootstrap/esm/Button';

function Order() {

  // const addNew = () => { 

  // }

  return (
    <div>
      <Header />
      <h3>Agendar Encomenda</h3>
      <div>
        <Form>
          <ProductInput />
          <Button className="button-verde">
            + produto
          </Button>
          <Form.Control placeholder="Nome do Cliente" />
          <Form.Control type="date" />
          <Form.Row>
            <Form.Check type="radio" id="entregar" name="entregar" label="Entregar" />
            <Form.Check type="radio" id="buscar" name="buscar" label="Buscar" />
          </Form.Row>
          <Form.Control as="textarea" rows="4" placeholder="Detalhes ou mais informações" />
          <Button className="button-verde">
            Agendar
          </Button>
        </Form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  teste: state.loginReducer.email,
})

export default connect(mapStateToProps)(Order);
