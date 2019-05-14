'use strict'

//Controlador para los proyectos

//importo el project para hacer instancias en el
var Project = require('../models/project');
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
        var project = new Project(); //project es el modelo que creamos anteriormente
        
        //Recoje todos el cuerpo del requerimiento y los guarda en params
        var params = req.body;
        
        //parametros que voy a guardar en la base de datos por el metodo post
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        //Guardar el objeto en la base de datos:
        
        project.save((err, projectStored) => {
            if(err){ //Si se presenta un error durante el guardado
                return res.status(500).send({
                    message: 'Error al guardar'
                })
            }
            if(!projectStored){ //Si el projecto no puede ser almaenado
                return res.status(404).send({
                    message: 'ERROR 404'
                });
            }
            return res.status(200).send({
                project: projectStored
            });
        });


    }
};
//exporto el controlador para poderlo usar en app.js
module.exports = controller;