import React from 'react';

import Logo from '../../images/logoKasaWhite.svg';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <img src={Logo} alt="" width={122} />
        <p className="Footer_text">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
