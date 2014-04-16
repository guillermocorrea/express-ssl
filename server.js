/**
 * Created by guillermo on 16/04/2014.
 */
var express = require('express')
    ,http = require('http')
    ,https = require('https')
    , fs = require('fs');

// MAGIC HAPPENS HERE!
var opts = {
    // Specify the key file for the server
    key: fs.readFileSync('./cert/key.pem'),
    // Specify the certificate file
    cert: fs.readFileSync('./cert/cert.pem')
};

var app = express();

// Configuration

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler(
        { dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes
app.get('/', function(req, res) {
    res.send('Ok');
});

var port = 8443;
/*var server = https.createServer(opts, app).listen(port, function(){
    console.log("Express server listening on port " + port);
});*/

http.createServer(app).listen(3000);
// Create an HTTPS service identical to the HTTP service.
 https.createServer(opts, app).listen(1343);