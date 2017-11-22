var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan'); // ¿?¿?¿?¿?¿?¿?¿?¿?¿
var mongoose = require('mongoose');
var User = require('./app/models/user');
var bodyParser = require('body-parser'); // ¿?¿?¿?¿?¿?¿?¿?¿?¿

app.use(bodyParser.json()); //para parsear aplication/json
app.use(bodyParser.urlencoded({extended:true})); //para parsear aplication/x-www-form-urlencoded
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/FullAppMEAN', function(err){
  if(err){
    console.log('** No se pudo establecer la conexion: ' + err + ' **');
  }else{
    console.log('** Se pudo establecer conexion con MongoDB **');
  }
}); //FullAppMEAN nombre de la bd
//http://localhost:8080/users
//app.post('/users', function(req, res){
//  res.send('probando ruta de ususarios');
//});

app.post('/users', function(req, res){
  var user = new User();
  user.username = 'Admin';
  user.password = '1234';
  user.email = 'learnMeanStack@gmail.com';
  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email;
  user.save();
  res.send('Usuario creado!');
});

app.listen(port ,function(){
  console.log('** Corriendo servicio en puerto: ' + port + ' **' );
});
