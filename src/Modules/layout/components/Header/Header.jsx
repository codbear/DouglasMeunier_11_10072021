import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { ROUTES } from '../../../router';
import Logo from '../../images/logoKasa.svg';
import './Header.scss';

class Header extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  getNavItemClassName(route) {
    const {
      location: { pathname },
    } = this.props;

    const isActive = pathname === route;

    return isActive ? 'Header_navItem--active' : 'Header_navItem';
  }

  render() {
    return (
      <header className="Header">
        <img src={Logo} alt="" className="Header_logo" />
        <nav>
          <ul className="Header_mainNav">
            <li className={this.getNavItemClassName(ROUTES.INDEX)}>
              <Link to={ROUTES.INDEX}>Accueil</Link>
            </li>
            <li className={this.getNavItemClassName(ROUTES.ABOUT)}>
              <Link to={ROUTES.ABOUT}>A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
