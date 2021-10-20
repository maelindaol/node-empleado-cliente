//cliente.js
var mongoose = require('mongoose')

var Schema = mongoose.Schema
var clienteSchema = new Schema({
    "RFC":{type:String},
    "nombre":{type:String},
    "cel":{type:String},
    "descripcion_obra":{type:String},
    "costo_base":{type:String}
},{collection:'cliente'});
module.exports=mongoose.model('Cliente',clienteSchema)
