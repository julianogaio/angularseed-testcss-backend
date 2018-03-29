'use strict';
var express     = require('express');
var app         = express();
var jwt         = require('jsonwebtoken');
var config      = require('./config');
var mongodb     = require('mongodb');


const checkCredential = function(user) {
    // Get the documents collection
    const collection = db.collection('users');
    // Find some documents
    collection.find({user:{$eq:user.username}, 
        password:{$eq:user.password}}).toArray(function(err, docs) {
        
        assert.equal(err, null);
        console.log("Found records");

        if(docs.length == 1){
            //create token
            //user logado
            var userToken = jwt.sign({ user: results[0] }, config.jwt.key);

            res.status(200).json({
                success: true,
                response: 'usuário autenticado com sucesso.',
                token: userToken
            });

        }else{
            console.log('- login recusado');
            res.status(200).json({
                success: false,
                response: 'Erro no login :('
            });
        }
        
    });
}

function signin(req, res){
    var user = {
        username: req.body.username,
        password: req.body.password
    }

    checkCredential(user);    
}


module.exports = {
    signin: signin
};

