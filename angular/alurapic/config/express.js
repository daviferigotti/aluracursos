
var db = require('./database');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('../app/routes')(app);
var port = 3000;

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function(err){
  if(err){
    console.log("Erro: " + err);
  }
  console.log("Servidor rodando na porta " + port);
});

module.exports = app;
