const fs = require('fs');


//Crear un nuevo archivo
function writeText(text){
    fs.writeFile('./texto.txt', text, function(err){ // siempre hay un posible error
        if(err){
            console.log(err);
        }
        console.log("Archivo Creado");
    }); 
}

function readText(){
    fs.readFile('./texto.txt', function(err, data){
        if(err){
            console.log(err);
        }
        console.log(data.toString());
    });
}

readText()
console.log("Ultima linea de codigo"); //esta tarea demuestra como funciona js de forma asincrona