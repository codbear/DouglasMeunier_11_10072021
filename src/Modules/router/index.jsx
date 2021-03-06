import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../home';
import { Lodging } from '../lodgings';
import { About } from '../about';
import { NotFound } from '../errors';

export const ROUTES = {
  INDEX: '/',
  SINGLE: '/logements/:id',
  ABOUT: '/a-propos',
  ERROR: {
    NOT_FOUND: '/erreur-404',
  },
};

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path={ROUTES.INDEX}>
            <Home />
          </Route>

          <Route exact path={ROUTES.SINGLE}>
            <Lodging />
          </Route>

          <Route exact path={ROUTES.ABOUT}>
            <About />
          </Route>

          <Route exact path={ROUTES.ERROR.NOT_FOUND}>
            <NotFound />
          </Route>

          <Route path="*">
            <Redirect to={ROUTES.ERROR.NOT_FOUND} />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;
