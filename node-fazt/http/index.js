//importo express

//como crear servidores mas facil
const express = require('express');
const colors = require('colors');

const server = express();

//Creacion de rutas
server.get('/', function(req, res){
    res.send("<h1> Hello World with Express and Nodejs </h1>")    
});

server.listen(3000, function(){
    console.log('server on port 3000'.green);
});
