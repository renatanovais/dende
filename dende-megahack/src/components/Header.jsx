import React from 'react';
import { connect } from 'react-redux';
import logoHorizontal from '../images/logos/logo_dende_horizontal_laranja.png';
import configs from '../images/icons/configs-icon.png';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header-comp">
      <div>
        <Link to="/home">
          <img alt="Dendê" src={logoHorizontal} height="90px" />
        </Link>
      </div>
      <div className="header-configs">
        <p>{props.email}</p>
        <img alt="Configurações" src={configs} height="55px" />
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
});

export default connect(mapStateToProps)(Header);
