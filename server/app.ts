import express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import { default as homeRouter } from  './routes/homeRouter';
import { default as searchRouter } from './routes/searchRouter';
import { default as imagesRouter } from './routes/imagesRouter';

const app = express();

// настраиваем view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname));
app.use(cors());
app.use(bodyParser.json());

app.use('/', homeRouter);
app.use('/search', searchRouter);
app.use('/images', imagesRouter);
app.use((req, res) => {
  res.status(404).render('404');
})

app.listen((process.env.PORT || 5000), () => {
  console.log('поiхали');
});