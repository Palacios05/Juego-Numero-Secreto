let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' :  'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acerto.
        if(numeroDeUsuario >  numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor.');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor.');
        }

        intentos ++;
        limpiarCaja();
    return;
    }
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

    //Si ya sorteamos todos los numeros

    if(listaNumeroSorteados.length == numeroMaximo){
        
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');

    }else{

        if(listaNumeroSorteados.includes(numeroGenerado)){
            return  generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    //Si el numero generado esta incluido en la lista

    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Numero Secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinicarJuego(){
    //Limpiar la Caja
    limpiarCaja();

    //Indicar mensaje de intervalo de numeros
    //Generar el numero secreto
    //Inicializar el numero de intentos
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();