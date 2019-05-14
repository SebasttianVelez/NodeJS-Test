//fichero de configuración de las rutas del controlador project

'use strict'
//para utilizar rutas necesito express
var express = require('express');

//guardo el project en una variable
var ProjectController = require('../controllers/project');

var router = express.Router();


router.get('/home', ProjectController.home);

router.post('/test', ProjectController.test);

router.post('/save-project', ProjectController.saveProject);

//este modulo de ruta se carga en el app.js
module.exports = router;