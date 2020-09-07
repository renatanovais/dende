import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import '../../css/orders.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import ProductInput from '../../components/ProductInput';
import Header from '../../components/Header';
import { scheduleIt, clearProduct } from '../../redux/actions';
import addCliente from '../../images/icons/new-client-icon.png';


function Order(props) {
  const history = useHistory();
  const { productList, registerOrder, clearProducts, clients } = props;

  const [client, setClient] = useState('client');
  const [date, setDate] = useState();
  const [delivery, setDelivery] = useState();
  const [details, setDetails] = useState();
  const [disableByClients, setDisableByClients] = useState(true);
  const [buttonDisable, setButtonDisable] = useState(true);

  const dropdownClients = (param) => {
    return (
      <>
        <Form.Control className="list-client-select" as="select" title="Clientes" onChange={(e) => { setClient(e.target.value); noClientsDisable(e) }}>
          <option value="client">Cliente</option>
          {param.map((client, i) => <option key={i} value={client.name}>{client.name}</option>)}
        </Form.Control>
        <Link className="link-add-client" to="/add-client">
          <img alt="Add encomenda" src={addCliente} height="95" />
        </Link>
      </>
    );
  }

  const noClientsDisable = (e) => {
    if (client !== '' || client !== 'client') {
      setDisableByClients(false);
    }

    if (e.target.value === 'client') {
      setDisableByClients(!disableByClients);
    }
  }

  useEffect(() => {
    if (client !== '' && productList.length > 0 && date && delivery) {
      setButtonDisable(false);
    }
  }, [client, productList, date, delivery])

  return (
    <div>
      <Header />
      <div className="add-order-container">
        <div className="add-order-header">
        <h4 className="add-order-title">Agendar Encomenda</h4>
        {clients.length > 0 ? dropdownClients(clients) :
          <Link className="add-button-client" to="/add-client">
            <img alt="Add encomenda" src={addCliente} />
            <p>Adicionar cliente</p>
          </Link>
        }
      </div>
      <Form>
        <ProductInput name="Produto" qtde="Qtde" client={client} />
        {(productList.length > 0) ? (
          <div>
            {productList.map((product, i) => i > 0 && i < 1 ? <ProductInput name={product.product} qtde={product.quantity} /> : <ProductInput name="Produto" qtde="Quantidade" />)}
          </div>
        ) : false}
        <Form.Row className="select-row">
          <Form.Group>
            <Form.Label className="label-form">Prazo</Form.Label>
            <Form.Control type="date" onChange={(e) => setDate(e.target.value)} disabled={disableByClients} />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label-form">Escolha a opção de entrega</Form.Label>
            <Form.Control as="select" onChange={(e) => setDelivery(e.target.value)} disabled={disableByClients}>
              <option value="">Selecione</option>
              <option value="Entregar">Entregar</option>
              <option value="Buscar">Buscar</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label className="label-form">Mais Informações</Form.Label>
          <Form.Control as="textarea" rows="4" placeholder="Detalhes ou mais informações" onChange={(e) => setDetails(e.target.value)} disabled={disableByClients} />
        </Form.Group>
      </Form>
      <Button className="button-verde" disabled={buttonDisable} onClick={() => {
        registerOrder(productList, client, date, delivery, details)
        history.push('/encomendas');
        clearProducts();
      }}>
        Agendar
        </Button>
    </div>
    </div >
  )
}

const mapStateToProps = (state) => ({
  productList: state.orderReducer.products,
  clients: state.clientsReducer.clients,
})

const mapDispatchToProps = (dispatch) => ({
  registerOrder: (productList, client, date, delivery, details) => dispatch(scheduleIt(productList, client, date, delivery, details)),
  clearProducts: () => dispatch(clearProduct()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);
