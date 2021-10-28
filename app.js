const express = require('express');
const path=require('path');

const productRouter = require('./routes/productRoute');
const categoryRouter = require('./routes/categoryRoute');
const viewRouter=require('./routes/viewRoute');
const exp = require('constants');

const app = express();

// using JSON for requests and response.
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));


app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.use('/api/v1/products', productRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/views', viewRouter);

module.exports = app;
