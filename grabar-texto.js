'use strict';

//Selectores JS
const contenido = document.querySelector('.contenido');
const btnGrabar = document.querySelector('.btn-grabar');


//Grabar Texto en archivo de audio

const reconocimientoVoz = window.SpeechRecognition || window.webkitSpeechRecognition
const reconocimiento = new reconocimientoVoz();

reconocimiento.onstart = () => {
    contenido.innerHTML = 'estamos grabando la voz...'
}

reconocimiento.onresult = (e) => {
    console.log(e.results[0][0].transcript)
    let mensaje = e.results[0][0].transcript
    LeerCondicion(mensaje)
}

const LeerCondicion = (mensaje) => {
    const voz = new SpeechSynthesisUtterance()
    if (mensaje.includes('canal')) {
        voz.text = 'No me pareces tan bueno'
    } else {
        voz.text = mensaje
    }
    window.speechSynthesis.speak(voz)
}

const leer = (mensaje) => {
    const voz = new SpeechSynthesisUtterance()
    voz.text = mensaje
    window.speechSynthesis.speak(voz)
}

btnGrabar.addEventListener('click', () => {
    reconocimiento.start()
})