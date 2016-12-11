import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import localforage from 'localforage';

import configureStore from './store';
import routes from './routes';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../public/App.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
persistStore(store, {storage: localforage});

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
