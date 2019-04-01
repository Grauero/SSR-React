/* eslint-disable no-console */
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';

import renderer from './utils/renderer';
import createStore from './utils/createStore';
import Routes from './client/Routes';

const app = express();
const PORT = process.env.PORT || 3000;

// proxy all /api routes to the API server
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(options) {
      options.headers['x-forwarded-host'] = 'localhost:3000';
      return options;
    }
  })
);
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);
  const matchedRoutes = matchRoutes(Routes, req.path);

  // fetch all required data from matched components
  const responsePromises = matchedRoutes
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise(resolve => promise.then(resolve).catch(resolve));
      }
    });

  // wait when all promises are resolved and then render components on server
  // store now contains all required data
  Promise.all(responsePromises).then(() => {
    // context object for catching 404 errors and redirects
    const context = {};
    const content = renderer(req, store, context);
    let statusCode;

    statusCode = context.url ? 301 : 200;
    statusCode = context.notFound ? 404 : 200;

    statusCode === 301
      ? res.status(statusCode).redirect(context.url)
      : res.status(statusCode).send(content);
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
