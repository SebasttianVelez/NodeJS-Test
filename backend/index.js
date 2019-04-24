'use strict'


//cargar mongoose
var mongoose = require('mongoose');
//crear una variable app para cargar modulos app.js
var app = require('./app');

//indicar el puerto que va a tener el API
var port = 3700;



//indicar que mongoose es una promesa

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio') //conectar a la base de datos
        .then(() => { //si logra conectarse
            console.log("Conexión a la base de datos establecida con éxito");
            //crear servidor:
            app.listen(port, () => {
                console.log("El servidor esta corriendo en localhost:3700");
            });
        })
        .catch(err => console.log(err));