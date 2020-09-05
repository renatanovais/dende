import React, { useState } from 'react';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function NewClient() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  return (
    <div>
      <Header />
      <h1>Cadastrar cliente</h1>
      <Form>
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
            <Form.Control placeholder="(DDD) 9____-____" type="tel" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control placeholder="Insira seu e-mail" type="mail" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Endereço:</Form.Label>
            <Form.Control type="Rua, Nº, Bairro, Cidade, Estado" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Observações:</Form.Label>
            <Form.Control type="Acrescente aqui detalhes específicos sobre seu cliente" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Cadastrado em:</Form.Label>
            <Form.Control type="datetime-local" />
          </Form.Group>
        </Form.Row>
      </Form>
      <Button className="button-verde">
        Cadastrar
      </Button>
    </div>
  )
}