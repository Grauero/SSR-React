import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';

import Routes from './Routes';
import rootReducer from './store/reducers';

const axiosInstance = axios.create({ baseURL: '/api' });
const routes = renderRoutes(Routes);
const store = createStore(
  rootReducer,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <div>{routes}</div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(app, document.querySelector('#root'));
