import express from 'express';
import * as path from 'path';

import { default as homeRouter } from  './routes/homeRouter';
import { default as searchRouter } from './routes/searchRouter';
import { default as imagesRouter } from './routes/imagesRouter';

const app = express();

// настраиваем view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname));
app.use('/', homeRouter);
app.use('/search', searchRouter);
app.use('/images', imagesRouter);

app.listen((process.env.PORT || 3000), () => {
  console.log('поiхали');
});