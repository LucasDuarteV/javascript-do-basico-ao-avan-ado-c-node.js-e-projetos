class Carro{
    constructor(marca,cor,gasolinaRestante){
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
    }

    usandoCarro(gasolina){
        if(gasolina > this.gasolinaRestante){
            console.log("Gasolina insuficiente!");
            return;
        }

        for (let i = 0; i < gasolina; i++) {
            this.gasolinaRestante--;
            console.log(`Gasolina restante: ${this.gasolinaRestante}`);
        }

        console.log("Viagem finalizada!");
    }

    abastecerCarro(litros){
        for(let i = 0; i < litros; i++){
            this.gasolinaRestante ++
            console.log(`Abastecendo... Gasolina: ${this.gasolinaRestante}`);
        }

        console.log("Abastecimento concluído!");
    }
}

let carro = new Carro("Toyota", "Preto", 100);

console.log(carro);

carro.usandoCarro(100);

carro.abastecerCarro(100);

console.log(carro);