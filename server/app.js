'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routers');
const passport = require('passport');

const app = express();
// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(passport.initialize());
app.use(passport.session());

app.use('/', api)

module.exports = app