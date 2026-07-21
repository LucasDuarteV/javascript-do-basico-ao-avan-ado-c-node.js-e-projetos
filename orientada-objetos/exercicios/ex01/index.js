class Conta{
    constructor(saldo = 0){
        this.saldo = saldo
    }
    deposito(valor){
        this.saldo += valor
        console.log(`Valor depositado com sucesso!`)
        console.log(`Saldo da conta: ${this.saldo}`)
    }
    saque(valor){
        if(valor > this.saldo){
            console.log(`Valor para saque é maior que saldo!`)
            console.log(`Saldo: ${this.saldo} | Valor: ${valor}`)
            return
        }

        this.saldo -= valor
        console.log(`Saque realizado: ${this.saldo}`)
        console.log(`Saldo disponivel: R$ ${this.saldo}`)
    }
}

let conta = new Conta(1000)

conta.deposito(1000)

conta.saque(1200)
conta.saque(600)
conta.saque(100)
conta.saque(500)
conta.saque(100)

conta.deposito(1000000000)