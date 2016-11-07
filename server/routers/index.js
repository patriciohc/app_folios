'use strict'

const express = require('express');
const api = express.Router()
const folioCtrl = require('../controllers/folio');

api.get('/folio/:id', folioCtrl.getFolio);
api.get('/folio/', folioCtrl.getFolios);
api.post('/folio',folioCtrl.saveFolio);
api.put('/folio', folioCtrl.updateFolio);
api.delete('/folio/:id', folioCtrl.deleteFolio );

module.exports = api