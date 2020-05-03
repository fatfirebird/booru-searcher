import express = require('express');
import * as path from 'path';
import * as bodyParser from 'body-parser';

import { default as homeRouter } from  './routes/homeRouter';
import { default as searchRouter } from './routes/searchRouter';
import { default as imagesRouter } from './routes/imagesRouter';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use('/', homeRouter);
app.use('/search', searchRouter);
// app.use('/gallery')
app.use('/images', imagesRouter);
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(PORT);
});