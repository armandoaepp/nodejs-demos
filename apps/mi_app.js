var express = require('./node_modules/express/lib/express');
// var express =  require('express') ;

var path = require('path') ;
var app = express() ;

app.use(express.static(path.join(__dirname,'public'))) ;

/*var router = express.Router();

// a middleware with no mount path, gets executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});*/

app.listen(8000);