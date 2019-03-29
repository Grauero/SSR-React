import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import Header from './components/Header';

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

export default { component: App };
