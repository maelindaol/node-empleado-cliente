//empleado.js
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var empleadoSchema = new Schema({
    "RFC":{type:String},
    "nombre":{type:String},
    "cel":{type:String},
    "actividad":{type:String},
    "descripcion_obra":{type:String},
    "pago_estimado":{type:String}
},{collection:'empleados'});
module.exports=mongoose.model('Empleado',empleadoSchema)