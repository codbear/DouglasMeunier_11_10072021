import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { ROUTES } from '../../../router';
import './Header.scss';

class Header extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  getIsActive(route) {
    const {
      location: { pathname },
    } = this.props;

    const isActive = pathname === route;

    return isActive ? 'active' : '';
  }

  render() {
    return (
      <header className="Header">
        <h1 className="Header_logo">Kasa</h1>
        <nav>
          <ul className="Header_mainNav">
            <li className={'Header_navItem ' + this.getIsActive(ROUTES.INDEX)}>
              <Link to={ROUTES.INDEX}>Accueil</Link>
            </li>
            <li className={'Header_navItem ' + this.getIsActive(ROUTES.ABOUT)}>
              <Link to={ROUTES.ABOUT}>A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
