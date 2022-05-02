const display = docuement.getElementById('valor-actual');
const botonesNumeros = docuemnt.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const punto = document.querySelector('.punto');
const calcular = document.querySelector('.calcular');
const borrar = document.querySelector('.borrar');

botonesNumeros.forEach(botonNumero => {
    botonNumero.addEventListener('click', () => {
        display.innerHTML += botonNumero.dataset.numero;
    });
});

botonesOperadores.forEach(botonOperador => {
    botonNumero.addEventListener('click', () => {
        display.innerHTML += botonOperador.dataset.operador;
    });
});

borrar.addEventListener( "click", () => {
    display.innerHTML = "";
})

calcular.addEventListener( "click", () => {

})

punto.addEventListener( "click", () => {
    display.innerHTML += ".";
})