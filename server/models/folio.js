'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FolioSchema = Schema({
    numero: String,
    fecha: String,
    hora: String,

});

module.exports = mongoose.model('Folio', FolioSchema);