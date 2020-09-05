import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { doLogin } from '../redux/actions';
import logo from '../images/logos/logo_dende_fonte_laranja.png';

function Login(props) {
  const { login } = props;
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  return (
    <React.Fragment>
      <div>
        <img className="App-logo" alt="Dende" src={logo} />
      </div>
      <Form>
        <Form.Group controlId="formLogin">
          <Form.Control className="login-form" type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formLogin">
          <Form.Control className="login-form" type="password" placeholder="Senha..." onChange={(e) => setSenha(e.target.value)} />
        </Form.Group>
        <Button className="button-verde" type="button" onClick={() => login(email, senha)} >
          Entrar
        </Button>
      </Form>
      <Link to="/home">Link temporário para home</Link>
    </React.Fragment>
  )
};

const mapDispatchToProps = (dispatch) => ({
  login: (email, senha) => dispatch(doLogin(email, senha))
})

export default connect(null, mapDispatchToProps)(Login);
