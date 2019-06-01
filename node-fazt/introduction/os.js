//Os es un modulo de NodeJS que permite ver las propiedades de nuestro sistema operativo
const os = require('os'); 

//Los metodos del componente estan en la documentacion de Nodejs
console.log(os.userInfo());
console.log(os.freemem()); //memoria libre
