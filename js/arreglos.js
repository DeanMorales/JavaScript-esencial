/************************************************************
 * se empieza a tragajar con los arreglos 
 * en java script, se necesitan los 
 * [ "",""] y van separados por coma
 * pueden ser de cuialquier tipo de variable
 * numerica. flotante, enteros. boolean,
 */

/****************************************************************
 * creacion del primer arreglo con javaScript
 * 
 * en esta seccion creamos los arreglos de elementos
 * 
 */
"use strict"

 var arreglo1= [ "tacos" , "ensalada" , "pizza" , "ramen" ];
 console.log(arreglo1);
 var arreglo2 =  [ 1,3,5,3,6,3,78,3,7,2,7,4,5,3,0];
 console.log(arreglo2);
 //para ambos arreglos cada elemento tiene una posicion incial en 0
 //con la funcion typeof podemos saber que tipo de variable es
 console.log(typeof(arreglo1),typeof(arreglo2));
//podemos traer mejor aun el meotod Array.isArray(); para saber si realmete estamos ingresdando un arreglo
console.log(Array.isArray(arreglo1));

/*****************************************************************
 * trabajando con arreglos bidimensionales
 * 
 * se ejecutan  metiondo dentro de un arreglo, mas arreglos de la siguiente manera
 * 
 */
var platillos=[ "ceviche"," tacos" ," pasta" ,"pizza"];
var paises = ["peru", "mexico", "italia","roma"];
//declaramos un arreglo de arreglos 
var menu = [ paises, platillos];
//cuanto mide platillos
console.log(platillos.length);
//vamor a imprimir todos los resultados en un log
for (let i = 0; i < menu.length; i++) {
    //imprime los platillos
    /*var element =  platillos[i];
    console.log(element);*/ 
    for (let j = 0; j < menu.length; j++) {
        //imprime los paises por cada platiilo
       /* const element = paises[j];
        console.log(paises);*/
        //imprimo cada uno de el contenido una sola vez
        console.log(menu[i][j]);
        
    }
}

/*****************************************************************************
 * operaciones basicas de un arreglo 
 * 
 * podemos hacer push que talcuales meter mas datos en el arreglo
 * 
 */
platillos.push("lasagna");
console.log(platillos);




/********************************************************************
 * escribe una funcion que reciba 10 numero enteros,
 * los clasifique por pares y nones, despues los ordene de mayor a menor y luego los mante a 
 * dos arreglos respectivamente
 */
function ClasificaNumeros(num1,...masNum) {
    //recibimos n cantidad de numeros
    /***************************
     * primero creamor un arreglo con los datos de entrada por el usuario
     */
    var num=[num1];
    //metemos todos los numero que nos podrian ingresar
    for (let i = 0; i < masNum.length; i++) {
         num.push(masNum[i]);
    }
    //imprimimos en pantalla los numeros
    console.log("numero recibidos: ",num);
    var pares =[], nones =[];
    // separamos en grupos de pares y nones con un ciclo for
    num.forEach(numero => {
        if(numero % 2 == 0 ){
             pares.push(numero);
        }else{
            nones.push(numero);
        }
    });
    //ahora vos a ordenarlos con un par de ciclos 
        //recorremos cada elemento y lo comparamos con todos
        for (let i = 0; i < pares.length; i++) {
            //lo comparamos uno a uno 
            for (let j = 0; j < pares.length; j++) {
                //si nuestra posicion es mayor que el siguiente, entonces lo cambiamos de lugar
                if (pares[j]> pares[j+1] ) {
                    var  aux= pares[j+1]
                    pares[j+1]= pares[j];
                    pares[j]=aux;
                }
            } 
        }
   //clicos for anidados para ordenar de mayor a menor 
        for (let i = 0; i < nones.length; i++) {
            //lo comparamos uno a uno 
            for (let j = 0; j < nones.length; j++) {
                //si nuestra posicion es mayor que el siguiente, entonces lo cambiamos de lugar
                if (nones[j]< nones[j+1] ) {
                    var  aux= nones[j+1]
                    nones[j+1]= nones[j];
                    nones[j]=aux;
                }
            } 
        }
    
    //imprimimos ambos arreglos 
    console.log("pares:", pares);
    console.log("nones: ",nones);
}

/**************************************************************
 * meotod pop sirve para sacar elementos del arreglo
 *  SACA EL ULTIMO ELEMENTO
 */

var userInfo= ["emmanuel", 25, "DeanMorales", 344234234];
    userInfo.pop();
//metodo join(); para sacar los elementos de un arreglo y pasarlos a texto 
var mensaje=userInfo.join();
    console.log(mensaje);
/*********************************************************************************
 * creacion de arreglos desde cero con metoso split(), from() y of();
 * 
 */
//supongamos quie tenemos una cadena de texto, y trae la informacion toda, pero alemnos esta separada por comas
// con el metodo spli(); precibe un parametro split(","); que indique a la cadena de texto cuando separar objetos
//similar como sucede coon el metodo trim();

var mensaje = "ceviche, tacos , pasta";
var arreglo =  mensaje.split(", ");
//para conectarnos a nuestro HTML dentro de nuestras etiquetas p por ejemplo
//utilizaremos document.querySelectorAll() que recibe la class y el tipo de etiqueta
var platillosHTML= document.querySelectorAll(".platillos p");
 //este elemento tiene todo el contenido de la etiqueta, sin todas las propiedades 
var platillosHTML= Array.from(document.querySelectorAll(".platillos p"));
var platillos = platillosHTML.map( platillo => platillo.textContent);
console.log("desde html",platillos);
/************************************************************************
 * ordenando un arreglo con .sort()
 * tambien con .reverse();
 * cabe aclarar que solo lo  ponen en orden alfabetico
 * 
 */
var arregloDesord= [1000,400,3,5,7,456,8];
console.log(arregloDesord.sort());
console.log(arregloDesord.reverse());
/***************************************************************************************
 * des estructura de arreglso 
 * 
 * es a la inversa 
 * pasar de un arreglo y sus componentes internos 
 * debemos asignar a una variable cada contenido 
 */

//desectructuracion
var [platillo1, platillo2, platillo3] = platillos;
console.log(platillo1, platillo2, platillo3);

/***********************************************************************
 * ciclos for de diferentes sintasxio 
 * 
 * se aplica para determinar 
 */

var items= [ 1,5,3,6,3,5];
for( let item in items){
    console.log("este es el dado:", item);
}

/*********************************************************************
 *  forheach
 * 
 */
var platillos= ["ceviche","tacos", "pasta"];
//escribimos  nuestro arreglo, llamamos a nuestro foreach 
//detro declaramos un item => y las sentencias que necesitemos
platillos.forEach( (platillo, i) => 
    //asi imprimmos nuestros arreglo
    console.log(i ,platillo)
);
// la funcion find();
var pelejido= platillos.find(platillo => platillo=="frijoles");

console.log(pelejido);

var menu= [
    {
        nombre: "concha",
        precio: 16,
        categoria: "tradicional"
    },
    {
        nombre: "roll",
        precio: 35,
        categoria: "americano"
    },
    {
        nombre: "brioche",
        precio: 35,
        categoria: "frances"
    }
];

var numplatillo= menu.findIndex( pan => pan.nombre == "concha");

console.log("platillo numero: ", numplatillo);

/***********************************************************
 * filtrando arreglos usando javaScript
 * 
 * con la funcion filter();
 * utilizadon dentro una funcion anonima
 */
var resultado  = menu.filter(platillo => platillo.precio== 35);
console.log(resultado);
//filtra y nos trae todos los resultados que coincida

/************************************************
 * validacion de elementos de un arreglo
 * 
 * donde podemos poner una decision
 * ejemplo
 * platillos menores de 30 pesos
 * con la funcion some osea algunos
 * podemos poner una condicion 
 * 
 * "algunos platillos son menores de 20 ?"
 * y con every
 * 
 * "cada platillo es menor de 20? "
 */
resultado= menu.some( pan => pan.precio <20);
console.log("hay platillos abajo de 20?: ", resultado);
resultado= menu.every( pan => pan.precio <20);
console.log("hay platillos abajo de 20?: ", resultado);
/**************************************************************
 * entender el DOM y el BOM 
 * PROPIEDADES y metodos de DOM
 * propiedades y metodos del BOM
 */