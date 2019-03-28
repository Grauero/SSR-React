/* eslint-disable no-console */

import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import renderer from './utils/renderer';
import createStore from './utils/createStore';
import Routes from './client/Routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  const matchedRoutes = matchRoutes(Routes, req.path);

  // fetch all required data from matched components
  const responsePromises = matchedRoutes.map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  // wait when all promises are resolved and then render components on server
  // store now contains all required data
  Promise.all(responsePromises).then(() => res.send(renderer(req, store)));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
