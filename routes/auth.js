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
    

    
router.route('/twitter')
    .get(passport.authenticate('twitter'));

router.route('/twitter/callback')
    .get(passport.authenticate('twitter', {
        successRedirect: '/users',
        failure: '/error'
    }));
        
        
router.route('/facebook')
    .get(passport.authenticate('facebook', 
        { scope: ['profile', 'email'] 
    }));

router.route('/facebook/callback')
    .get(passport.authenticate('facebook', {
        successRedirect: '/users',
        failure: '/error'
    }));
            
module.exports = router;