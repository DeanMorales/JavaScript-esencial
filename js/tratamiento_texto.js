/*********************************************************
 * 
 * metodos de busqueda 
 */
"use strict"
var mensaje = "estoy aprendiendo JavaScript y estoy aprendiendop mucho!";

var resultado;
//indexOf para detectar 
var resultado= mensaje.indexOf("aprendiendo");
//lastIndexOf para encontrar la ultima incidencia 
var resultado2=mensaje.lastIndexOf("aprendiendo");
//search encuentra igual con la primre coincidencia
var resultado3= mensaje.search("Java");
//serach | con una expresion regular, osea que sea keysensitive
var resultado4= mensaje.search(/ja/i);

//log para imprimir en consola
console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
/*******************************************************
 * 
 * metodo de vusqueda de caracteres en cadenas de texto
 * 
 * match
 * substr
 * substring
 * charAt
 */
//operador g para generar el arreglo con las dos coincidencias
var resultMatch = mensaje.match(/aprendiendo/g);
//inclusive se puede poner el operador  i osea /gi
//operador substr
var resultSubstr= mensaje.substr(6,11);
//los dos parametros si cuentan desde el inicio de la cadena de texto
var resultstring= mensaje.substring(6,17);
//para ver que char se encuentra en tal lugar en la cadena de texto
var resultChar= mensaje.charAt(10);

//log para mostrar en consola las insidencias
console.log(resultMatch);
//te retorna el texto obtenido pero  NO posicion
console.log(resultSubstr);
//imprime
console.log(resultstring);
//împresion en consola del char en posicion 10
console.log(resultChar);

/***************************************************************
 * nuevos metodos de busqueda 
 * startsWith
 * endsWith
 * includes
 * 
 * estos son metodos que facilitan la busqueda de informacion dentro de cadenas de text
 *  todos estos metodos son sencibles a mayusculas y minusculas 
 */

var mensaje ="Estoy aprendiendo JavaScript"+" ";
var resultado;

//startsWith verifica que se empiece con la siguiente cadena de texto
var resultado = mensaje.startsWith("Es"); // nos arroga True
//tambien podemos comprobrar metiendo nuestra cadena de texto dentrod del mismo 
var textoEn = mensaje.indexOf("JavaScript");
//definimos que empecemos a buscar en la posicion donde coincide JavaScrip
var reslutado = mensaje.startsWith("Ja", textoEn);

//tambien existe su version que busca si termina en cierta cadena de texto nuestro string
//ademas include pregunta si el mensaje incluye la palara que queramos
    resultado2= mensaje.includes("diendo");
//ademas arrogla boolean
//arrogla true pues la cadena si empieza con "Es"
console.log(resultado);
console.log(resultado2);

/******************************************************
 * metodos para generar texto, reemplazar y separacion
 * 
 * funcion repeat
 * funcion replace
 * funccion slice
 * funcion split
 * funcion trim
 * 
 * podemos hacer que un texto se repita las veces que queramos
*/
//repeat
var resultado= mensaje.repeat(40);
//repeat
console.log(resultado);
//replace solo remplaza de manera visual en nuestra variable, no modifica la cadena original
var resultado=mensaje.replace("JavaScript", "a programar");
//nos arroja los mensajes, pero no afecta el valor dentro de mensaje, solo es visual o temporar
console.log(resultado);
//slice nos sirve para mover nuestro punter , y tambien indicar hasta donde podemos leer, mas no busca completamente en la cadena
resultado= mensaje.slice(6);

//spit nos sirve para separar por caracteres y seleccionar cada palabra
//por ejemplo si tenemos un mensaje con purao guiones o con espacios
resultado= mensaje.split(" ");
console.log(resultado);//nos muestra un arreglo de cada segmento separado por un espacio
/*metodo trim nos regresa nuestra cadena sin espacios vacios
    por ejemplo en contraseñas o formularios debemos quitar los espacios al final o al inicio de ellos
*/
resultado= mensaje.trim();
console.log(resultado);

/*********************************************************
 * metodos de transformacion de texto en javaScript
 * 
 * para poder transformar los tipos de variable a texto utilizamos
 *  .toString(); como metodo para hacer esto
 */
var mensaje2= " Y Programacion!";
var total= 123456; 
var resultado;
resultado= total.toString();
console.log(resultado);
//se puede pasar todo a minusculas con el metodo 
// toLowerCase();
var minusculas= (mensaje+mensaje2).toLowerCase();
console.log(minusculas);
//para pasar a mayusculas
var mayusculas = minusculas.toUpperCase();
console.log(mayusculas);
//concatenacion concat puede recibir n cantidad de parametros
var concatenar= mensaje.concat(mensaje2, "y tengo muchas ideas");
console.log(concatenar);

/************************************************************
 * como funcionan en javaScript las plantillas y los literales
 * 
 * al concatenar muchas variables dentro, puede ser laborioso 
 * para esto se usa ${ variable} desde dentro de las comillas "  "
 * 
 * asi  " este es un texto con una  ${ variable}";
 * 
 */

var lenguaje= "JavaScript";
var lenguaje2 = "HTML";
var mensaje= 'me gusta programar con $lenguaje y su integracion con $lenguaje2';
console.log(mensaje);

