const cachorro = {
    raca: 'SRD',
    uivar: function(){
        console.log('Auuuuuuuuuuu!')
    },
    rosnar: function(){
        console.log('Grrrrrrrrrrrrrr!')
    },
    setRaca(raca){
        this.raca = raca
    },
    getRaca(){
        return console.log('A raça do meu cachorro é: ' + this.raca)
    }
}

cachorro.setRaca('Pastor alemão')
cachorro.getRaca()
