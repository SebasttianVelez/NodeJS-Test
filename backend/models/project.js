'use strict'

var mogoose = require('mongoose');

var Schema = mongoose.Schema;

//sobre este molde creo diferentes objetos
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: [String]
});


// para poder importarlo fuera de este fichero COMO MODELO
module.exports = mongoose.model('Project', ProjectSchema); 
//tiene dos parametros, el primero es el nombre de mi entidad (que se guarda)
//en la base de datos y de segundo el esquema.
//lo que hace mongoose es automaticamente poner el primer parametro en minuscula y pluralizar

//projects --> Guarda los documentos en esta coleccion