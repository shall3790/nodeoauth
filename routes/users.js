var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = req.session.passport.user;
  //res.send('respond with a resource');
  res.render('users', {user: {name: user.displayName,
                              image: user._json.image.url}});
});

module.exports = router;
