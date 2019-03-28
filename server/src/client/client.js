import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Routes from './Routes';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
);
const routes = renderRoutes(Routes);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <div>{routes}</div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(app, document.querySelector('#root'));
