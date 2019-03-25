/* eslint-disable no-console */
import express from 'express';

import renderer from './utils/renderer';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.send(renderer()));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
