var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../../models/userModel');

var GOOGLE_CLIENT_ID = '525982938373-j974kitld043re3hs9ug5tuitpkiso9f.apps.googleusercontent.com';
var GOOGLE_CLIENT_SECRET = 'LusXOdpuZuS48C_Gj8Bqywa_';

module.exports = function() {
    passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done) {
        
        console.log('googleId: '+ profile.id);
        console.log('accessToken: '+ accessToken);
        var user = {};
        User.findOne({ 'google.id': profile.id }, 
            function (err, user) {
                if(user) {
                    console.log('user found');
                    done(null, user);
                }
                else {
                    console.log('user not found');
                    var user = new User;
                    
                    user.email = profile.emails[0].value;
                    user.image = profile._json.image.url;
                    user.displayName = profile.displayName;
                    user.google = {};
                    user.google.id = profile.id;
                    user.google.token = accessToken;
                    
                    user.save();
                    
                    done(null, user);
                }
                //else
            }
        );
    }));
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    
};