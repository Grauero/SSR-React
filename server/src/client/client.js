import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Routes from './Routes';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(app, document.querySelector('#root'));
