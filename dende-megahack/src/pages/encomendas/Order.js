import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import ProductInput from '../../components/ProductInput';
import Header from '../../components/Header';
import Button from 'react-bootstrap/esm/Button';

function Order() {
  const [client, setClient] = useState();
  const [date, setDate] = useState();
  const [delivery, setDelivery] = useState();
  const [details, setDetails] = useState();

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
          <Form.Group>
            <Form.Label>Cliente</Form.Label>
            <Form.Control placeholder="Nome do Cliente" onChange={(e) => setClient(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Prazo</Form.Label>
            <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Escolha a opção de entrega</Form.Label>
            <Form.Control as="select">
              <option value="">Selecione</option>
              <option value="entregar">Entregar</option>
              <option value="buscar">Buscar</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mais Informações</Form.Label>
            <Form.Control as="textarea" rows="4" placeholder="Detalhes ou mais informações" />
          </Form.Group>
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
