import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LoginPage from './components/LoginPage';
import Tasks from './components/Tasks';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Tasks} />
    <Route path="login" component={LoginPage} />
    <Route path="pending" component={Tasks} />
    <Route path="completed" component={Tasks} />
  </Route>
);