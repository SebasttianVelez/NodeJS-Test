'use strict'

/*
cargar modulos de expres y bodyParser para recibir peticiones http
y todo lo que recibamos en el api convertirlo a json (usable con javascript)
*/

var express = require('express');
var bodyParser = require('body-parser');

//llamar a express

//express es nuestro controlador http
var app = express();

//cargar archivos de rutas
var project_routes = require('./routes/project');

//bodyparser
/* Un middleware es una instruccion que se ejecuta antes de cualquier
petición http, es decir cuando hacemos una petición al API primero que todo
se ejecuta el middleware y despues el resto de cosas */

//definir un middleware de boddyparser

/* Lo que hace esta funcion es convertir los datos que nos lleguen por post o put en json */
app.use(bodyParser.urlencoded({extended:false}));

//convertir a json
app.use(bodyParser.json());

//Configurar CORS O cabeceras

//rutas

app.use('/', project_routes);

/* La ruta pruebas-api tiene una funcion de callback
recibe req-> request (lo que llega) y response (lo que devuelve)*/

/*
app.get('/', (req, res)=>{
    //el codigo 200 indica que esta bien
    //El send envia un mensaje en json
    res.status(200).send(
        
        "<h1>pagina de inicio</h1>"
        );
    })
    
    app.get('/-test', (req, res)=>{
        res.status(200).send(
            {
                menssage: 'Esta ruta es de prueba en mi API Restful con mongo y node'
            }
            );
        });
        
        
        app.post('/test', (req, res)=>{
            console.log(req.body.nombre); //recoger el nombre
            res.status(200).send(
                {
                    menssage: 'Esta ruta es de prueba en mi API Restful con mongo y node'
                }
                );
            });
            
            //hacer exportable el modulo app para ser cargado en el index.js
*/ 
module.exports = app;