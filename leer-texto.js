'use strict';

//Selectores JS
const texto = document.querySelector('.texto');
const btnLeer = document.querySelector('.btn-leer');

//evento haz click y lee texto
btnLeer.addEventListener('click', () => {
    const locutor = new SpeechSynthesisUtterance()
    const voz = window.speechSynthesis
    locutor.text = texto.value
    voz.speak(locutor)

});