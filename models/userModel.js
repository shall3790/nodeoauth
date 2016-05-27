var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    displayName: {
        type: String
    },
    image: {
        type: String
    },
    email: {
        type: String
    },   
    facebook: {
        type: Object
    },
    twitter: {
        type: Object
    },      
    google: {
        type: Object
    },
});

module.exports = mongoose.model('User', userSchema);