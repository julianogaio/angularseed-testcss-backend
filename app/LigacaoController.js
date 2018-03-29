'use strict';
var express     = require('express');
var app         = express();
var jwt         = require('jsonwebtoken');
var config      = require('./config');
var mysql       = require('mysql');

var connection = mysql.createConnection(config.mysql);

function getLigacoes(client_id, token){

}

module.exports = {
    getLigacoes: getLigacoes,
};