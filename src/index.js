import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

import App from './App';
import routes from './routes';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../public/App.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
