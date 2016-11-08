
var mongoose = require('mongoose');  
var User = require('../models/user');  
var service = require('../service');

function userSignup(req, res) {  
    var user = new User({
        name: req.body.name,
        firsName: req.body.firsName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
    });

    user.save(function(err, user){
        if (err) return res.status(500).send({message: "error al crear usuario"});

        return res.status(200).send({token: service.createToken(user), user: user});
    });
};

function userLogin(req, res) {  
    User.findOne({userName: req.body.nameUser}, function(err, user) {
        if (err) 
            return res.status(500).send({message: "ha ocurrido un error al autenticarce"});
        if (!user) 
            return res.status(404).send({message: "No existe el nombre de usuario"});
        if (!user.authenticate(req.body.password))
            return res.status(401).send({message: "Constraseña incorrecta"});

        return res
            .status(200)
            .send({token: service.createToken(user)});
    });
};

module.exports = {
    userSignup,
    userLogin
}