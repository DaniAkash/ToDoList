import React, {Component} from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LoginPage from './components/LoginPage';
import Tasks from './components/Tasks';
import PendingTasks from './components/Tasks/PendingTasks';
import CompletedTasks from './components/Tasks/CompletedTasks';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Tasks} />
    <Route path="login" component={LoginPage} />
    <Route path="pending" component={PendingTasks} />
    <Route path="completed" component={CompletedTasks} />
  </Route>
);