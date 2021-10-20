//server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const rutas = require('./rutas/endpoints');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/obrasdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log('Conectado correctamente a MongoDB'))
    .catch(()=> console.log('Error al conectarse a MongoDB'));
app.use('/api', rutas);
app.listen(port,()=>{console.log('Escucha en puerto:'+port)})
//http://localhost:3000/api/cliente