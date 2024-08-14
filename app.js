
let numeroSecreto = 0;
let intentos = 0 ;
let listaNumerosSorteados = [];
let numeroMaximo = 100;

consicionesInicial()




function asignarTextoElemento(elemento, texto){

    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(typeof(numeroDeUsuario));
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1 )? 'vez':'veces'}`)//comparador como el if 
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }else{
        if (numeroDeUsuario>numeroSecreto) {
            
            asignarTextoElemento('p', 'El numero Secreto es menor')
        }else{
            if (numeroDeUsuario<numeroSecreto) {
            
                asignarTextoElemento('p', 'El numero Secreto es mayor')
            }
        }
        intentos++;
        limpiarCaja();
    }
    return;
    
}

function generaNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //si ya sorteamos todos los numeros 
   if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles ')
   }else{
        ///si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
                return generaNumeroSecreto();
        }else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        }
   }        
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    return;
}

function consicionesInicial() {
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero entre el 1 al ${numeroMaximo} `)
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego() {
   //limpiar la caja 
   limpiarCaja()
   //de nuevo los anuncios
   consicionesInicial() 
   // nuevo numero secreto
    // numeros de intentos 
    intentos = 1;
   //desabilitar nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}




/*
function multi() {
    let numero = parseInt(prompt('ingresa la el numero que quires multiplicar'));
    for (let i = 1; i<= 9; i++){
        let resultado = numero * i;
        console.log(`la multiplicacion de ${numero} * ${i}  es : ${resultado}`);
    }
    return;
}
multi();
 




function facto(n) {
    n= prompt("Que numero quieres el factorial ");
    if (n === 0 ||n === 1 ){
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i<= n ; i++){
        resultado *= i;
    }
    return console.log(`El factorial de ${n} es : ${resultado}`);

    
}
   facto(); 







function saludo() {
    console.log("hola,mundo");
    
}
function numero() {
   let numerof = parseInt(prompt('ingresa el numero que ddeseas boblar'));
   numerof = numerof*2
   console.log('tu nemero es;  ', numerof);

}

function promedio() {
    alert('ingresa cada numero que quieres promediar ');
    let prom = parseInt(prompt('dime el primer dia que quieres promediar'));
    let prom1 = parseInt(prompt('dime el segundo dia que quieres promediar'));
    let prom2 = parseInt(prompt('dime el tercer dia que quieres promediar'));
    
    suma = prom + prom1 + prom2;
    
    promd = suma / 3; 

    console.log(promd);
    
}


function mayor() {
    let compara = parseInt(prompt('inglresa primer numeros que desas comparar'));
    let compar  = parseInt(prompt('inglresa segundo numeros que desas comparar'));

    if(compara < compar){
        console.log(compar)

    }else if (compara > compar){
        console.log(compara)

    }else {
        console.log('son iguales')
    }

    
}
 

function multi() {
    let compar  = parseInt(prompt('que numero quieres multiplicar '));
    compar = compar *compar;
    console.log(compar);
    return;
    
}
multi();
mayor();

promedio();

numero();


saludo();

*/
