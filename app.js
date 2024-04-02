let numeroSecreto = 0;
let intentos = 1;
let intentosMaximos = 5;
let listaNumerosSorteados = [];
let wins = 0;
let numeroMaximo = 10;

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorDeUsuario`).value);
    if (isNaN(numeroDeUsuario)) {
        asignarTextoElemento(`p`, `¡Escribe un numero por favor!`);
        changeStatusImage("./img/mmm.png")
    } else {
        if (intentos === intentosMaximos - 2) {
            changeStatusImage("./img/ahhh.png");
        }
        if (numeroSecreto === numeroDeUsuario) {
            wins++;
            cambiarEstatusBotones();
            if (wins === numeroMaximo) {
                stopGame("./img/win.png", `p`, `¡Acertaste todos los numeros`, false);
            } else {
                changeStatusImage("./img/winner.png");
                asignarTextoElemento(`p`, `¡Acertaste en ${intentos} ${(intentos == 1) ? " oportunidad" : " oportunidades"}!`);
            }
        } else {
            asignarTextoElemento(`p`, `El número secreto es ${(numeroDeUsuario > numeroSecreto) ? "menor" : "mayor"}`);
            if (intentos === intentosMaximos) {
                stopGame("./img/lose.png", `p`, `¡Se acabo el juego!`, true);
            }
            intentos++;
        }
    }
    limpiarCaja();
}

function stopGame(image, elemento, mensaje, condicion) {
    changeStatusImage(image);
    if (condicion) {
        cambiarEstatusBotones();
    }
    asignarTextoElemento(elemento, mensaje);
    listaNumerosSorteados = [];
    wins = 0;

}

function generarNumeroSecreto() {
    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while (listaNumerosSorteados.includes(numeroGenerado));
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    cambiarEstatusBotones();
}

function condicionesIniciales() {
    asignarTextoElemento(`h1`, `Juego del número secreto`);
    asignarTextoElemento(`p`, `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    changeStatusImage("./img/think.png");
}

function changeStatusImage(image) {
    document.getElementById("statusIMG").src = image;
}

function cambiarEstatusBotones() {
    document.querySelector(`#reiniciar`).disabled = !document.querySelector(`#reiniciar`).disabled;
    document.querySelector(`#intento`).disabled = !document.querySelector(`#intento`).disabled;
}

function limpiarCaja() {
    document.querySelector(`#valorDeUsuario`).value = ``;
}

function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).textContent = texto;
}

condicionesIniciales();

/////////////////////////////////////////////desafios 1/////////////////////////////////////////////
//Crear una función que muestre "¡Hola, mundo!" en la consola.
/*function holaDesdeConsola(){
    console.log(`¡Hola, mundo!`);
}*/
//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
/*function holaUsuarioConsola(nombre){
    console.log(`¡Hola, ${nombre}!`);
}*/
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
/*function dobleDeNumero(numero){
    return numero * 2;
}*/
//Crear una función que reciba tres números como parámetros y devuelva su promedio.
/*function promedio(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
}*/
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
/*function maximo(numero1, numero2){
    return Math.max(numero1, numero2);
}*/
//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
/*function dobleDeNumero(numero){
    return Math.pow(numero, 2);
}*/

/////////////////////////////////////////////desafios 2/////////////////////////////////////////////
/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en 
metros y peso en kilogramos, que se recibirán como parámetros.*/
/*function imc(estatura, peso){
    return peso / Math.pow(estatura);
}*/
/*Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/
/*function factorial(numero){
    return (numero == 0) ? 1 : numero * factorial(numero - 1);
}*/
/*Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente
 en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera 
 la cotización del dólar igual a R$4,80.*/
/*function conversionDolares(dolares){
    return dolares * 4.80;
}*/
/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando
 la altura y la anchura que se proporcionarán como parámetros.*/
/*function areaRectangulo(base, altura){
    return base * altura;
}
/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
 utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/
/*function areaCirculo(radio){
    return Math.pow(radio) * 3.141592;
}*/
/*Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/
/*function tablaMultiplicacion(operador){
    let contador = 0;
    let resultado = ``;
    while (contador <= 10){
        resultado += `${operador} x ${contador} = ${operador * contador} \n`
        contador ++;
    }
    return resultado;
}*/

/////////////////////////////////////////////desafios 3/////////////////////////////////////////////
//Crea una lista vacía llamada "listaGenerica".
//let listaGenerica = [];
/*
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista(){
    lenguagesDeProgramacion.foreach((element) => console.log(element));
}
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarListaInversa(){
    lenguagesDeProgramacion.slice().reverse().forEach((element) => console.log(element));
}
mostrarLista();
mostrarListaInversa()*/
//Crea una función que calcule el promedio de los elementos en una lista de números.
/*function promedio(listaCalificaciones){
    let suma = listaCalificaciones.reduce((x, y) => x + y);
    return suma / listaCalificaciones.length;
}*/
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
/*function menorYMayor(lista){
    console.log(`el numero mas pequeño de la lista es ${Math.min(...lista)}, el numero ma grande la lista es ${Math.max(...lista)}`)
}
//Crea una función que devuelva la suma de todos los elementos en una lista.
/*function suma(lista){
    return lista.reduce((x, y) => x + y);
}*/
//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
/*function encontrarElemento(elemento){
    let posicion = -1;
    for(let i = 0; i < listaElementos.length; i++){
        if(listaElementos[i] === elemento){
            posicion = i;
        }
    }
    return posicion;
}*/
//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
/*function sumaListas(lista1, lista2){
    let listaSuma = [];
    if(lista1.length == lista2.length){ 
        for(let i = 0; i < lista1.length; i++){
            listaSuma.push(lista1[i] + lista2[i]);
        }
    }
    return listaSuma;
}*/
//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
/*function doble(lista){
    let listaDeDobles = [];
    lista.foreach((element) => listaDeDobles.push(element * 2));
    return listaDeDobles;
}*/