import express = require('express');
import mongoose from 'mongoose';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import { default as homeRouter } from  './routes/homeRouter';
import { default as imagesRouter } from './routes/imagesRouter';
import { default as authRouter } from './routes/authRouter';

const app = express();
const PORT = process.env.PORT || 5000;


mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true })
  .then(() => {console.log('db is started')})
  .catch(error => {console.log(error)});

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.json());

app.use('/images', imagesRouter);
app.use('/auth', authRouter);
app.use('*', homeRouter)

app.listen(PORT, () => {
  console.log(PORT);
});