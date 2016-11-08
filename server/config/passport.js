// const passport = require('passport');
// const mongoose = require('mongoose');

// module.exports = function(){
//     var User = mongoose.module('User');

//     passport.serializerUser((user, done) => {
//         done(null, user.id);
//     });

//     passport.deserializerUser((id, done) => {
//         User.findOne({_id: id}, '-password -salt', (err, user) => {
//             done(err, user);
//         });
//     });

//     require('./strategies/local')();
// }