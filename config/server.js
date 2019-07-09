/* Importar módulos */
var express = require('express'),
    bodyParser = require ('body-parser'),
    consign = require('consign');
   

var app = express();

/* Configurar body-parser */
app.use(bodyParser.urlencoded({ extended : true }));  
app.use(bodyParser.json());

/* configure consign */
consign()
    .include('config/dbConnection.js')
    .then('app/controllers')
    .then('app/models')
    .then('app/routes')
    .into(app);

module.exports = app;