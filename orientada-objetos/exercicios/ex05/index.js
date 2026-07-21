class ContaBancaria {
    constructor(saldoContaCorrente, saldoPoupanca, jurosDaPoupanca) {
        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosDaPoupanca = jurosDaPoupanca;
    }

    depositoContaCorrente(valor) {
        this.saldoContaCorrente += valor;

        console.log(`Depósito realizado!`);
        console.log(`Conta corrente: R$ ${this.saldoContaCorrente}`);
    }

    saqueContaCorrente(valor) {
        if (valor > this.saldoContaCorrente) {
            console.log("Saldo insuficiente!");
            return;
        }

        this.saldoContaCorrente -= valor;

        console.log(`Saque realizado!`);
        console.log(`Conta corrente: R$ ${this.saldoContaCorrente}`);
    }

    depositoPoupanca(valor) {
        this.saldoPoupanca += valor;

        console.log(`Depósito na poupança realizado!`);
        console.log(`Poupança: R$ ${this.saldoPoupanca}`);
    }

    aplicarJuros() {
        this.saldoPoupanca += this.saldoPoupanca * this.jurosDaPoupanca;

        console.log("Juros aplicados!");
        console.log(`Poupança: R$ ${this.saldoPoupanca}`);
    }
}


let conta = new ContaBancaria(1000, 500, 0.01);

conta.depositoContaCorrente(500);

conta.saqueContaCorrente(300);

conta.depositoPoupanca(200);

conta.aplicarJuros();