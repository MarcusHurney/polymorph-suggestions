import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('react')
);
