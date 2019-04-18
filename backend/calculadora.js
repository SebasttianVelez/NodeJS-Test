'use strict'

//capturar parametros en consola
var params = process.argv.slice(2); //el numero indica desde que parametro empieza a leer

var numero1 = parseFloat(params[0]); //convertir ese numero a un flotante para hacer operaciones
var numero2 = parseFloat(params[1]); //convertir ese numero a un flotante para hacer operaciones

console.log(numero1);
console.log(numero2);

var plantilla = `
La suma es: ${numero1 + numero2}
La resta es: ${numero1 - numero2}
la multiplicación es: ${numero1 * numero2}
la división: ${numero1 / numero2}
`;


console.log(plantilla);
console.log("Hola mundo con NODEJS")