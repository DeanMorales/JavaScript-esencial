"use strict"
/* comentamos los alerts para que no nos molesten en un futuro
 */
//alert("Hola desde un archivo externo!");
console.log('Hola desde consola');
//var es para variables globales
var x;
x= "3.1416";
var publicData= "algo";
//trabajando con variables

var nombre="prueba";

console.log(nombre)

function saludo() {
   //la palabra recerbada let es mejor para crear variables dentro de una funcion
    let nombre = "yacafx";
   console.log(nombre);
   let edad= 34;
   console.log(edad);
}

saludo();
console.log(nombre);

//constantes son variables que son incambiables
const pi=3.141592;
//pi= 15;

//*************************************************** */
//trabajando con numeros

var edad= 10; 
var real=2.54;
var negativo= -5;

var cantidad= "100";
var nuevaCantidad= Number(cantidad);
//parseInt
//parseFloat 
// son metodos predefinidos para trabajar con estos 
// **************************************
/*trabjaando con strings*/

var bebida="agua";
var comida='ceviche';
//se pueden intercalar dentro, pero debemos respetar la jerarquia

var instruccion=" el platillo se llama 'ceviche'";

var edad= 34;
var nuevaEdad= String(edad);
/***************************** */
/*
 trabajando con booleanos 
*/

var  activo= false; 
var estado= Boolean(10>9);
// trabajando con fechas 

var fechaActual= new Date();
//getDate();
//getDay();

//trabajando con simbolos
var simbolo= Symbol();
var ambiente = Symbol('dev');

//JSON
/* significa Java Script Object Notation */

var persona = {
        nombre: 'emmanuel', 
        twitter: 'deanmorales'
};
/* lo que se hace aqui es crear una estrutura de datos  */
var poblacion=[
    {nombre: 'hugo', twitter:'hugodc'},
    {nombre: 'Paco', twitter:'Pacodc'},
    {nombre: 'Luis', twitter:'Luisdc'},
    persona 
    
];

//para aprender a utilizar JSON creamos un nuevo objeto 
var poblacionJSON= JSON.stringify(poblacion);

var nuevaPoblacion= JSON.parse(poblacionJSON);

/* uaso de operadores logico, ademas de aritmeticos y comparativos */
var datoA= 10;
var datoB= 20;

//operador Y o AND - &&
var and= (datoA > 10 && datoB >10);
console.log("el resultado de la evaluacion AND es: "+ and);
// operador logico O o OR -||
var or= (datoA >10 || datoB >10);
console.log("el reslutado de la evacion OR es: "+ or);
//operador logico negacion !
var negacion= !(datoA > datoB);
console.log("el resultado de la negacion es: "+ negacion);

/* se hizo la evaluacion de concatenacion con  "" + ""  

 y ademas aprendimo s utilizar las asignaciones con operaciones*/
 datoA += datoB;
 datoA -= datoB;
 datoA *= datoB;
 datoA /= datoB;

 /* operador ternario o de tres partes, 
 es un operador compuesto que puede realizar dos operaciones al mismo tiempo
  por ejemplo tener dos datos 
  podemos hacer una comparacion y despues hacer una asignacion*/
  /* primero tenemos 
    condicion ? TRUE : FALSE 
    
    */
var datoA= 110;
var resultado = datoA >datoB ? "si es mayor" : "No es mayor";
console.log("el resultado con el operadore ternarios es: "+ resultado);

//validador de operador de tipos de datos 
/** es necesario verificar si un dato es de tipo entero, string. boolean o objeto */

/**************************** */

var datoA = 110; // numero
var nombre= "nombre"; // string
var activo = true;
var persona = { edad: 34, deporte: "correr"}// este es un objetivo 

console.log(typeof datoA);
console.log(typeof nombre);
console.log(typeof activo);
console.log(typeof persona);

// el uso de los operadores if de decision, es igual que java y php

// ejemplo de if 
    if (datoA > datoB) {
        // entra aqui si el datoa es menor que el datoB
        resultado="la condicion se cumplio!";
    }
    else{
        resultado=" la condicion no se cumplio! "
    }
    //mostramos resultado
    console.log("el resultado de la evaluacion if es: ", resultado);
//como usa la evaluacion if-else

//una ramificacion de if-else
 var condicion= true;
if(!condicion)
{
    console.log("el balor de la condicion es:",condicion);
}
else if(datoA != datoB)
{
    console.log("la condicion else- if se confirma commo  positiva");

}
else{
    console.log("la condicion por defecto else");
}
/* tambien se pueden hacer condiciones anidaddas esto comunmente */

/** ademas debemos aprender a utilizar la condicion swtich */
// inicializamos la edad en enteros
var edad= 230; 
//switch que verifica la edad que  comprende
switch (edad) {
    case 10:
            resultado="la edad es de 10 años";
        break;
    case 20:
            resultado="la edad es de 20 años";
        break;
    case 25:
            resultado="la edad es 25";

    default:
            resultado="no existe esa edad"
        break;
}
console.log("ek resultado de la evaluacion de texto es: "+resultado);

//el ciclo for es un ciclo definido y sabemos cuantas v eces pasara

var productos = 5;
//iniciamos un ciclo for
for (let i = 0; i < productos; i++) {
    //const element = array[i];
    console.log("producto #"+ i);
    //debugger se ejecuta para saber que pasa en cada ciclo
    //debugger;
    
}

/* se trabaja con ciclos while, de manera que se debe ejecutar con cuidado para no ciclar */
productos=10;
while (productos>0) {
    console.log("aunquedan en almacenamiento:"+productos+" en existencia");
    //debugger para verificar como va el ciclo while
    productos--;
    //debugger;
}

/**debemos aprender a controlar los ciclos, tenemos necesidad de romper los ciclos 
 * 
 * con continue 
 * y con brake
 */
var contador=0;
var cuenta= 0;

//iniuciamos un for para trabajas continue
for (let contador = 0; contador <= 20; contador++) {
   // const element = array[contador];
   if(contador == 5){
       break;
   }
    if (contador % 2 == 0) {
        continue;
    }
    cuenta++;
    //  debugger;
}
console.log("hay"+ cuenta +"numeros impares");
/****************************************
 * modulo de estructuras basicas de funciones
 * estas funciones debemos invocarlas desde cualquier otor docuemto
 * 
 */

function saludar(nombre, edad) {
    var saludo= "Hola mundo";
    //implementar la palabra recebada return
    //return saludo 
   // console.log("hola: ",nombre);
    //console.log("tienes?: ",edad);
    var resultado= nombre +( "tiene " + edad + " años");
    return resultado;
}
saludar("emmanuel", 25);

var mensaje = saludar ("sergio ivan", 27 );
console.log(mensaje);
/** inicializacion de parametros 
 * debemos tener en claro que aqui las funciones puedne recibir n cantidad
 * de parametros 
*/
function contrar(cantidad=20) {

    console.log("el valor de la cantidades :", cantidad);
}

/**parametros de tipo REST */
function cocinar(ingrediente1, ingrediente2, ...masingredientes) {
    console.log("ingrendiente 1: ", ingrediente1);
    console.log("ingrediente 2:", ingrediente2);
    console.log("mas ingredientes", masingredientes);
}
cocinar("pollo "," res"," cerdo", "pescado","camaron"," chile");

/**parametros de tipo SPREAD 
 * SE UTILIZAN cuando queremos agregar parametros a la funciones, que nos falten 
 * es decir si tenemos una funcion que recibe 3 argumentos, y llenamos 2 y nos falta 1 , podemos agregaros con SPREAD
 * colocando ... delante de los argumentos de la funcion(...argumento1, argumento2);
 *  
*/

function cocinar(ingrediente1, ingrediente2, ingrediente3){
    console.log(ingrediente1);
    console.log(ingrediente2);
    console.log(ingrediente3);
   // console.log(ingrediente4);

} //arreglo que contiene dos ingredientes
var ingredienteBase = ["*pollo","tomate"];
//llamamos al metodo cocinar
cocinar(...ingredienteBase, "arros");
/**NOTA: se puede convinar parametros de tipo REST y SPREAD */
/** funciones anonimas o sin nombre, un conjunto de funciones que no necesitamos aislar
 * hacer un CALLBACK,  se crea de la siguiente manera
 */
(// se aisla poniendo doble parentesis ()() de esta manera 
    function(){
        var mensaje="hola de nuevo";
        console.log(mensaje);
    }
)()
   
//guarammos una funcion anonmi dentro de una variable
var saludar= function(nombre){
    var mensaje="hola"+ nombre;
    return mensaje;
}
var resultado= saludar("dean ");
console.log(resultado);
/**de esta manera podemos imprimier este resultado dnetro de la mism inicializacion de la variable
 * 
 */
/** ENTENDIENDO LOS CALLBASK
 * hacen juegon con funciones anonimas, y funciones que reciban funciones
 * asignamos CB a un parametro para saber que es un CB
 */
function mostrarnombre() {
    console.log("yo soy un callback");
}
//funcion que recibe una funcion y dentro la ejecuta 
function ejemplocallback(fn)
{
    fn();
}
//lo mandamos a llamar la funcion principal
ejemplocallback(mostrarnombre);

/** ejemplo de callback */
function funcion1(){
    setTimeout(function () {
        console.log("mesanje 1");
    }, 1000// representa un numero
    );
}
function funcion2() {
    console.log("mensajes 2");
}
//mandamos a llamar las dos funciones
// hara que se muestren los dos mensajes de forma correcta
 //   funcion1();
    //funcion2();
/**  ase se muestra como resultado primerl el mensaje 2 y
 * un segundo despues se mostrara el mesaje1
 * para evitar esto se puede hacer un llamado de la funcion despues de el setTimeOut
 * mandando a llamar a la funcion fn();
 * de la siguiente manera
 */
//funcion1 recibe una funcion callback
function funcion1(fn) {
    //llamamos el metodo javascript SetTimeOut
    setTimeout(
        //recibe una funcion anonima
        function(){
            //lo que hare es mandar el mensaje y ademas ejecutar la funcion que toma del argumento
            console.log("mensaje 1 desde callback");
            fn();
        },500        //el segundo argumento de timeout es los milisegundos en este caso 2sec.
    );// cerramos settimeout 
 //cerramos funcion 1
}
//creamos la funcion2 que nos mostrara el mensaje2
function funcion2() {
    console.log("mensaje 2 dentro del callback");
}
//llamamos a consola

var mostrar =funcion1(funcion2);
console.log(mostrar);

/*****************************************************
 * funciones ARROW | Fat Arrow |Lambda
 * son otra manera de escribir funciones anonimas
 * o sin nombre
 * son funciones flecha, su principal idea es simplificar 
 * la sintaxis en estos tipos de funciones
 * 
 * a continuacion se mostrara como se realiza una
 */

var saludarArrow = nombre => "hola"+ nombre+"  creaste una funcion Arrow!";

//se muestra en pantalla
console.log(saludarArrow('emmanuel'));

//variante 2
var sumararrow = cantidad=>cantidad+10;
console.log(sumararrow(10));

//variante con dos parametros en nuestra funcion anonima
var multiplicarArrow = ( num1, num2) => (num1 * num2)+10;
//esta funcion recibe 2 parametros, los multiplica y al resultado le suma 10;
//llamamos a consola y el resultado es 210
console.log( multiplicarArrow(10,20));
// que pasa si necesitas mas operaciones
//encapsulamos todas las funciones de la siguiente manera
var generar = (datoA, datoB)=> {
    //declaramos una nueva variable datoC=5 
    var datoC = 5;
    //sumamos las 3 cantidades
    return datoA+datoB+datoC;
}
// mostramos el resultado
console.log(generar(100,40));

/**********************************************************
 * aqui empezamos a trabajar con el operador this
 * se usa para referenciar al mismo componente con el que estmos trabajando
 * al ser funciones anonimas no hay como referenciarlas
 * usamos this.
 */

//hacemos una constante donde activamos el boton
//comentamos esta linea para los ejercicios siguientes 
const boton = document.querySelector('.boton');
//creamos un evento listener
boton.addEventListener('click', function () {
    //muestra en consola cuantas veces has tipado el boton
    console.log('boton pausado'); 
    //se trae toda la informacion dentro de la classe .boton en html
    console.log(this);
});
/*******************************************************************************
 * interactuar entre javascript y html
 * esto se logra con los listener escuchadores
 * se puede agregar directamente en las etiquetas 
 * o mejor aun trabajar todas interacciones con javascript
 * 
 * se logra de esta manera
 */
//iniciamos una constante de tipo objeto llamada boton donde invocamos una funcion que recibe 
// el parametro de la clase que queremos utilizar , en este caso la class=" boton"
const boton1 = document.querySelector(".boton__eventos");
// agregamos el listener a la constante boton
//esta recibe una cadena de texto puede ser de tipo
// click, mouseover, , un callback (funcion anonima)
boton1.addEventListener("click", function() {
    //imprimimos en consola el siguiente mensaje
    console.log("el boton se ha pulsado");
});
//cuando te encuentras sobre el boton o el elemento
boton1.addEventListener("mouseover", function() {
    //imprimimos en consola el siguiente mensaje
    console.log("el mouse esta sobre el boton");
});
//cuando te encuentras fuera de un elemento html
boton1.addEventListener("mouseout", function() {
    //imprimimos en consola el siguiente mensaje
    console.log("el mouse esta fuera del boton");
});

/*****************************************************************************************
 * eventos del teclado
 * 
 * en este capitulo se observan los diferentes eventos para cad tecla en nuestro teclado
 * keydown
 * keypress
 * keyup
 * 
 * para esto delcaramos un elemento recervado window
 * invocamos la funcion listener e ingresamos un callbacn
 */
//keydown
window.addEventListener("keydown", function (event) {
    console.log("precionaste el teclado");
    //con esta invocacion del objeto String, y el metodo event.keyCode 
    //podemos ver que tecla tipio nuestro usuario
    console.log(String.fromCharCode(event.keyCode));
});
//keypress
window.addEventListener("keypress", function (event) {
    console.log("mantienes presionado el teclado");
});
//keyup
window.addEventListener("keyup", function (event) {
    console.log("dejaste de presionar el teclado");
});
/********************************************************************************************
 * eventos de carga de documento
 * 
 * en esta seccion se esplica un poco de la carga de documento
 * con nuestro objeto window y su funcion listener
 * de la siguiente manera, el evento load
 */
window.addEventListener("load",function(){
    console.log("el contenido de la ventana se ha cargado");
//aqui podriamos poner las acciones siguientes una vez que nuestra pagina cargo correctamente

}); 
/**********************************************************************************
 * eventos multimedia en javascript
 * 
 * declaramos una constante que contenga un queryselector que reciba la clase .botonVideo
 * 
 */
const video = document.querySelector('.botonVideo');
//traemos la funcion listener donde seleccionamos que tipo de evento queremo
/*video.addEventListener("play", function(){
    console.log('el video ha iniciado');
});
video.addEventListener("seeking", function(){
    console.log('el video ha iniciado');
});
video.addEventListener("ended", function(){
    console.log('el video ha iniciado');
});*/

/******************************************************************
 * temporizadores
 * para hacer acciones dependiendo de los intervalos de tiempo
 */
//SetInterval
//declaramos una funcion llamada setColor que actualizara cada 3 seg
//setInterval sirve para hacerlo infinitasveces cada trantos milisegundos
var temporizador= setInterval(function (){
    setColor();
}, 2000);


function setColor(){
    var pagina = document.body;//declaramos e inicializamos una variable que contenga el cuerpo del documento
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green": "blue";
}
//asi llamamos desde consola la funcion stopChangeColor(); para que detenga 
function stopChangeColor(){
    //clearInterval sirve para detener el intervalor
    clearInterval(temporizador);
};
//si deseamos tener un timer de una ocacion, debemos manejar 
//setTimeOut() de la siguiente manera
setTimeout( function(){//una funcion anonim
    setColor();//llamamos la funcion que cambia el color del fondo
}, 3000);

/************************************************************************
 * uso de los alerts, no debes abusar puesto que a los usuarios 
 * hay distinto tipos de notificaciones esta 
 * las alertas son muy importantes, tratemos de evitar estas alestas pues son muy
 * incomodas, se pueden usar saltos de lineas \n
 */
alert("MENSAJE: \nel video ha terminado");
/***************************************************************************
 * evento confirm
 * 
 * el evemto confirm nos sirve para desplegar una pregunta, y tener aceptar o cancelar 
 * en este ejemplo la colocamos despues de que finaliza el evento o carga de un documento
 */

/*const video2 = document.querySelector('.botonVideo');
//agregamos el listener
video.addEventListener("ended", function () {
    confirm("deseas ver el video nuevamente");
});*/

confirm("desea ver el video nuevamente");
//como se reacciona con los botones
//debemos guardar el resultado en una variable
let resultadoalert = confirm("desea visitar maps¿?");
if (resultadoalert) {
    //window.location = "https://www.google.com";
}
else{
  //  window.location="localhost";
}
/****************************************************************************************************
 *  manejo de ingreso de datos con  pompt
 */
let email = prompt("escribe tu correo electronico");
console.log(email);
if (email==null|| email=="") {
    console.log('no se ingreso correo');
} else {
    console.log('se ingreso el correo ',email);
}

/***************************************************************************
 * manejo de lass propiedades numericas
 * en javascript existen propiedades utilizando los objetos Number
 * con mayuscula al inicio, 
 * se listan las 5 mas comunes
 * ".MAX_VALUE"
 * ".MIN_VALUE"
 * "NEGATIVE_INFINITY"
 * POSITIVE_INFINITY"
 * ".NaN"
 */
//invocamos un log
console.log("MAX_VALUE: ", Number.MAX_VALUE);

console.log("MIN_VALUE: ", Number.MIN_VALUE);

console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);

console.log("POSITIVE_INFINITY: ", Number.POSITIVE_INFINITY);
//ESTA PROPIEDAD ES NOT a NUMBER y puede ser de mucha utilidad cuando se trabaja con datos o formulario
console.log("NaN: ", Number.NaN);

/*************************************************************
 * metodos numerico en java script
 *  convertir numero reales a enteros de punto flotante
 * incluso verificar si son numeros o sin no son numeros o son enteros
 */
var numero= "10.30"; //a qui clara mente se ve que es un string
//convertamoslo a numero
console.log('numero: ', typeof numero, typeof Number(numero));
//en consola se muestra primero que no es numero sino string, y despues que ya es numero
console.log("metodo parseInt: " , parseInt(numero));
console.log("metodo parseFloat:", parseFloat(numero));
console.log("isNaN: ", isNaN(numero));
// isInteger demuestra si es un numero entero per odebemos llamas a Number
console.log("isInteger: ", Number.isInteger(numero));
/***********************************************************************
 * estancias de numero por defecto
 * por ejemplo cuando inicializamos un numero
 * automaticamete tenemos acceso a diferentes funciones
 * en esta seccion se muestra 
 * .toExponential- para exponenciar nuestro numero 
 * .toFixed- para dar un formato de decimales de siempre
 * .toPrecision- 
 * .toString
 */
//incializamos un numero
var numero = 2.5;
//probamos en orden consecutivo 
console.log('to exponential: ', numero.toExponential(4));
console.log('tofixed:', numero.toFixed(2));
console.log('toprecision:', numero.toPrecision(2));
console.log('tostring:', numero.toString());

/****************************************************************
 * eso de cadenas de texto
 * se guarda exacatment como una variable
 * var ""
 */
//siempre que necesitemos cadenas usaremos esta
var pais="mexico";
//como tipo de objeto, donde el texto pasara a ser un tratamiento de arreglo
var comida = new String('pizza');

/* medir una cadena de texto
 * podemos medir nuestra cadena siempre utilizaremos 
*/
var mensaje="hola mi nombre es emmanuel y estoy buscando..."

console.log("la cadena de texto tiene: "+ mensaje.length + " letras");
/***
 * busqueda de texto por indices y por expresiones reguales
 * por metodos indexOf regresa la posicion de la primera letra donde coincide
 * lastIndexOF busca la ultima incidencia y trae la posicion 
 * search regresa la posicion dentro de nuestra variable
 * search con expresion regular, armar 
 */
//
var mensaje="estoy aprendiendo javascript y estoy aprendiendo mucho"; 
resultado = mensaje.indexOf('aprendiendo');
resultado2= mensaje.lastIndexOf('aprendiendo');
resultado3= mensaje.search('java');
