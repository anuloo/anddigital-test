// import the packages we needed
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


//create the app
var app = express();

//MIDDLEWARES=============================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// REGISTER OUR ROUTES -------------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//END MIDDLEWARES==========================================
module.exports = app;