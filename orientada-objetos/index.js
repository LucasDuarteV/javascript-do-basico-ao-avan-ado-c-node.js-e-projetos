class Cachorro{
    constructor(raca,cor){
        this.raca = raca
        this.cor =  cor
    }

    latir(){
        console.log('Au auuu')
    }

    get getCor(){
        return this.cor
    }

    set setCor(cor){
        this.cor = cor
    }
}

let pastor = new Cachorro('Pastor alemão','Cor não definida')

console.log(pastor)

pastor.setCor = 'Preto e Marron'

console.log(pastor.getCor)