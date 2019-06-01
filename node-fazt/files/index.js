const fs = require('fs');


//Crear un nuevo archivo

fs.writeFile('./texto.txt', 'linea 1', function(err){ // siempre hay un posible error
    if(err){
        console.log(err);
    }
    console.log("Archivo Creado");
}); 

console.log("Ultima linea de codigo"); //esta tarea demuestra como funciona js de forma asincrona