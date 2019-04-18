'use strict'


//cargar mongoose
var mongoose = require('mongoose');

//indicar que mongoose es una promesa

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio') //conectar a la base de datos
        .then(() => { //si logra conectarse
            console.log("Conexión a la base de datos establecida con éxito");
        })
        .catch(err => console.log(err));