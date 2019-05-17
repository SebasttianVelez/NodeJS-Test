//fichero de configuración de las rutas del controlador project

'use strict'
//para utilizar rutas necesito express
var express = require('express');

//guardo el project en una variable
var ProjectController = require('../controllers/project');

var router = express.Router();

//La ruta home hace peticiones por get
router.get('/home', ProjectController.home);

//La ruta test hace peticiones por post
router.post('/test', ProjectController.test);

//La ruta save-project hace peticiones por post
router.post('/save-project', ProjectController.saveProject);

//este modulo de ruta se carga en el app.js
module.exports = router;