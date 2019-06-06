//Importar el modulo http 

const http = require('http');

const colors = require('colors')

//Este modulo me permite crear un servidor web

//mi servidor recibe dos parametros el request por el navegador y la respuesta al cliente

const handleServer = function(req, res){

    res.writeHead(200,  { 'Content-type': 'text/html' }); //tipo de respuesta es 200
    res.write('<h1>Hola mundo desde NODEJS</h1>');
    res.end(); //terminar la respuesta para seguir recibiendo peticiones
} 

const server = http.createServer(handleServer); 

server.listen(3000, function() {  //el listen determina el puerto donde se va a ejecutar el server
    console.log("Server on port 3000".yellow);
});
