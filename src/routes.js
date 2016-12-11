import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './components/HomePage';
import Tasks from './components/Tasks';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="tasks" component={Tasks} />
    <Route path="pending" component={Tasks} />
    <Route path="completed" component={Tasks} />
  </Route>
);