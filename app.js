const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const indexRouter = require('./routes/index');
const compilerRouter = require('./routes/compiler');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.post('/compile', compilerRouter.compile);
app.get('/lexem', compilerRouter.lexem);


module.exports = app;
