'use strict'

//Controlador para los proyectos

//importo el project para hacer instancias en el
//var Project = require('../models/project');
var controller = {
    //metodos del controlador
    home: function(req, res){
        return res.status(200).send({
            message: "Soy la home"
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message:"soy el metodo o accion test del controlador project"
        });
    },


    //1- Crear un metodo para guardar proyectos en la base de datos
    //como importe models/project.js puedo usar los parametros que tenga
    saveProject: function(req, res){
        var project = new Project();
        return res.status(200).send({
            message: "Metodo saveProject"
        });


    }
};
//exporto el controlador para poderlo usar en app.js
module.exports = controller;