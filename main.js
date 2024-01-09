'use strict'

const btn = document.querySelector ('.js-btn');
const userOption = document.querySelector ('.js-option');
const msgResult = document.querySelector ('.js-result');
const player = document.querySelector ('.js-player');
const computer = document.querySelector ('.js-pc');



const playOptions = () => {
    return userOption.value;
}; // este es el selector. retorna el valor que el usuario mete pero ya. Luego hace falta una funcion que la guarde su valor para poder usarlo

const getRandom = () => {
    const random = Math.ceil(Math.random()*9);
    return random;
};//esta funcion consigue el numero aleatorio 

const numberResult = () => {
    const randomNumber = getRandom ()
    if (randomNumber<= 3){
        return 'Piedra';
    } if (randomNumber >=7) {
        return 'Papel';
    }else {
        return 'Tijera'; 
    } 
} //funcion que compara el numero random 

const winnerResult = () => {
   /* const playOptions = ''*/
   const aa = playOptions();
    const random = numberResult (); 
    console.log(random);
    
    if (aa === 'Piedra' &&  random === 'Tijera'){
        msgResult .innerHTML = `Has Ganado!`;
    }else if (aa === 'Papel' &&  random === 'Piedra'){
        msgResult .innerHTML = `Has Ganado!`;
    }else if (aa === 'Tijera' &&  random === 'Piedra'){
        msgResult .innerHTML = `Has Ganado!`;
    }else if (aa === random){
        msgResult .innerHTML = `Empate!`;
    }else{
        msgResult .innerHTML = `Has perdido!`;

    }    
}; //funcion final 

//funcion para dar las conclusiones 

function handleClick(event) {
    event.preventDefault();
    
    winnerResult();
    console.log (winnerResult);

}

btn.addEventListener('click', handleClick);
