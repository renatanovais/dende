import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { doLogin } from '../redux/actions';
import logo from '../images/logos/logo_dende_fonte_laranja.png';

/* função pro futuro: ao clicar no enter, fazer o login */
/* function teclaEnter(tecla) {
  if (tecla.key === 'Enter') {
    executarFunção();
  }
} */

function Login(props) {
  const { login } = props;
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  return (
    <React.Fragment>
      <div className="App-logo">
        <img alt="Dende" src={logo} />
      </div>
      <div>
        <Form className="login-container">
          <Form.Group controlId="formLogin">
            <Form.Label className="form-label">E-mail:</Form.Label>
            <Form.Control className="login-form" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              Seu e-mail está seguro conosco. Não iremos compartilhar seus dados.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formLogin">
            <Form.Label className="form-label">Senha:</Form.Label>
            <Form.Control className="login-form" type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
          </Form.Group>
          <Link className="link-container" to="/home">
            <Button className="button-verde" type="button" onClick={() => login(email, senha)} >
              Entrar
            </Button>
          </Link>
        </Form>
      </div>
    </React.Fragment>
  )
};

const mapDispatchToProps = (dispatch) => ({
  login: (email, senha) => dispatch(doLogin(email, senha))
})

export default connect(null, mapDispatchToProps)(Login);
