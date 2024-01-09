'use strict'

const btn = document.querySelector ('.js-btn');
const userOption = document.querySelector ('.js-option');
const playResult = document.querySelector ('.js-result');
const player = document.querySelector ('.js-player');
const computer = document.querySelector ('.js-pc');



const playOptions = () => {
    const valueOptions = userOption.value;
    playResult.innerHTML = valueOptions;    
}; // este es el selector 

const getRandom = () => {
    const random = Math.ceil(Math.random()*9);
    return random;
}//esta funcion consigue el numero aleatorio 

const numberResult = () => {
    if (getRandomNumber <= 3){
        return piedra;
    } if (getRandomNumber >=7) {
        return papel;
    }else {
        return tijera; 
    } 
} //funcion que compara el numero random 

const winnerResult = () => {
    const playOptions = ''
    const random = getRandom();
    console.log(random);
    if (playOptions === numberResult){
        playResult.innerHTML = `Empate`;

    }if (playOptions >= numberResult ){
        playResult.innerHTML = ``

    }

    
}; 

//funcion para dar las conclusiones 

    /*switch (true){
        case player === "piedra" && computer === "tijera":
        
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
    console.log (getRandom);
    

}



btn.addEventListener('click', handleClick);
