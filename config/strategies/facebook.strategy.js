var passport = require('passport');

var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function () {
    passport.use(new FacebookStrategy({
        clientID: '1620835484903528',
        clientSecret: '4e8eaf32286ddb29526c3ffa5a4d4c14',
        callbackUrl: 'http://localhost:3000/auth/facebook/callback',
        passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done) {
        var user = {};
        
        user.email = profile.emails[0].value;
        user.image = '';//profile._json.image.url;
        user.displayName = profile.displayName;
        user.facebook = {};
        user.facebook.id = profile.id;
        user.facebook.token = accessToken;
        done(null, user);
    }));    
};