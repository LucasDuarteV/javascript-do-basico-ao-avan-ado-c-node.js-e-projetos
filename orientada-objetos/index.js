function Cachorro(raca,patas,cor){
    this.raca = raca,
    this.patas = patas,
    this.cor = cor
    this.uivar = function(){
        console.log('Auuuu Auuuuuu')
    }
}

let husky = new Cachorro('Husky', 4 , 'Cinza-claro e branco')
husky.uivar()
console.log(husky)