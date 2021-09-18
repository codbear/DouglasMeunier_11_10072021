import React from 'react';

import { Layout } from '../../layout';
import Loader from '../vectors/Loader.svg';
import './LoadingScreen.scss';

class LoadingScreen extends React.Component {
  render() {
    return (
      <Layout>
        <div className="Loading">
          <img src={Loader} alt="" className="Lodging_loader" />
        </div>
      </Layout>
    );
  }
}

export default LoadingScreen;
