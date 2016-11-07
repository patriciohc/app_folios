'use strict'

const Folio = require('../models/folio')


function getFolio(req, res){
    let id = req.params.id;
    Folio.findById(id, function(err, folio){
        if (err) return res.status(500).send({message: `Error al realizar la peticion ${err}`});
        if (!folio) return res.status(404).send({message: "Recurso no encontrado."});

        return res.status(200).send({ folio })
    });
}

function getFolios(req, res){
    Folio.find({}, function(err, folio){
        if (err) return res.status(500).send({message: `Error al realizar la peticion ${err}`});
        if (!folio) return res.status(404).send({message: "No existen folios."});

        return res.status(200).send({ folio })
    });
}

function updateFolio(req, res){


}

function saveFolio(req, res){
    let folio = new Folio()
    folio.numero = req.body.numero;
    folio.fecha = req.body.fecha;
    folio.hora = req.body.hora;
    folio.save(function(err, folioStored){
        if (err) return res.status(500).send({message:"error al guardar" });

        return res.status(200).send({folio: folioStored});
    });
}

function deleteFolio(req, res){
    let id = req.params.id;
    Folio.findById(id, function(err, folio){
        if (err) return res.status(500).send({message: `Error al realizar la peticion ${err}`});
        if (!folio) return res.status(404).send({message: "Recurso no encontrado."});

        folio.remove(err, (err) => {
            if (err) return res.status(500).send({message: `Error al realizar la peticion ${err}`});
            return res.status(200).send({ message: "el folio se ha borrado correctamente" });
        });
    });
}

module.exports = {
    getFolio,
    getFolios,
    updateFolio,
    saveFolio,
    deleteFolio
}