class Carrinho{
    constructor(){
        this.itens = []
        this.quantidadeTotal =  0
        this.valorTotal = 0
    }

    adicionarItem(nome , preco){
        this.itens.push({nome , preco})
        this.quantidadeTotal++
        this.valorTotal += preco

        console.log(`${nome} adicionado ao carrinho.`);
        console.log(`Quantidade: ${this.quantidadeTotal}`);
        console.log(`Valor total: R$ ${this.valorTotal}`);
    }

    removerItem(nome){
        let indice = this.itens.findIndex(item => item.nome === nome);

        if (indice === -1) {
            console.log("Item não encontrado.");
            return;
        }

        this.valorTotal -= this.itens[indice].preco;
        this.itens.splice(indice, 1);
        this.quantidadeTotal--;

        console.log(`${nome} removido do carrinho.`);
        console.log(`Quantidade: ${this.quantidadeTotal}`);
        console.log(`Valor total: R$ ${this.valorTotal}`);
    }
}

let carrinho = new Carrinho();

carrinho.adicionarItem("Notebook", 3500);
carrinho.adicionarItem("Mouse", 120);
carrinho.adicionarItem("Teclado", 200);

carrinho.removerItem("Mouse");

console.log(carrinho);