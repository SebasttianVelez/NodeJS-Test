//modules
const express = require('express');

const app = express();

const path = require ('path'); //modulo para facilitar las barras


//settings
app.set('port', 4000); // guardar la variable de puerto en app

app.set('view engine', 'ejs')


app.engine('html', require('ejs').renderFile); //configurar html como ejs

app.set('views', path.join(__dirname, 'views')); //guardar la ruta de views esta en esa dirección


//middlewares

//routes

app.use(require('./routes/index')); //todas las rutas estan en un archivo por separado

//static files

app.use(express.static(path.join(__dirname, 'public')));

//listened the server
app.listen(app.get('port'), function(){

    console.log("Server activated in port", app.get('port'));
});