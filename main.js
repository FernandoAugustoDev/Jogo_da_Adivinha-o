//variaveis 
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');

const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

//Numero Randomico
let random = Math.round((Math.random() * 10));
//Numero de tentativas
let xAttempts = 1;


//Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleResetEnter);


//Funçao callback
function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector('#inputNumber');
    if (Number(inputNumber.value) == ""){
        alert('Voce não digitou um numero, digite um numero');
    } else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
        alert('O Numero digitado não esta entre 0 e 10');
    } else if (Number(inputNumber.value) == random) {
        toggleScreen();
        section2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas!`;
    } else {
        alert('Errou, tente novamente!');
    }
    inputNumber.value = "";
    xAttempts++;
}

function handleResetClick() {
    toggleScreen();
    xAttempts = 1;
    random = Math.round((Math.random() * 10));
}

function toggleScreen() {
    section1.classList.toggle('hide');
    section2.classList.toggle('hide');
}

function handleResetEnter(e){
    if(e.key == 'Enter' && section1.classList.contains('hide')){
        handleResetClick();
    }
    
}

