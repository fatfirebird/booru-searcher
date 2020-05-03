import express = require('express');
import * as path from 'path';
import * as bodyParser from 'body-parser';

import { default as homeRouter } from  './routes/homeRouter';
import { default as imagesRouter } from './routes/imagesRouter';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.json());

app.use('/images', imagesRouter);
app.use('*', homeRouter)

app.listen(PORT, () => {
  console.log(PORT);
});