import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="root">
        <Header />
        <main className="content">{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
