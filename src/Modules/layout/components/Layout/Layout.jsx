import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <Header />
        <main className="Layout_children">{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
