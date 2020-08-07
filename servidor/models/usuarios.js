'use strict '

var  mongoose = require('mongoose');

var Schema=mongoose.Schema;

var usuariosSchema=Schema({
    name:String,
    email:String,
   state:String,
    city:String,



});
module.exports=mongoose.model('usuarios',usuariosSchema);
//usuarios --> guardar los documentos en la coleccion