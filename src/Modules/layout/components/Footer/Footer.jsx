import React from 'react';

import Logo from '../../images/logoKasaWhite.svg';
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <img src={Logo} alt="" width={122} />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
