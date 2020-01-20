import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './redux/store';
import Bellotero from './Bellotero';

ReactDOM.render(
  <Provider store={store}>
    <Bellotero />
  </Provider>,
  document.getElementById('app'),
);
