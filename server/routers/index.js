'use strict'

const express = require('express');
const api = express.Router()
const folioCtrl = require('../controllers/folio');
const userCtrl = require('../controllers/user');

// folios
api.get('/folio/:id', folioCtrl.getFolio);
api.get('/folio/', folioCtrl.getFolios);
api.post('/folio',folioCtrl.saveFolio);
api.put('/folio', folioCtrl.updateFolio);
api.delete('/folio/:id', folioCtrl.deleteFolio );

// usuarios
api.post('/user/authenticate', userCtrl.userLogin);
api.post('/user/create', userCtrl.userSignup);
//api.post('/user/logout',userCtrl.saveFolio);

module.exports = api