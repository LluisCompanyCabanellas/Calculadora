const displayValorAnterio= docuement.getElementById('valor-anterior');
const displayValorActual= docuement.getElementById('valor-actual');
const botonesNumeros = docuemnt.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');


botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
    });
