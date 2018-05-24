global.__basedir = __dirname;

require('dotenv').config();
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var index = require('./routes/index');
var api = require('./routes/api');

app.use('/', index);
app.use('/api', api);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {"status": err.status, "stack": err.stack}
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('App is running on http://localhost:' + port);
});