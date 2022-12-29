"use strict"

const addzeros = (n) => {

    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const navidad = () =>{

    const time = new Date();
    let horas = addzeros(time.getHours());
    let minutos = addzeros(time.getMinutes());
    let segundos = addzeros(time.getSeconds());
    document.querySelector('.hour').textContent = horas;
    document.querySelector('.minute').textContent = minutos;
    document.querySelector('.second').textContent = segundos;


}

navidad();

setInterval (navidad, 1000);