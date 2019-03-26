import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Routes from '../client/Routes';

export default function({ path }) {
  const app = renderToString(
    <StaticRouter location={path} context={{}}>
      <Routes />
    </StaticRouter>
  );

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${app}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}
