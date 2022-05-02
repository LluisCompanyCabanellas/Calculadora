class Display{
    
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.ValorActual = '';
        this.ValorAnterior = '';
    }


    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() +numero.toStrng(); 
        this.imprimirValores();

    }

    imprimirValores() {
        this.displayValorActual.textContent = this.ValorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}