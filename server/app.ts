import express = require('express');
import * as path from 'path';
import * as bodyParser from 'body-parser';
// import cors from 'cors';

import { default as homeRouter } from  './routes/homeRouter';
// import { default as searchRouter } from './routes/searchRouter';
import { default as imagesRouter } from './routes/imagesRouter';

const app = express();
const PORT = process.env.PORT || 5000;
// настраиваем view engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '../client/build')));
// app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/', homeRouter);
// app.use('/search', searchRouter);
app.use('/images', imagesRouter);
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(PORT);
});