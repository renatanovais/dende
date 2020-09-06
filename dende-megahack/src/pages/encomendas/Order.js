import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import ProductInput from '../../components/ProductInput';
import Header from '../../components/Header';
import Button from 'react-bootstrap/esm/Button';
import { scheduleIt, clearProduct } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

function Order(props) {
  const history = useHistory();
  const { productList, registerOrder, clearProducts } = props;

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
          <ProductInput name="Produto" qtde="Quantidade" />
          {(productList.length > 0) ? (
            <div>
              {productList.map((product, i) => i > 0 && i < 1 ? <ProductInput name={product.product} qtde={product.quantity} /> : <ProductInput name="Produto" qtde="Quantidade" /> )}
            </div>
          ): false}
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
            <Form.Control as="select" onChange={(e) => setDelivery(e.target.value)}>
              <option value="">Selecione</option>
              <option value="entregar">Entregar</option>
              <option value="buscar">Buscar</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mais Informações</Form.Label>
            <Form.Control as="textarea" rows="4" placeholder="Detalhes ou mais informações" onChange={(e) => setDetails(e.target.value)} />
          </Form.Group>
          <Button className="button-verde" onClick={() => {
            registerOrder(productList, client, date, delivery, details)
            history.push('/encomendas');
            clearProducts();
          }}>
            Agendar
          </Button>
        </Form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  productList: state.orderReducer.products,
})

const mapDispatchToProps = (dispatch) => ({
  registerOrder: (productList, client, date, delivery, details) => dispatch(scheduleIt(productList, client, date, delivery, details)),
  clearProducts: () => dispatch(clearProduct()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);
