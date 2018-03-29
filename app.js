'use strict';

var express     = require('express'),
    app         = express(),
    http        = require('http').Server(app),    
    port        = process.env.PORT || 5001,
    cors        = require('cors'),
    jwt         = require('jsonwebtoken'),
    mysql       = require('mysql');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var config              = require('./app/config');
var AuthController      = require('./app/AuthController');
var LigacaoController   = require('./app/LigacaoController');

var corsOptions = {
    //origin: 'http://localhost:8080',
    origin: '*',
}

app.post('/auth/signin', AuthController.signin);


http.listen(port, function () {
    console.log('Servidor rodando na porta:' + port);
});