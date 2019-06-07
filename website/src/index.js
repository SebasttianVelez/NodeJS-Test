//modules
const express = require('express');

const app = express();

const path = require ('path'); //modulo para facilitar las barras

//settings
app.set('port', 4000); // guardar la variable de puerto en app

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'));

app.engine('html', )

//middlewares


//routes
app.get('/', function(req, res){
    res.render('index');
    //res.sendFile(path.join(__dirname, 'views/index.html')); //Unir los dos enlaces 
    //console.log(__dirname); //Dirname retorna la direccion donde estamos
});

//static files

//listened the server
app.listen(app.get('port'), function(){

    console.log("Server activated in port", app.get('port'));
});