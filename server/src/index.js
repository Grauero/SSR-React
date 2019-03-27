/* eslint-disable no-console */

import 'babel-polyfill';
import express from 'express';

import renderer from './utils/renderer';
import createStore from './utils/createStore';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  res.send(renderer(req, store));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
