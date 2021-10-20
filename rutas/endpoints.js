//endpoints.js
// Constantes
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Cliente = require('../esquema/cliente')
const Empleado = require('../esquema/empleado')
// Middleware-use
var router = express.Router()
router.use((req, res, next) => {
console.log('--> Middleware en endpoints.js')
next();
})
// RUTAS CLIENTES
router.get('/', (req, res) => {
res.json({ msg: 'Probando API - Ok' })
})
router.route('/cliente')
    .get((req, res) => {
        Cliente.find(function(err,cliente){
            if(err){res.send(err)}
            res.json(cliente)
        })
    })
    .post((req, res) => {
        var cliente = new Cliente();
        cliente.RFC = req.body.RFC;
        cliente.nombre = req.body.nombre;
        cliente.cel = req.body.cel;
        cliente.descripcion_obra = req.body.descripcion_obra;
        cliente.costo_base = req.body.costo_base;
        cliente.save(function (err) {
            if (err) { res.send(err); }
            res.json({ message: "Cliente obra guardada exitosamente" })
        })
    })
    router.route('/cliente/:RFC')
        .delete(function (req, res) {
            var RFC = new Object(req.params.RFC)
            Cliente.deleteOne({ RFC: RFC }, function (err, cliente) {
            if (err) { res.send(err) }
            res.json(cliente)
            })
        })
        .put(function(req,res){
            Cliente.findById(req.params.RFC,function(err,results){
                if(err){ res.send(err); }
                cliente.RFC=req.params.RFC;
                cliente.save(function(err,results){   
                    if (err) { res.send(err); } 
                    res.json({ message: "Actualizado correctamente." }) 
                });
            });
        });
        router.route('/cliente/:descripcion_obra')
        .get(function (req, res) {      
            Cliente.find({ descripcion_obra: descripcion_obra }, function (err, cliente) {
            if (err) { res.send(err); }
            res.json(cliente);
            })
            Empleado.find({ descripcion_obra: descripcion_obra }, function (err, empleado) {
                if (err) { res.send(err); }
                res.json(empleado);
                })
        })
        

//RUTAS EMPLEADOS
router.route('/empleado')
    .get((req, res) => {
        Empleado.find(function(err,empleado){
            if(err){res.send(err)}
            res.json(emplado)
        })
    })
    .post((req, res) => {
        var empleado = new Empleado();
        empleado.RFC = req.body.RFC;
        empleado.nombre = req.body.nombre;
        empleado.cel = req.body.cel;
        empleado.actividad = req.body.actividad;
        empleado.descripcion_obra = req.body.descripcion_obra;
        empleado.pago_estimado = req.body.pago_estimado;
        empleado.save(function (err) {
            if (err) { res.send(err); }
            res.json({ message: "Empleado de obra guardado exitosamente" })
        })
    })
    router.route('/empleado/:RFC')
        .get(function (req, res) {
            var RFC = new Object(req.params.RFC)
            Empleado.find({ RFC: RFC }, function (err, empleado) {
            if (err) { res.send(err); }
            res.json(empleado);
            })
        })
        .delete(function (req, res) {
            var RFC = new Object(req.params.RFC)
            Empleado.deleteOne({ RFC: RFC }, function (err, empleado) {
            if (err) { res.send(err) }
            res.json(empleado)
            })
        })
        .put(function(req,res){
            Empleado.findById(req.params.RFC,function(err,results){
                if(err){ res.send(err); }
                empleado.RFC=req.params.RFC;
                empleado.save(function(err,results){   
                    if (err) { res.send(err); } 
                    res.json({ message: "Actualizado correctamente." }) 
                });
            });
        });
// Exportar modulo
module.exports = router
