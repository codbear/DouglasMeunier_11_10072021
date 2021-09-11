import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { ROUTES } from '../../../router';
import Logo from '../../images/logoKasa.svg';
import '../../styles/Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  getNavItemClassName(route) {
    const {
      location: { pathname },
    } = this.props;

    const isActive = pathname === route;

    return isActive ? 'navItem--active' : 'navItem';
  }

  render() {
    return (
      <header className="header">
        <img src={Logo} alt="" />
        <nav>
          <ul className="mainNav">
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
