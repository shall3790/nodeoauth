var express = require('express');
var router = express.Router();

// router.use('/', function(req, res, next) {
//   //var user = req..user; 

//   if(!req.user) {
//     res.redirect('/');
//   }
//   next();
// });

/* GET users listing. */
router.get('/', ensureAuth, function(req, res, next) {
  var user = req.user;
  //res.send('respond with a resource');
  res.render('users', {user: {name: user.displayName,
                              image: user.image}});
});

function ensureAuth(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

module.exports = router;
