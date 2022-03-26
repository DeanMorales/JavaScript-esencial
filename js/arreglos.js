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
//function con map nos sirve para 
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
/****************************************************
 * el document  
 * 
 * se explicara los elements by tag name
 * te permite obtener los elememntos html por etiquetas
 * 
 *///
 //incializamos 4 variables, de tipo document. donde obtenemos elementos por 
 //ID, etiqueta, classe 
var boton= document.getElementById("boton");
var fondolorem = document.getElementById("lorem");
//obtenemos las etiquetas existentes p, pero ademas trae todaaaal la informacion y propiedades de esa etiqueta
var todosLosParrafos = document.getElementsByTagName('p')[5].textContent;
//text content trae solo esa propiedad de nuestra atiqueta con  class parrafo3
var parrrafoPorClase= document.getElementsByClassName("parrafo3")[0].textContent;
var foto;

//invocamos las funciones de ejemplo para cada una 
boton.addEventListener('click', function () {
    //imprimimos en consola el contenido del nnuestras etiquetas seleccionadas
    console.log(todosLosParrafos);
    console.log(parrrafoPorClase);

    //ademas cambiamos el aspecto fisico de nuestro boton 
    boton.style.width= "200px";
    boton.style.background= "#44bba4";
    boton.style.color= "white";
    boton.style.borderRadius= "5%";
    boton.style.border= "0px";
    boton.style.fontFamily= "verdana";
    //si nuestro fondo con el id lorem
    if(fondolorem.style.background=="black")
    {   //cambiarlo a crayola
       fondolorem.style.background="#e7bb41";
    }
    else{
        fondolorem.style.background="black";
    }
    //podemos crear fotons
    var foto = document.createElement("img");
    foto.src= "./img/foto1.jpg"
    foto.name= "foto1"
    foto.width="400px";
    document.body.appendChild(foto);
});
/***************************
 * trabajando con el BOM browser object 
 * con el objeto window
 * vamos a obtener el objeto witdh u hight 
 * para saber el ancho y largo de nuestra pagina al momento 
 * 
 */
var alto = window.innerHeight;
var ancho= window.innerWidth;
console.log( "la pagina tiene un alto de :", alto);
console.log("y un ancho de: ", ancho);
//almacenaremos un datos en la local storage
//recibe dons cadenas de texto, el primero es la key y el segundo el contenido
localStorage.setItem("informacion_User","emmanuel morales hernandez");
//declaramos una variable que recibe el contenido desde local estorage 
var infoUser= localStorage.getItem("informacion_User");
//imprimimos en pantalla
console.log(infoUser);
//ahora este contenido lo vamos a mandar a una etiqueta html
//declaramos donde los queremos en un inicio
var principal= document.getElementsByClassName("bom")[0];
principal.innerHTML= infoUser;
//para manipular la navegacion del browser
window.history.back(3);
window.history.forward();
window.history.go(2);

/**********************************************************************
 * uso de fake rest api
 * utilizando fetch
 * vamor a declarar el boton con un listener, y ademas par agestionar el contenido de nuestro div contenedor__api
 */

var botonapli= document.getElementById("boton__api");
var contenedorapi= document.getElementById("contenedor__api");
//declaramos los post o la informacion que necesitamos
var post= null;
//le declaramos un event listener para que al daar click mande a llamar la informacion remotamente
//se trabaja con promesas, despues de nuestro fetch().then()
botonapli.addEventListener("click", function () {
    console.log("clickeaste el boton api");
   //con fetch trabajamos nuestra consulta 
    fetch ("https://api.instantwebtools.net/v1/airlines")
    .then( 
        //jamamos un JSON
        data => data.json()
     ).then(
         //damos formato a la informacion
         data => {
            post =data ;
            //mandamos a consola la informacion
            //console.log(post);
         }
     )
});

/***********************************************************************
 * trabajar con programacion orientada a objetos
 * en esta seccion se trabajara con las Classes, como se declaran
 * como se invocan y como se utilizan, 
 * los constructores, sus propiedades , y las clases padre e hijos
 */
//se inicia con class y con mayuscula al empezar
class Producto{
    constructor(numSerie){
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }
    //el atributo static nos permite acceder a la propiedad aunque no este declarado ningun objeto del tipo producto o pantalla
    static get infoTienda(){
        console.log("Productos de la tienta patito Inc");
    }
    set garantia(value){
        this.tiempoGarantia -=value;
    }
    get garantia(){
        return this.tiempoGarantia;
    }
}
// indicamos que pantallas hereda de producto numserie
class Pantallas extends Producto  {
    constructor(numSerie,marca, modelo, pulgadas){
        //con parentesis y llaves como si fuera una funcion
        //atributos que hereda de Producto
        super(numSerie);
        //agregaremos las propiedades adelante
        this.marca= marca;
        this.modelo= modelo;
        this.pulgadas=pulgadas;
        //utilizamos this para garantizar que es dentro de la misma class
    }
    

    //los metodos son todas aquellas cosas que pueden hacer 
     encender()
    {
        console.log("la pantalla "+ this.modelo +", se encendio!");
        //podemos acceder a garantia desde la clase hijo pantalla
        this.garantia =1;   
    }

    //set y get
    set peso(value){
        this.kgs= value.trim(); 
    } 
    get peso(){
        return this.kgs;
    }

}
//declaramos una nueva variable de tipo Pantalla
const tvSala = new Pantallas("12345","Master", "Oasis", 55);
//una mas
const tvCuarto = new Pantallas	("12345","Origin", "Artemis", 80);

//llamamos a consola
console.log(tvSala);
console.log(tvCuarto);
console.log(tvSala.encender());

/**************************************************************
 * uso de los errores con javaScript
 * con try and catch
 * 
 */
var valor1= 100;
var valor2= 20;
try {
    
    if( valor1> valor2){
        console.log("mensaje de validacion: ", valor1,"es mayor que ", valor2);
    }
    else {
        throw new Error("valores no validos" )
    }
} catch ( exception) {
    console.log("valor no valido");
    console.log(Error);
}
/***************************************************************
 * depuracion de tu codigo en javascript
 * al encotrarnos con promblemas debemos depurar nuestra aplicacion 
 * debuggear nuestra aplicacion,
 * utilizaremos nuestro navegador, en el inspector de aplicacion 
 * en la pesataña de Sources. 
 * en app.js podemos utilizar breakpoints
 * que durante una condicion se detenga, y dar click en la linea de codigo deseada 
 * 
 */