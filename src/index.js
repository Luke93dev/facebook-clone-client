import React from 'react';
import ReactDOM from '@hot-loader/react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore, { history } from './modules/Store';

import 'normalize.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);
