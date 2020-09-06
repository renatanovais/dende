import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { saveClient } from '../redux/actions';

function NewClient(props) {
  const { newClient } = props;
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [observations, setObs] = useState('');
  const [registryDate, setRegistryDate] = useState('');
  return (
    <div>
      <Header />
      <h1>Cadastrar cliente</h1>
      <Form className="form-container">
        <Form.Row>
          <Form.Group>
            <Form.Label>Nome completo:</Form.Label>
            <Form.Control placeholder="Insira o nome" onChange={(e) => setName(e.target.value)} />
          </Form.Group>
        </Form.Row>
          <Form.Group>
            <Form.Label>Data de aniversário:</Form.Label>
            <Form.Control type="date" onChange={(e) => setBirthday(e.target.value)} />
          </Form.Group>
        <Form.Row>
          <Form.Group>
            <Form.Label>Número de telefone:</Form.Label>
            <Form.Control placeholder="(DDD) 9____-____" type="tel" onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control placeholder="Insira seu e-mail" type="mail" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Endereço:</Form.Label>
            <Form.Control type="Rua, Nº, Bairro, Cidade, Estado" onChange={(e) => setAddress(e.target.value)} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Observações:</Form.Label>
            <Form.Control type="Acrescente aqui detalhes específicos sobre seu cliente" onChange={(e) => setObs(e.target.value)} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Cadastrado em:</Form.Label>
            <Form.Control type="datetime-local" onChange={(e) => setRegistryDate(e.target.value)} />
          </Form.Group>
        </Form.Row>
      </Form>
      <Button className="button-verde" onClick={() => newClient(name, birthday, phone, email, address, observations, registryDate)}>
        Cadastrar
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  newClient: (name, birthday, phone, email, address, observations, registryDate) => dispatch(saveClient(name, birthday, phone, email, address, observations, registryDate))
})

export default connect(null, mapDispatchToProps)(NewClient);
