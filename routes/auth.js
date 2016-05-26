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

// router.route('/google/callback')
//     .get(passport.authenticate('google', {
//         successRedirect: '/users/',
//         failure: '/error'
//     }));
// //https://console.developers.google.com/apis/api/plus/overview?project=nodeoauth-1322
// //https://console.developers.google.com/apis/api/contacts/overview?project=nodeoauth-1322
// router.route('/google')
//     .get(passport.authenticate('google', {
//         scope: ['profile', 'email']
//         // scope: ['https://ww.googleapis.com/auth/userinfo.profile',
//         //         'https://www.googleapis.com/auth/userinfo.email']
//     }));
    

module.exports = router;