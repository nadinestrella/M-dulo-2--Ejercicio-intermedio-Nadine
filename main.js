'use strict'

const btn = document.querySelector ('.js-btn');
const userOption = document.querySelector ('.js-option');
const playResult = document.querySelector ('.js-result');
const player = document.querySelector ('.js-player');
const computer = document.querySelector ('.js-pc');



const playOptions = () => {
    playResult.innerHTML= userOption.value;
        
}; // este es el selector 

const getRandom = () => {
    const random = Math.ceil(Math.random()*9);
    return random;
}//esta funcion consigue el numero aleatorio 

const numberResult = () => {
    const randomNumber = getRandom ()
    if (randomNumber<= 3){
        return 'piedra';
    } if (randomNumber >=7) {
        return 'papel';
    }else {
        return 'tijera'; 
    } 
} //funcion que compara el numero random 

const winnerResult = () => {
    const playOptions = ''
    const random = numberResult (); //no generar numbero random 
    console.log(random);
    if (playOptions === 'piedra' &&  random === 'tijera'){
        playResult.innerHTML = `Has Ganado!`;
    }else if (playOptions === 'papel' &&  random === 'piedra'){
        playResult.innerHTML = `Has Ganado!`;
    }else if (playOptions === 'tijera' &&  random === 'piedra'){
        playResult.innerHTML = `Has Ganado!`;
    }else if (playOptions === random){
        playResult.innerHTML = `Empate!`;
    }else{
        playResult.innerHTML = `Has perdido!`;

    }    
}; //funcion final 

//funcion para dar las conclusiones 

    /*switch (true){
        case playOptions === 'piedra && ' numberResult === 'tijera':
        
        break;
    case player === "papel" && computer === "piedra":
        
        break;
    case player === "tijera" && computer === "piedra":
        break;
    case player === computer:
        
        break;
    default: 
        
    }*/

function handleClick(event) {
    event.preventDefault();
    playOptions();
    winnerResult();
}

btn.addEventListener('click', handleClick);
