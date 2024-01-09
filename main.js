'use strict'

const btn = document.querySelector ('.js-btn');
const userOption = document.querySelector ('.js-option');
const playResult = document.querySelector ('.js-result')


const playOptions = () => {
    const valueOptions = userOption.value;
    playResult.innerHTML = valueOptions;
    
};

const random = () => {
    function getRandomNumber(max) { 
        return Math.ceil(Math.random() * 9); 
      } 

}

const randoMovement = () => {
    
}




function handleClick() {
    playOptions()
    console.log (playOptions)

}



btn.addEventListener('click', handleClick);
