'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');
//const passport = require('./config/passport')();


mongoose.connect(config.db, (err, res) => {
    if (err) {
        console.log(`error en la conexion de la base de datos: ${err}`);
    }
    console.log("conexion establecida...")

    app.listen(config.port, () =>{
        console.log("servidor corriendo en http://localhost:8080");
    });
});


