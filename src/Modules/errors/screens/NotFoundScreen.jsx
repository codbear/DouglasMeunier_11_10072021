import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../router';
import { Layout } from '../../layout';
import './NotFoundScreen.scss';

class NotFoundScreen extends React.Component {
  render() {
    return (
      <Layout>
        <div className="NotFoundScreen">
          <p className="NotFoundScreen_errorCode">404</p>
          <p className="NotFoundScreen_errorMessage">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to={ROUTES.INDEX}>Retourner sur la page d'accueil</Link>
        </div>
      </Layout>
    );
  }
}

export default NotFoundScreen;
