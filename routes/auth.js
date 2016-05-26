var express = require('express');
var passport = require('passport');
var router = express.Router();

router.route('/google')
    .get(passport.authenticate('google', 
        { scope: ['profile', 'email'] 
    }));

router.route('/google/callback')
    .get(passport.authenticate('google', {
        successRedirect: '/users/',
        failure: '/error'
    }));
    
module.exports = router;