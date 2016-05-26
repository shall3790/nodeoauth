var passport = require('passport');

var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function () {
    passport.use(new FacebookStrategy({
        clientID: '',
        clientSecret: '',
        callbackUrl: '',
        passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done) {
        var user = {};
        
        user.email = profile.emails[0].value;
        user.image = '';//profile._json.image.url;
        user.displayName = profile.displayName;
        user.google = {};
        user.google.id = profile.id;
        user.google.token = accessToken;
        done(null, user);
    }));    
};