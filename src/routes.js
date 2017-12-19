import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import app from './app';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={app} />
    </Switch>
  </BrowserRouter>
);

export default routes;
