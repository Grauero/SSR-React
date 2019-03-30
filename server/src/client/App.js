import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
  const routes = renderRoutes(route.routes);

  return (
    <div>
      <Header />
      {routes}
    </div>
  );
};

App.propTypes = {
  route: PropTypes.instanceOf(Object)
};

// function for loading all required data without actual render
const loadData = store => store.dispatch(fetchCurrentUser());

export default { loadData, component: App };
