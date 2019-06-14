# Introduccion a NodeJS Utilizando MongoDB


******************************************************************
## Guía de Instalación de NodeJS y entorno de MongoDB

********************************************************************

INSTALACIÓN

despues de instalar mongodb y robomongo
1- Instalar node
2- npm init
3- npm install express --save //save guarda dependepcia en mi proyecto actual
4- npm install body-parser --save //el bodyparser sirve para convertir las peticiones que hago al backend a un objeto json usable por js
5- npm  install connect-multiparty --save //el multiparty permite subir archivos a mi backend y recoge ficheros y guarda todo en el servidor IMPORTANTE (hay mas)
6- npm install mongoose --save //mongoose es una libreria para trabajar con mongodb
7- npm install nodemon --save-dev //es fundamental, cada vez que ejecute un servidor de nodejs se refresque el codigo 

8- al crear el index.js añadir un script en el package.json : "start": "nodemon index.js"


***********************************************************************************************

CREAR BASE DE DATOS con robo3t

//abrimos las consolas de mongo en archivos de programa
1- crear base de datos con las colecciones
2- conectar nodejs con mongo en el index.js

*********************************************************************************

CREAR servidor

1- crear el app.js con las instrucciones y luego conectar con el index
2- ir al index y crear el host a donde estara el servidor LOCAL
3- npm start y si prueba esta instalado

**************************************************************************************

CREAR RUTAS

1- ir a app.js
2- Realizar un app.get con una función de callback de req y res

**************************************************************************************

Metodos Backend

1- GET --> Consultar a detalle algo
2- POST --> Guardar NUEVOS recursos en un API O Backend 
3- PUT --> Actualizar recursos
4- DELETTE --> Borrar recursos


**************************************************************************************

Modelos

1- En mis colecciones tengo un project de la base de datos (se puede ver en robo3t)
2- creo una carpeta de Models 
3- En la carpeta creo archivos .js respecto a las conexiones, en este caso project.js
4- import mongoose y creo un esquema como se muestra en el archivo
5- la coleccion tiene unos atributos en el objeto, estos hay que cargarlos en una variable llamando Schema


**************************************************************************************

//Apuntes Interesantes sobre ingeniería de software

Definicion MVC

Es un patron de diseño de software que se encarga de separar la lógica de negocio de la interfaz
de usuario (es la interfaz mas utilizada de internet)

Facilita la mantenibilidad del codigo, la escalabilidad de la web y lo hace muy sencillo todo.

El modelo que creamos es la logica de negocio o la parte que se conecta directamente a la 
base de datos. 

- EXISTEN DOS TIPOS DE Modelos

1- Un modelo como una entidad o una referencia a una base de datos (Se utiliza para guardar info, consultar etc)
2- Un modelo de consulta que son simplemente clases que acceden directamente a una base de datos, o una logica de negocio

LA VISTA es la encargada de mostrar la información al usuario COMO ES UN API REST  Será simplemente los
json que devolveremos en la aplicacion al usuario


el CONTROLADOR es el intermediario entre la vista y el modelo, se encarga de controlar todas las interacciones
del usuario y todas las peticiones que se hagan desde HTTP en este caso, ademas pide datos al modelo, devuelve informacion
o hace procesos logicos.

Consultar referencias sobre MVC

**************************************************************************************
