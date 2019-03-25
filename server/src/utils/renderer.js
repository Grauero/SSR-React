import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from '../client/components/Home';

export default function() {
  const app = renderToString(<Home />);

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
