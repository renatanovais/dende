import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logoHorizontal from '../images/logos/logo_dende_horizontal_laranja.png';
import configs from '../images/icons/configs-icon.png';

function Header(props) {
  return (
    <header className="header-comp">
      <div>
        <Link to="/home">
          <img id="logo-img" alt="Dendê" src={logoHorizontal} height="90px" />
        </Link>
      </div>
      <div className="header-configs">
        <p>{props.email}rnovaiscs@gmail.com
        <img id="configs-img" alt="Configurações" src={configs} height="55px" />
        </p>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
});

export default connect(mapStateToProps)(Header);
