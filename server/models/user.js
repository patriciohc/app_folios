'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto');

const UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: true }.
    firsName: String,
    lastName: String,
    userName: String,
    //displayName: String,
    //avatar: String,
    password: {type: String, select: false},
    //signupDate: {type: Date, dafalut: Date.now() },
    //lastLogin: Date,
    provider: { type: String, required: 'Provider es obligatorio'},
    providerId: String,
    providerData: {} 

    salt: { type: String, },
});

UserSchema.pre('save' (next) => {
    // let user = this
    // if (!user.isModified('password')) return next()

    //     bcrypt.genSalt(10, (err, salt) => {
    //         if (err) return next()

    //         bcrypt.hash(user.password, salt, null, (err, hash) =>{
    //             if (err) return next(err);

    //             user.password = hash;
    //             next();
    //         })
    //     });
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPasword(this.password);
    }
    next();
});

UserSchema.methods.hashPasword = function(password){
    return crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('base64');
}

UserSchema.methods.authenticate = function(password){
    return this.password === this.hashPasword(password);
}

module.exports = mongoose.model('User', UserSchema);