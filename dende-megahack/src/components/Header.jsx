import React from 'react';
import { connect } from 'react-redux';
import logoHorizontal from '../images/logos/logo_dende_horizontal_laranja.png';
import configs from '../images/icons/configs-icon.png';

function Header(props) {
  return (
    <header className="header-comp">
      <img alt="Dendê" src={logoHorizontal} height="30" />
      <p>{props.email}</p>
      <img alt="Configurações" src={configs} height="30" />
    </header>
  )
}

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
})

export default connect(mapStateToProps)(Header);
