var passport = require('passport');

var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function () {
    passport.use(new TwitterStrategy({
        consumerKey: 'u39dwZSUsDDeLmW2g5qXLdIBn',
        consumerSecret:'LUdlzF9NPXF7YIMLrXj5IMRHkTbcLoqGxMk5guOCF7tLedNXbO',
        callbackUrl: 'http://localhost:3000/auth/twitter/callback',
        passReqToCallback: true
    },
    function(token, tokenSecret, profile, done){
        var user = {};
        
        // user.email = '';//profile.emails[0].value;
        // user.image = profile._json.image.url;
        // user.displayName = profile.displayName;
        // user.twitter = {};
        // user.twitter.id = profile.id;
        // user.twitter.token = accessToken;
        
        done(null, profile);
    }));
};